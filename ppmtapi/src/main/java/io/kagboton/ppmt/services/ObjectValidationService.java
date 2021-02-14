package io.kagboton.ppmt.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ObjectValidationService {

    // return errors and HTTP status of a request
    public ResponseEntity<?> objectResultValidation(BindingResult result){

        if (result.hasErrors()) {

            // retrieve all errors from the current request
            List<FieldError> errors = result.getFieldErrors();

            // extract useful information from the list and build a new list
            Map<String, String> errorMap = new HashMap<>();
            for(FieldError error : errors){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            // return error fields with their related error message
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        return null; // their is no error
    }
}

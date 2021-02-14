package io.kagboton.ppmt.web;

import io.kagboton.ppmt.domain.Project;
import io.kagboton.ppmt.services.ObjectValidationService;
import io.kagboton.ppmt.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ObjectValidationService objectValidationService;


    // create a new project
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){

        // handle and return errors from the request
        ResponseEntity<?> errorMap = objectValidationService.objectResultValidation(result);
        if (errorMap != null) return  errorMap;

        // persist the project if everything is ok
        Project savedProject = projectService.saveOrUpdate(project);
        return new ResponseEntity<Project>(savedProject, HttpStatus.CREATED);

    }

    // fetch an existing project
    @GetMapping("/{projectIdentifier}")
    public ResponseEntity<?> getProjectByIdentifier(@PathVariable String projectIdentifier){

        Project project = projectService.findProjectByIdentifier(projectIdentifier.toUpperCase());

        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    // fetch all existing projects
    @GetMapping("/all")
    public Iterable<Project> getAllProjects(){
        return projectService.findAllProjects();
    }

    // delete an existing project
    @DeleteMapping("/{projectIdentifier}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectIdentifier){
        projectService.deleteProjectByIdentifier(projectIdentifier);
        return new ResponseEntity<String>("Project with ID: '" + projectIdentifier.toUpperCase() + "' was deleted", HttpStatus.OK);
    }

}

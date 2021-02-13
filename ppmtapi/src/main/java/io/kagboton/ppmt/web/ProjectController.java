package io.kagboton.ppmt.web;

import io.kagboton.ppmt.domain.Project;
import io.kagboton.ppmt.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;


    // create a new project
    @PostMapping("")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project){
        Project savedProject = projectService.saveOrUpdate(project);
        return new ResponseEntity<Project>(savedProject, HttpStatus.CREATED);

    }
}

package io.kagboton.ppmt.services;

import io.kagboton.ppmt.domain.Project;
import io.kagboton.ppmt.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    // save or update a project
    public Project saveOrUpdate(Project project){

        return projectRepository.save(project);
    }
}

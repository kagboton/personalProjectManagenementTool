package io.kagboton.ppmt.services;

import io.kagboton.ppmt.domain.Project;
import io.kagboton.ppmt.exceptions.ProjectIdentifierException;
import io.kagboton.ppmt.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    // save or update a project
    public Project saveOrUpdate(Project project){

        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }catch (Exception e){
            throw new ProjectIdentifierException("Project Identifier '" + project.getProjectIdentifier().toUpperCase() + "' already exists" );
        }
    }

    // find a project by it unique identifier
    public Project findProjectByIdentifier(String projectIdentifier){

        Project project = projectRepository.findByProjectIdentifier(projectIdentifier);

        if(project == null){
            throw new ProjectIdentifierException("Project Identifier '" + projectIdentifier + "' does not exist" );
        }

        return project;
    }

    // find all projects
    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    // delete a project
    public void deleteProjectByIdentifier(String projectIdentifier){

        Project project = projectRepository.findByProjectIdentifier(projectIdentifier);

        if(project == null){
            throw new ProjectIdentifierException("Cannot delete project with ID '"+projectIdentifier + "'. This project does not exist");
        }

        projectRepository.delete(project);
    }
}

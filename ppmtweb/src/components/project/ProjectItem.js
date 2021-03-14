import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FlagIcon from '@material-ui/icons/Flag';

function ProjectItem(props) {

    const { project } = props

    return (
        <div>
            <Card> 
                <CardHeader title={project.projectName} subheader="February 14, 2021"/>
                <CardMedia image="https://img.mobiscroll.com/demos/card_2.png" style={{height:0}}/>
        
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {project.projectDescription}
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton color="primary" arial-aria-label="project board">
                        <FlagIcon />
                    </IconButton>
                    <IconButton arial-aria-label="edit project">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" arial-aria-label="delete project">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
        </div>
    )
}

export default ProjectItem

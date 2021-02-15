import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FlagIcon from '@material-ui/icons/Flag';

function ProjectItem() {
    return (
        <div>
            <Card> 
                <CardHeader title="Demo Project" subheader="February 14, 2021"/>
                <CardMedia />
        
                <CardContent>
                    <Typography variant="body" color="textSecondary">
                        This is a few desciption of the project we are working on
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

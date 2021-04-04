import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ProjectItem(props) {

    const { project } = props

    return (
        <div>
            <Card> 
                <CardHeader title={project.projectIdentifier + " :: " + project.projectName} subheader={project.startDate}/>
                <CardMedia image="https://img.mobiscroll.com/demos/card_2.png" style={{height:0}}/>
        
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {project.projectDescription}
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton color="primary" arial-aria-label="project board">
                        <InfoOutlinedIcon />
                    </IconButton>
                    
                    <Link to={`/updateProject/${project.projectIdentifier}`}>
                        <IconButton arial-aria-label="edit project">
                            <EditOutlinedIcon />
                        </IconButton>                
                    </Link>
                    
                    <IconButton color="secondary" arial-aria-label="delete project">
                        <DeleteOutlinedIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
        </div>
    )
}

export default ProjectItem

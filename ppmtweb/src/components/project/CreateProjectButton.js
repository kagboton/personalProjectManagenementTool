import { Button } from '@material-ui/core';
import React from 'react'
import {Link} from 'react-router-dom'


const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Button color="inherit" href="/addProject">Create Project</Button>
        </React.Fragment>
                
    )
}

export default CreateProjectButton;
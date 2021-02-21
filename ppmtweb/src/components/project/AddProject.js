
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root:{
        '& > *': {
            margin: theme.spacing(1), 
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',

        },       
    },
    title:{
        
        textAlign: "center"
    }, 
    formContainer:{       
      
        textAlign: "center"
    },
    formItem: {
               
    }
}));

const AddProject = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const [inputValues, setInputValues] =  React.useState({
        projectName: '',
        projectIdentifier: '',
        projectDescription: '',
        startDate: '',
        endDate: '',  
    })

    const handleChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value
        setInputValues({ ...inputValues, [inputName]: inputValue });
    }


    const handleSubmit = (event) =>{
        event.preventDefault()
        const newProject = {
            projectName: inputValues['projectName'],
            projectIdentifier: inputValues['projectIdentifier'],
            projectDescription: inputValues['projectDescription'],
            startDate: inputValues['startDate'],
            endDate: inputValues['endDate'],  
        }
        props.createProject(newProject, history)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h2">Add a new project</Typography>
                </Grid>
            </Grid>

            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container spacing={3} className={classes.formContainer}>
                    <Grid item xs={12} md={4} className={classes.formItem}>
                        <TextField label="Project Name" name='projectName' value={inputValues.projectName} onChange={handleChange} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.formItem}>
                        <TextField label="Project Identifier" name='projectIdentifier' value={inputValues.projectIdentifier} onChange={handleChange}  variant="outlined" fullWidth/>
                    </Grid>                        
                    <Grid item xs={12} md={7} className={classes.formItem}>
                        <TextField label="Project Description" name='projectDescription' value={inputValues.projectDescription} onChange={handleChange} variant="outlined" multiline rows={4} fullWidth/>
                    </Grid> 
                    <Grid item xs={12} md={7} className={classes.formItem}>
                        <TextField label="Start Date" type="date" name='startDate' value={inputValues.startDate} onChange={handleChange} InputLabelProps={{
                            shrink: true,
                          }}  variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={7} className={classes.formItem}>
                        <TextField label="Estimated End Date" type="date" name='endDate' value={inputValues.endDate} onChange={handleChange} InputLabelProps={{
                            shrink: true,
                          }} variant="outlined" fullWidth/>
                    </Grid>  
                    <Grid item xs={12} md={8} className={classes.formItem}>
                        <Button type='submit' variant="contained" size="large">Create Project</Button> 
                    </Grid>                                                         
                </Grid>                                                                
            </form>
        </div>

       

        
    )
}

AddProject.propTypes = {
    createProject : PropTypes.func.isRequired
}

export default connect(null, {createProject}) (AddProject);
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getProject, createProject } from '../../store/actions/projectActions'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';

import { useParams } from "react-router-dom";

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
               
    },
    alert: {
        marginBottom: "10px"
    }
}));

const UpdateProject = (props) => {

    const classes = useStyles();
    const history = useHistory();
    
    // parameter from path
    const { id } = useParams();
  
    // form fields state
    const [inputValues, setInputValues] =  useState({
        id:'',
        projectName: '',
        projectIdentifier: '',
        projectDescription: '',
        startDate: '',
        endDate: '',      
    })

    // call the getProject() function when component initialize - runs only one time
    useEffect(() => {        
       props.getProject(id, history)      
    }, []);

    // update inputValues when props.project value change
    useEffect(()=>{
        setInputValues(props.project);
    },[props.project]);

    // errors
   const [errors, setErrors] = useState({});
   useEffect(() => {
        setErrors(props.errors)
   }, [props.errors]);

   // handle field change
    const handleChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value
        setInputValues({ ...inputValues, [inputName]: inputValue });
    }

    // handle form submit    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const updateProject = {
            id: inputValues['id'],
            projectName: inputValues['projectName'],
            projectIdentifier: inputValues['projectIdentifier'],
            projectDescription: inputValues['projectDescription'],
            startDate: inputValues['startDate'],
            endDate: inputValues['endDate'],  
        }
        props.createProject(updateProject, history)
    }

    
     return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h2">Update Project</Typography>
                </Grid>
            </Grid>

            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container spacing={3} className={classes.formContainer}>
                    <Grid item xs={12} md={4} className={classes.formItem}>
                        {errors.projectName ? <Alert className={classes.alert} severity="error">{errors.projectName}</Alert> : ''}
                        <TextField label="Project Name" 
                            name='projectName' 
                            value={inputValues.projectName} 
                            onChange={handleChange} 
                            variant="outlined"                            
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.formItem}>
                        {errors.projectIdentifier ? <Alert className={classes.alert} severity="error">{errors.projectIdentifier}</Alert> : ''}  
                        <TextField label="Project Identifier" 
                            name='projectIdentifier' 
                            value={inputValues.projectIdentifier} 
                            onChange={handleChange}  
                            variant="outlined" 
                            fullWidth 
                            disabled 
                        />
                    </Grid>                        
                    <Grid item xs={12} md={7} className={classes.formItem}>
                        {errors.projectDescription ? <Alert className={classes.alert} severity="error">{errors.projectDescription}</Alert> : ''}      
                        <TextField label="Project Description" 
                            name='projectDescription' 
                            value={inputValues.projectDescription} 
                            onChange={handleChange} 
                            variant="outlined" 
                            multiline 
                            rows={4} 
                            fullWidth
                        />
                    </Grid> 
                    <Grid item xs={12} md={7} className={classes.formItem}>
                        <TextField label="Start Date" 
                            type="date" 
                            name='startDate' 
                            value={inputValues.startDate}
                            onChange={handleChange} 
                            InputLabelProps={{
                                shrink: true,
                            }}  
                            variant="outlined" 
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={7} className={classes.formItem}>
                        <TextField label="Estimated End Date" 
                            type="date" 
                            name='endDate' 
                            value={inputValues.endDate} 
                            onChange={handleChange} 
                            InputLabelProps={{
                                shrink: true,
                            }} 
                            variant="outlined" 
                            fullWidth
                        />
                    </Grid>  
                    <Grid item xs={12} md={8} className={classes.formItem}>                           
                        <Button type='submit' variant="contained" size="large">Update Project</Button> 
                    </Grid>                                                         
                </Grid>                                                                
            </form>
        </div>
       
    )
}
UpdateProject.protoTypes = {
    getProject : PropTypes.func.isRequired,
    createProject : PropTypes.func.isRequired,
    project : PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    project: state.project.project,
    errors: state.errors
})

export default connect(mapStateToProps, {getProject, createProject})(UpdateProject);
import { Grid } from '@material-ui/core'
import React, {useEffect} from 'react'
import ProjectItem from './project/ProjectItem';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { getProjects } from '../store/actions/projectActions'
import { PropTypes } from 'prop-types'


const useStyles = makeStyles((theme) => ({   
    projectsContainer: {
        display: "flex",       
        alignItems: "center",
        marginTop: "20px",
        paddingRight: "20px",
        paddingLeft: "20px"
    }
}))

const Dashboard = (props) => {

    const classes = useStyles();

    const {projects} = props.project
    useEffect(() => {
        props.getProjects()        
    },[]);
 

    return (
       <Grid container spacing={3} className={classes.projectsContainer}>
       
            {projects.map(project => (
                <Grid key={project.id} item xs={12} md={3}>
                    <ProjectItem key={project.id} project={project}/>
                </Grid>
            ))}
            
       </Grid>
    )
}

Dashboard.protoTypes = {
    projects: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    project: state.project
})

export default connect(mapStateToProps, {getProjects})(Dashboard)

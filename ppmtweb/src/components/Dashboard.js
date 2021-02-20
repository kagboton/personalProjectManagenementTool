import { Grid } from '@material-ui/core'
import React from 'react'
import ProjectItem from './project/ProjectItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({   
    projectsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        paddingRight: "20px",
        paddingLeft: "20px"
    }
}))

const Dashboard = () => {

    const classes = useStyles();

    return (
       <Grid container spacing={3} className={classes.projectsContainer}>
            <Grid item xs={12} md={3}>
                <ProjectItem />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectItem />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectItem />
            </Grid>
            <Grid item xs={12} md={3}>
            <ProjectItem />
            </Grid>
       </Grid>
    )
}

export default Dashboard

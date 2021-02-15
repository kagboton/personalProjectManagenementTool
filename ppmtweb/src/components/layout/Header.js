import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import React from 'react'
import CreateProjectButton from '../project/CreateProjectButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ViewComfyIcon />                        
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Enayon PM
                    </Typography>
                    
                    <Button color="inherit" href="/dashboard">Dashboard</Button>
                    
                    <CreateProjectButton />
                    
                    <Button color="inherit">Login</Button> 
                </Toolbar>            
            </AppBar>            
        </div>
    )
}


export default Header

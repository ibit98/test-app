import React from 'react';
import { Route, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from "@material-ui/core/AppBar";

import Home from "./Home";
import About from "./About";

const Index = [
    {
        path :'/',
        name : 'Home',
        Component: Home
    },
    {
        path :'/about',
        name : 'About',
        Component: About
    },
    {
        path :'/skills',
        name :'Skills',
        Component: Home
    },
    {
        path :'/projects',
        name : 'Projects',
        Component: Home
    },
    {
        path :'/contact',
        name :'Contact',
        Component: Home
    }
]

const useStyles = makeStyles((theme) =>({
    title:{
        display: "inline-block",
        textAlign:"left",
        fontFamily: 'Roboto-Slab',
        color: "#000000"
    },
    menuButton: {
        borderRadius: '20px',
        padding: '5px'
    },
    index:{
        display: "block",
        maxWidth: '400vw',
        float: "right"
    },
    button:{
        textDecoration: "none",
        color: '#1976d2',
        fontFamily: 'Lato',
        '&:hover': {
            color: '#f46548',
        }
    },
    selected:{
        color: '#f46524',
        fontWeight: "bold"
    },
    appbar:{
        backgroundColor:'#ffffff99'
    },
    container:{
        backgroundSize: "cover",
        height:'100vh',
        position:"absolute",
    }
}))



function Landing () {
    const classes=useStyles();
    const [DrawerState,setState]= React.useState(false);
    const toggleDrawer = () =>{
        if (DrawerState){
            setState(false);
        }
        else {
            setState(true);
        }
    }
    return(
        <div >
            <div className={classes.container} >
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar >
                        <div style={{marginRight:"auto"}}>
                            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='subtitle1' className={classes.title} >
                                Indranil Bit
                            </Typography>
                        </div>
                        <div style={{marginLeft:"auto"}}>
                            {
                                Index.map((item) =>
                                    <Button className={classes.menuButton}>
                                        <NavLink className={classes.button}
                                                 to={item.path}
                                                 activeClassName={classes.selected}
                                                 exact
                                        >
                                            {item.name}
                                        </NavLink>
                                    </Button>
                                )
                            }
                        </div>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={DrawerState}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                >
                    <List>
                        {Index.map((text) => (
                            <NavLink
                                className={classes.button}
                                to={text.path}
                                activeClassName={classes.selected}
                                onClick={toggleDrawer}
                                exact
                            >
                                <ListItem button key={text.path} >
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            </NavLink>
                        ))}
                    </List>
                </SwipeableDrawer>
            </div>
                {Index.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames='page'
                                unmountOnExit
                            >
                                <Component/>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
        </div>
    )
}

export default Landing;
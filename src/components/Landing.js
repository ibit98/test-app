import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ReactCanvasNest from 'react-canvas-nest';
import background from '../images/01.jpg'
import Home from "./Home";
import AppBar from "@material-ui/core/AppBar";

const Index = [
    {
        path :'/home',
        name : 'Home'
    },
    {
        path :'/about',
        name : 'About'
    },
    {
        path :'/skills',
        name :'Skills'
    },
    {
        path :'/projects',
        name : 'Projects'
    },
    {
        path :'/contact',
        name :'Contact'
    }
]

const useStyles = makeStyles((theme) =>({
    title:{
        display: "inline-block",
        textAlign:"left",
        fontFamily: 'Raleway',
        color: "#000000"
    },
    menuButton: {
        borderRadius: '20px',
        padding: '5px'
    },
    index:{
        display: "block",
        maxWidth: 400,
        float: "right"
    },
    button:{
        textDecoration: "none",
        color: '#1976d2',
        fontFamily: 'Lato',
        '&:hover': {
            color: '#f46524',
        },
        '&:active': {
            color: '#f46524',
        },
    },
    background: {
        backgroundImage: `url(${background})`,
        width: 'auto',
        height: '750px',
        minHeight:'auto',
        minWidth:'auto',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundAttachment: "fixed",

    },
    appbar:{
        backgroundColor:'#ffffff00'
    },
    container:{
        // backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width:'100%',
        height:'700px',
        position:"absolute",
        //opacity:.5,
        backgroundAttachment: "fixed",
    },
    canvasNest:{
        width:'100%',
        height:'100%',
        opacity:1
    }
}))

const config ={
    count: 80,
    pointR: 3,
    pointColor:'0,221,205',
    dist: 100,
    lineColor:'222,228,27',
    lineWidth:4,
    follow: true,
    mouseDist: 20000
}

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
        <div className={classes.container} >
            <ReactCanvasNest className={classes.canvasNest} config={config} />
            <AppBar position='fixed' className={classes.appbar}>
                <Toolbar className={classes.menu}>
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
                                    <Link className={classes.button} to={item.path}>
                                        {item.name}
                                    </Link>
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
                        <Link className={classes.button} to={text.path} onClick={toggleDrawer}>
                            <ListItem button key={text.path} >
                                <ListItemText primary={text.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </SwipeableDrawer>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={Home}/>
                <Route path="/skills" component={Home}/>
                <Route path="/projects" component={Home}/>
                <Route path="/contact" component={Home}/>
            </Switch>
        </div>
    )
}

export default Landing;
import FadeIn from "react-fade-in";
import Home from "./src/components/Home";
import {Link, NavLink, Route, Router, Switch} from "react-router-dom";
import React from "react";
import Slider from "@material-ui/core/Slider";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Canvas} from "react-canvas-js";
import About from "./src/components/About";
import ReactTypingEffect from "react-typing-effect";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import background from "./src/assets/01.jpg";
import {animated} from "react-spring";

<div>
    <p style={{color :`hsl(${this.state.sliderValue}, 100%, 50%)`}}> Welcome to my page ! </p>
    <Slider value={this.state.sliderValue} onChange={this.handleChange} max = "360" />
</div>

<AppBar color='transparent' position="static">
    <Toolbar >
        {<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>}
        <Typography variant="subtitle1" className={classes.title}>
            Indranil Bit
        </Typography>
        <Button >
            <Link className='Navbar-button' to="/home">Home
            </Link>
        </Button>
        <Button >
            <Link className='Navbar-button' to="/about">About
            </Link>
        </Button>
        <Button>
            <Link className='Navbar-button' to="/skills">Skills
            </Link>
        </Button>
        <Button>
            <Link className='Navbar-button' to="/projects">Projects
            </Link>
        </Button>
        <Button>
            <Link className='Navbar-button' to="/contact">Contact
            </Link>
        </Button>
    </Toolbar>
</AppBar>

<Route path="/" component={Home} exact/>
<Route path="/home" component={Home}/>
<Route path="/about" component={Home}/>
<Route path="/skills" component={Home}/>
<Route path="/projects" component={Home}/>
<Route path="/contact" component={Home}/>
{/*<Route component={Error} />*/}

{/*<Switch>*/}
{/*{*/}
{/*    Index.map((item)=>*/}
{/*        <Route path={item.path} component={`${item.name}`/>}/>*/}
{/*    )*/}
{/*}*/}
{/*</Switch>*/}



<Paper className={classes.paper}>
    <Toolbar className={classes.menu}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
        </IconButton>
        <Typography variant='subtitle1' className={classes.title} >
            Indranil Bit
        </Typography>

        <div className={classes.index}>
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
</Paper>


<SwipeableDrawer
    open={DrawerState}
    onClose={toggleDrawer}
    onOpen={toggleDrawer}
>
    <List>
        {Index.map((text, index) => (
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
    <Route path="/about" component={About}/>
    <Route path="/skills" component={Home}/>
    <Route path="/projects" component={Home}/>
    <Route path="/contact" component={Home}/>
</Switch>


</ReactCanvasNest>

<Paper className={classes.paper}>
<Toolbar className={classes.menu}>
<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
<MenuIcon />
</IconButton>
<Typography variant='subtitle1' className={classes.title} >
Indranil Bit
</Typography>

<div className={classes.index}>
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
</Paper>

<ReactTypingEffect
className={classes.heading}
staticText="I am" text={items}
eraseDelay={50}
typingDelay={200}
cursorClassName={classes.cursor}
/>
<div>
<Fab size="medium" color="secondary" aria-label="add" className={classes.fab}>
<ExpandMoreIcon />
</Fab>
</div>


background: {
backgroundImage: `url(${background})`,
width: '100%',
height: '100%',
minHeight:'auto',
minWidth:'auto',
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
position: "absolute",
backgroundAttachment: "fixed",
opacity:.8
},

<animated.div
className="card"
onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
onMouseLeave={() => set({xys: [0, 0, 1]})}
style={{transform: props.xys.interpolate(trans)}}
/>

<div className={classes.container}>
<div className={classes.profile}>
<animated.div
className="card"
onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
onMouseLeave={() => set({xys: [0, 0, 1]})}
style={{transform: props.xys.interpolate(trans)}}
/>
</div>

</div>
<div className={classes.fab}>
<NavLink     to={'about'}>
<Fab
size="medium"
color="secondary"
aria-label="add"
>
<ExpandMoreIcon />
</Fab>
</NavLink>
</div>
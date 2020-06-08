import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import ReactCanvasNest from "react-canvas-nest";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    heading:{
        fontFamily : 'Raleway',
        fontWeight: "bold",
        fontSize: 50,
        color: '#f46524',
    },
    cursor:{
        fontFamily: 'Raleway',
        fontWeight: "bolder" ,
        color: '#000000'
    },
    container:{
        backgroundSize: "cover",
        width:'100%',
        height:'auto',
        maxHeight:"auto",
        position:"absolute",
    },
    fab: {
        display:"block",
        paddingTop:400,
        paddingLeft:'20vw',
        paddingRight:'20vw',
        alignSelf: "center",

    },
    canvasNest:{
        width:'100%',
        height:'auto',
        opacity:1
    },
    wrapper:{
        paddingTop:100,
        alignItems:"center"
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

const items = ['Indranil Bit.', 'a Competitive Coder.','a Web Developer.','a Data Enthusiastic.'];
function Home() {
    const classes=useStyles();
    return (
        <div className={classes.container}>
            <ReactCanvasNest className={classes.canvasNest} config={config} />
            <div className={classes.wrapper}>
                <ReactTypingEffect
                    className={classes.heading}
                    staticText="I am" text={items}
                    eraseDelay={50}
                    typingDelay={50}
                    cursorClassName={classes.cursor}
                />
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
            </div>
        </div>
    )
}

export default Home;
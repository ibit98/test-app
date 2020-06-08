import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { useSpring, animated } from 'react-spring';
import Typography from "@material-ui/core/Typography";
import FadeIn from "react-fade-in";
import {NavLink} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const useStyles = makeStyles((theme)=>({
    heading:{
        fontFamily : 'Raleway',
        fontWeight: "bold",
        fontSize: 50,
        color: '#f46524',
    },
    container:{
        width:'100%',
        height: "auto",
        paddingTop:'10vh',
        alignContent: "center"
    },
    wrapper:{
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",
        alignSelf: "center",
        overflow: 'hidden',
        padding:'5vw',
        paddingBottom:'0vw',
        zIndex: 9999
    },
    fab: {
        paddingTop:'2vh',
        paddingBottom:'1vh',
        paddingLeft:'40vw',
        paddingRight:'40vw',
        width:'10%',
        alignSelf: "center" ,
        justifyContent: "flex-end"
    },
    text:{
        fontFamily:'Lato',
        fontWeight: 20
    },
    profile:{
        padding:'1vw',
        width:'400px',
        height:'400px',
        justifyContent:"flex-start"
    },
    description:{
        textAlign: "center",
        padding:'4vw',
        paddingBottom:'0vw',
        maxWidth: '40rem',
    }
}))
function About() {
    const classes=useStyles();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 150, friction: 5 } }))
    return(
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.profile}>
                    <animated.div
                        className="card"
                        onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                        onMouseLeave={() => set({xys: [0, 0, 1]})}
                        style={{transform: props.xys.interpolate(trans)}}
                    />
                </div>
                <FadeIn delay={500} transitionDuration={800} className={classes.description}>
                    <Typography align='left' variant='h3' style={{fontFamily:'Roboto-Slab',color:'#f46524'}}>
                        About Me
                    </Typography>
                    <Typography align='left' variant='body1' className={classes.text}>
                        Hello there! I am Indranil Bit and I am a Computer Science student
                        currently pursuing my Bachelor of Technology (B.Tech) degree from
                        Indian Institute of Engineering Science and Technology, Shibpur
                        (IIEST, Shibpur), West Bengal and will be graduating in the year 2021 (Expected).

                    </Typography>
                    <Typography>

                    </Typography>
                    <Typography align='left' variant='body1' className={classes.text}>
                        Apart from that, I have a keen interest in Data Structures & Algorithms and
                        also love Problem Solving.
                        I enjoy building Web Application and Web Services in the various cloud computing
                        platform. Also Have worked with React, NodeJs, JavaScript, CSS, HTML5, PHP, MongoDB, MySQL, UI/UX design
                        and many other tools to create aesthetically pleasing, responsive and functional websites.
                    </Typography>
                    <Typography align='left' variant='body1' className={classes.text}>
                        Reach me at <a href={'mailto:iam@ibit98.tech'}>iam@ibit.tech</a>

                    </Typography>
                </FadeIn>

            <div className={classes.fab}>
                <NavLink to={'skills'}>
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

export default About;
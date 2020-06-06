import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme)=>({
    heading:{
        fontFamily : 'Raleway',
        fontWeight: "bold",
        fontSize: 50,
        color: '#f46524'
    },
    image:{
        maxWidth:'100%',
        height:'auto',
        display: "block",
        margin : 0
    },
    cursor:{
        fontFamily: 'Raleway',
        fontWeight: "bolder" ,
        color: '#000000'
    },
    container:{
        paddingTop:100
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(16),
        margin: "auto"
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: '',
        '&:hover': {
            backgroundColor: '',
        },
    }
}))

const items = ['Indranil Bit.', 'a Competitive Coder.','an Web Developer.','a Data Science Enthusiastic.'];
function Home() {
    const classes=useStyles();
    // const [imgURL,setURL]=React.useState("");
    // useEffect(()=> {
    //     client.photos.search({query})
    //         .then(photos => {
    //             console.log(Math.floor(Math.random() * 15));
    //             setURL(photos.photos[Math.floor(Math.random() * 15)].src.landscape);
    //         })
    //     }
    // );
    return (
        <div>
        <div className={classes.container}>
            <ReactTypingEffect
                className={classes.heading}
                staticText="I am" text={items}
                eraseDelay={50}
                typingDelay={200}
                cursorClassName={classes.cursor}
            />
        </div>
        <div>
            <Fab size="medium" color="secondary" aria-label="add" className={classes.fab}>
                <ExpandMoreIcon />
            </Fab>
        </div>
        </div>
    )
}

export default Home;
import { Button, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Sidebar from './Sidebar';
import { AppTool } from './apptool';
import MusicControlBar from './MusicControlBar';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 200, width: 200, position: 'absolute', left: "5%", top: "15%"
    },
    cover: {
        width: 200, height: 200
    },
    songname: {
        position: "absolute", left: "22%", top: "27%", color: "white"
    },
    songdetails: {
        position: "absolute", left: "22%", top: "37%", color : "white"
    },
    button1: {
        position: "absolute", top: "58%", left: "2%", right: "70%", color: "white",
    },
    button2: {
        position: "absolute", top: "68%", left: "2%", right: "70%", color: "white",
    }
}));

export default function MainContent() {
    const classes = useStyles();

    return (
        <>

            <div className="apptool">
                <AppTool />
            </div>
            <div className='side-nav-bar' style={{backgroundColor: '#302E2E'}}>
                <Sidebar />
            </div>
            <div className='main-content'>

                <div>
                    <Card  className={classes.root}
                        style={{ boxShadow: "none" }}>
                        <CardMedia
                            component="img" 
                            className={classes.cover}
                            image="ennaivittu.jpg"
                        />
                    </Card>
                    
                </div>
                <div>
                    <Typography variant='h4' className={classes.songname}>Ennai Vittu - From("Love Today")</Typography>
                    <Typography variant='h5' className={classes.songdetails}>Yuvan Shankar Raja . Sid Sriram . 2022. 1 Song</Typography>
                </div>
                <div>
                    <hr style={{ width: "90%", top: "53%", position: "absolute", right: "5%", color: "black" }} />
                    <Button className={classes.button1}>1. Ennai Vittu - From("Love Today")</Button>
                    <Button className={classes.button2}>2. Pachai Elai - From("Love Today")</Button>
                    <hr style={{ width: "90%", top: "78%", position: "absolute", right: "5%", color: "black" }} />
                </div>

            </div>

            <div className='footer'>
                <MusicControlBar />
            </div>


        </>
    );
}

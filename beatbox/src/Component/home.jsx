// import * as React from 'react';
import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles, Typography } from '@material-ui/core';
import { CardContent } from '@mui/material';
import MusicControlBar from './MusicControlBar';
import Sidebar from './Sidebar';
import { AppTool } from './apptool';

const useStyles = makeStyles({
    h5: {
        color: 'white',
        textAlign: 'start'
    },
    p: {
        color: 'white',
        fontSize: '16px'
    }
})


export default function Home() {

    const classes = useStyles();
    return (

        <>
            <div className='sidenav'>
                <Sidebar />
            </div>

            <div className='apptool'>
                <AppTool />
            </div>

            <div className='main-content'>
                <div className="main-inner-container">

                    <div className='row'>
                        <Typography variant='h5' className={classes.h5}>Recently played</Typography>
                    </div>

                    <div className='row'>

                        <div className='col-md-3'>
                            <Card sx={{ maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image='vittu.jpg'
                                    sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#4B4848' }}
                                />
                                <CardContent sx={{ backgroundColor: '#4B4848', padding: '8px' }}>
                                    <Typography className={classes.p}>Ennai Vittu <br />(From "Love Today")</Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>

                    <div className='row'>
                        <Typography variant='h5' className={classes.h5}>Good Morning..!</Typography>
                    </div>

                    <div className='row'>
                        
                        <div className='col-md-3'>
                            <Card sx={{ maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image='arabic-kuthu.jpg'
                                    sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#4B4848' }}
                                />
                                <CardContent sx={{ backgroundColor: '#4B4848' }}>
                                    <Typography className={classes.p}>Trending Now</Typography>
                                </CardContent>
                            </Card>
                        </ div>

                        <div className='col-md-3'>
                            <Card sx={{ maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image='engeyum-kadhal.jpg'
                                    sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#4B4848' }}
                                />
                                <CardContent sx={{ backgroundColor: '#4B4848' }}>
                                    <Typography className={classes.p}>Harris Hits</Typography>
                                </CardContent>
                            </Card>
                        </div>
                        
                        <div className='col-md-3'>
                            <Card sx={{ maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image='moonu.jpg'
                                    sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#4B4848' }}
                                />
                                <CardContent sx={{ backgroundColor: '#4B4848' }}>
                                    <Typography className={classes.p}>High On Love</Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card sx={{ maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image='vikram.jpg'
                                    sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#4B4848' }}
                                />
                                <CardContent sx={{ backgroundColor: '#4B4848' }}>
                                    <Typography className={classes.p}>Top Beats</Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>

                    <div className='row'>
                        <Typography variant='h5' className={classes.h5}>Artist's MIX..!</Typography>
                    </div>

                    <div className='row'>

                        <div className='col-md-3'>
                            <Card sx={{ maxWidth: 200, maxHeight: 240, borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image='anirudh.jpg'
                                    sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: '#4B4848' }}
                                />
                                <CardContent sx={{ backgroundColor: '#4B4848' }}>
                                    <Typography className={classes.p}>Anirudh's Playlist</Typography>
                                </CardContent>
                            </Card>
                        </ div>

                    </div>

                </div>
            </div>

            <div className='footer'>
                <MusicControlBar />
            </div>
        </>
    )
}
import React from 'react';
import { Grid } from '@material-ui/core';
import { Chrono } from 'react-chrono';
import data from '../assets/data/data';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: `row nowrap`,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('lg')]: {},
    },
    item1: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    item2: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    }
}))

const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.item1}>
                <h1>Skills</h1>
                <Chrono items={data} mode="VERTICAL" disableNavOnKey={false} hideControls theme={{ primary: "#ACBBCA", secondary: "white", cardBgColor: "#F5F6F7", cardForeColor: "violet" }} />
            </div>


            <div className={classes.item2}>
                <Chrono items={data} mode="VERTICAL" disableNavOnKey={false} hideControls />
            </div>


        </div>
    )
}

export default Skills;

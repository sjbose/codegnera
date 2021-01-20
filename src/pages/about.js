import React from 'react';
// import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        flexGrow: 1,
        fontSize: '2rem',
        padding: theme.spacing(4),
    },
    about: {
        position: 'absolute',

        font: `normal 900 3.8em/ 1 'Raleway', sans-serif`,
        textTransform: 'capitalize',
        top: '150px',
        right: '680px',
        letterSpacing: '-2px',
        transform: `  rotate(-90deg)`,
        zIndex: '2',
        color: '#58928C',
        [theme.breakpoints.down('sm')]: {},
        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('lg')]: {},
    },
    me: {
        position: 'absolute',

        font: `normal 700 2.8em/ 1 'Montserrat', sans- serif`,
        textTransform: 'capitalize',
        color: '#F6D55C',
        top: '80px',
        right: '635px',
        transform: `  rotate(-90deg)`,
        [theme.breakpoints.down('sm')]: {},
        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('lg')]: {},
    },
    aboutMeHeading: {
        font: `normal 400 1.4em/1 'Patua One', cursive;`,
        lineHeight: '1.6',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2em',

        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2em',
            textAlign: 'center'
        },
    },
    aboutMeBody: {
        font: `normal 300 0.7em/1.2 'Comfortaa', cursive;`,
        lineHeight: '1.3',


        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',

        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
            textAlign: 'center'
        },

    }

}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ padding: 20, marginBottom: 150 }}>

            <Grid container className={classes.gridContainer}>

                <Grid item lg={6} xs={12} sm={12} md={6} >

                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6} >

                    <Typography variant='h3' className={classes.about} > about</Typography>
                    <Typography variant='h3' className={classes.me} > myself</Typography>
                    <Typography variant='h3' className={classes.aboutMeHeading} > A little bit about myself </Typography>
                    <Typography justify='center' className={classes.aboutMeBody}>Hi I’m Subhajeet bose a software developer based in kolkata. I'm working as a independent developer  for 5 years.I've done work for companies,consulted for startups and collaborated with talented people to create digital products for both business and consumer use.
                    I love the Web platform and I want to make it better for everyone. And I consider myself to be completely blessed that I get to build it for a living.I have a Bachelor’s Degree in Computer application; but everything I know of and on the Web today is self-taught.
                    I’ve always wanted to study multiple majors because I never wanted to stop learning.
                    I’m grateful that I ended up in a field where one of the major requirements for
                    staying relevant is to continuously keep learning
                        </Typography>



                </Grid>


            </Grid  >

        </div>

    )
}

export default About

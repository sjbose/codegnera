import React from 'react';
// import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useState = makeStyles(theme => ({
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
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '1em',


        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',

        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
            textAlign: 'center'
        },
    },
    aboutMeBody: {
        fontFamily: 'Montserrat',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: '0.7em',


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
    const classes = useState();
    return (
        <div className={classes.root} style={{ padding: 20, marginBottom: 150 }}>

            <Grid container className={classes.gridContainer}>

                <Grid item lg={6} xs={12} sm={12} md={6} >

                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6} >

                    <Typography variant='h3' className={classes.about} > about</Typography>
                    <Typography variant='h3' className={classes.me} > myself</Typography>
                    <Typography variant='h3' className={classes.aboutMeHeading} > A little bit about myself </Typography>
                    <Typography justify='center' className={classes.aboutMeBody}>Hi I’m Subhajeet bose a software developer based in kolkata. I'm working as a independent developer  for 5 years.I've done work for companies,
                    consulted for startups,
                    and collaborated with talented people to create digital
                    products for both business and consumer use.I love the Web platform and I want to make it better for everyone. And I consider myself to be completely blessed that I get to build it for a living.

                    I have a Bachelor’s Degree in Computer application; but everything I know of and on the Web today is self-taught.
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

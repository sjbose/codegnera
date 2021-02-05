import React from 'react';
import styled from 'styled-components';
import OnRocket from '../assets/images/OnRocket_mob3.svg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const BannerImg = styled.img`
        display:flex,
        flex:40%,
        max-width:100%;
        width:100%;
        height:600px;
        align-items:center;
        justify-content:center,

        @media(max-width:600){
        width:600px;
        height:600px;
        
        }
        @media(max-width:400){
        
        }
`;


const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontSize: '2rem',
        height: '700px'
    },
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column-reverse',
        },
        [theme.breakpoints.down('md')]: {
            // flexDirection: 'column-reverse',
        },
        [theme.breakpoints.down('lg')]: {},
    },
    typographyStyle: {
        // fontFamily: 'Montserrat',
        // fontWeight: 900,
        // fontStyle: 'normal',
        // fontSize: '2.5em',
        font: `normal 900 3.5em/ 1 'Montserrat', sans- serif`,

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',

        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
            textAlign: 'center'
        },

    }
}))

const LandingPage = (props) => {

    const classes = useStyle(props);
    return (

        <div className={classes.root} id="home">
            <Grid container justify="center" className={classes.gridContainer}>

                <Grid item lg={6} xs={12} sm={12} md={6} >
                    <BannerImg src={OnRocket} alt="banner image" />
                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={6} >

                    <Typography variant='h3' className={classes.typographyStyle} >Let people know about your business</Typography>

                </Grid>


            </Grid  >
        </div>





    )
}
export default LandingPage;
<Grid container justify="center" className={classes.gridContainer}>

    <Grid item lg={6} xs={12} sm={12} md={6} >
        <BannerImg src={OnRocket} alt="banner image" />
    </Grid>
    <Grid item lg={6} xs={12} sm={12} md={6} >
        <Typography variant='h5'>WHAT I DO</Typography>

        <Typography variant='h3' className={classes.typographyStyle} >Design, Develop & Create an Identity for your Product </Typography>

    </Grid>


</Grid  >



_____________________________________________
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
        font: `normal 900 2.8em/ 1 'Montserrat', sans- serif`,
        lineHeight: '1.1',

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',

        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
            textAlign: 'center'
        },

    }
}))
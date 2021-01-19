import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimeLine from '../components/TimeLine';
import TimeLine2 from '../components/TimeLine2';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: `row nowrap`,
        justifyContent: 'space-around',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('lg')]: {},
    },

}))

const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <TimeLine className={classes.timeLine1} />
            <TimeLine2 className={classes.timeLine2} />
        </div>
    )
}

export default Skills;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
    },
    title: {
      fontWeight: 100,
    },
    subtitle: {
        opacity: '0.6'
    },
    dropdownbtn: {
        background: '#30b5e0',
        padding: theme.spacing(2),
        height: '50px',
        color: 'white',
        textTransform: 'none',
        fontSize: '12px',
        '&:hover': {
            background: '#30b5e0'
        }
    }
  }));

export default function DashboardHeader() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div>
            <Typography className={classes.title} variant="h4">
            Dashboard
            </Typography>
            <Typography className={classes.subtitle} variant="body1">
                dashboard & statistics
            </Typography>
            </div>
            <Button
                className={classes.dropdownbtn}
                endIcon={<ExpandMoreRoundedIcon />}
            >
          <span>        
              17 January 2016 - 15 February 2016
            </span>
            </Button>
        </div>
    )
}
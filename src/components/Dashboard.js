import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';


const drawerWidth = 300; 

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
      position: 'relative',
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    flexGrow: 1,
    backgroundColor: '#eef2f6',
    padding: theme.spacing(3),
    height: '100vh',
  },
  header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
  },
  title: {
    color: '#2a2a2a',
    fontWeight: 100,
  },
  subtitle: {
      color: '#777'
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



export default function Dashboard() {
  const classes = useStyles();

  return (
      <main className={classes.content}>
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
                // variant="contained"
                className={classes.dropdownbtn}
                endIcon={<ExpandMoreRoundedIcon />}
            >
          <span>        
              17 January 2016 - 15 February 2016
            </span>
            </Button>
        </div>
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h4">
                        Totals
                    </Typography>
                    <Divider />
                    <Typography>
                        Test
                    </Typography>
                </CardContent>
            </Card>
        </div>

      </main>
  );
}

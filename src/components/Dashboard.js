import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import TotalsBody from "./TotalsBody";
import DashboardHeader from "./DashboardHeader";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    flexGrow: 1,
    backgroundColor: "#eef2f6",
    padding: theme.spacing(3),
    height: "100vh"
  },
  paper: {
    borderBox: "none"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  totalsheader: {
    display: "flex",
    align: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    marginBottom: "20px"
  },
  title: {
    fontWeight: 100
  },
  subtitle: {
    opacity: "0.6"
  },
  secondtotals: {
    marginLeft: "10px",
    opacity: "0.6"
  },
  newbtn: {
    background: "#22CC90",
    height: "35px",
    color: "white",
    fontSize: "10px",
    marginRight: "5px",
    "&:hover": {
      background: "#22CC90"
    }
  },
  returnbtn: {
    height: "35px",
    color: "#777",
    fontSize: "10px"
  },
  dropdownbtn: {
    background: "#30b5e0",
    padding: theme.spacing(1),
    height: "35px",
    color: "white",
    fontSize: "10px",
    "&:hover": {
      background: "#30b5e0"
    }
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <DashboardHeader />
      <div>
        <Card>
          <CardContent>
            <div className={classes.totalsheader}>
              <Typography variant="h5">Totals</Typography>
              <Typography className={classes.secondtotals} variant="body1">
                Last Week
              </Typography>
            </div>
            <TotalsBody />
          </CardContent>
          <Divider />
          <CardContent>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <div className={classes.header}>
                  <div className={classes.totalsheader}>
                    <Typography variant="h5">Site visits</Typography>
                    <Typography
                      className={classes.secondtotals}
                      variant="body1"
                    >
                      weekly stats
                    </Typography>
                  </div>
                  <div>
                    <Button className={classes.newbtn}>New</Button>
                    <Button variant="outlined" className={classes.returnbtn}>
                      Returning
                    </Button>
                  </div>
                </div>
                <div>
                  <Image src="https://via.placeholder.com/600x300" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.header}>
                  <div className={classes.totalsheader}>
                    <Typography variant="h5">Revenue</Typography>
                    <Typography
                      className={classes.secondtotals}
                      variant="body1"
                    >
                      monthly stats
                    </Typography>
                  </div>
                  <Button
                    className={classes.dropdownbtn}
                    endIcon={<ExpandMoreRoundedIcon />}
                  >
                    <span>Filter Range</span>
                  </Button>
                </div>
                <div>
                  <Image src="https://via.placeholder.com/600x300" />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import React from "react";
// import AppBar from '@material-ui/core/AppBar';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
// import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
// import Toolbar from '@material-ui/core/Toolbar';
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import CheckBoxRoundedIcon from "@material-ui/icons/CheckBoxRounded";
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import InsertChartRoundedIcon from "@material-ui/icons/InsertChartRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    background: "#30b5e0",
    border: "none",
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "#30b5e0",
      border: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    background: "#2a333e"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    background: "#1fa7d3",
    border: 0,
    width: drawerWidth
  },
  listStyles: {
    color: "#95ABC8",
    fontSize: "0.7em"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <Typography style={{ color: "white" }} variant="h6" noWrap>
          Luxury Presence
        </Typography>
      </div>
      <div className={classes.listStyles}>
        <List>
          {["Calendar", "Documentation", "Dashboard"].map((text, index) => (
            <ListItem className={classes.listStyles} button key={text}>
              <ListItemIcon className={classes.listStyles}>
                {index === 0 && <CalendarTodayRoundedIcon />}
                {index === 1 && <DescriptionRoundedIcon />}
                {index === 2 && <HomeRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              <ChevronRightRoundedIcon style={{ paddingLeft: "7" }} />
            </ListItem>
          ))}
        </List>
        <List>
          {["Admin Plugins", "Admin Forms", "Admin Layouts"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={classes.listStyles}>
                  {index === 0 && <WhatshotRoundedIcon />}
                  {index === 1 && <CheckBoxRoundedIcon />}
                  {index === 2 && <TableChartRoundedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                <ChevronRightRoundedIcon style={{ paddingLeft: "7" }} />
              </ListItem>
            )
          )}
        </List>
        <List>
          {["Information Panels", "Ecommerce"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.listStyles}>
                {index === 0 && <InsertChartRoundedIcon />}
                {index === 1 && <ShoppingBasketRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              <ChevronRightRoundedIcon style={{ paddingLeft: "7" }} />
            </ListItem>
          ))}
        </List>
        <List>
          {["UI Elements", "Form Elements", "Plugins", "Pages"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={classes.listStyles}>
                  {index === 0 && <WbSunnyRoundedIcon />}
                  {index === 1 && <MenuRoundedIcon />}
                  {index === 2 && <SettingsRoundedIcon />}
                  {index === 3 && <FileCopyRoundedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                <ChevronRightRoundedIcon style={{ paddingLeft: "7" }} />
              </ListItem>
            )
          )}
        </List>
        <List>
          {["Executive Meeting", "HelDesk Redesign", "Sony Board Meeting"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 && (
                    <RadioButtonUncheckedRoundedIcon
                      style={{ color: "yellow" }}
                    />
                  )}
                  {index === 1 && (
                    <RadioButtonUncheckedRoundedIcon style={{ color: "red" }} />
                  )}
                  {index === 2 && (
                    <RadioButtonUncheckedRoundedIcon
                      style={{ color: "#967CDA" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;

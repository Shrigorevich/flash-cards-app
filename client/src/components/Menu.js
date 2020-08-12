import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
    Toolbar,
    AppBar,
    Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        margin: "0 12px 0 4px",
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        //justifyContent: "space-between",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    title: {
        margin: "0 18px 0 0",
        width: "140px",
    },
    icons: {
        minWidth: 0,
        margin: "0 24px 0 8px",
    },
}));

const Menu = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton
                    onClick={handleDrawerClose}
                    className={clsx(classes.menuButton, {
                        [classes.hide]: !open,
                    })}
                >
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h5">
                    Fleshit
                </Typography>
            </div>
            <Divider />
            <List>
                <ListItem button component={NavLink} to="/home/control-panel">
                    <ListItemIcon className={classes.icons}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Control Panel"} />
                </ListItem>
                <ListItem button component={NavLink} to="/home">
                    <ListItemIcon className={classes.icons}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Statistics"} />
                </ListItem>
                <ListItem button component={NavLink} to="/home">
                    <ListItemIcon className={classes.icons}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Help"} />
                </ListItem>
                <ListItem button component={NavLink} to="/home">
                    <ListItemIcon className={classes.icons}>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button component={NavLink} to="/home/my-decks">
                    <ListItemIcon className={classes.icons}>
                        <FilterNoneIcon />
                    </ListItemIcon>

                    <ListItemText primary={"My Decks"} />
                </ListItem>
            </List>
        </Drawer>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(Menu);

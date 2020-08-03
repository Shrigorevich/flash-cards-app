import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import {
    AppBar,
    Avatar,
    Button,
    Toolbar,
    Typography,
    Container,
    Link,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    user: {
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(0, 1, 0, 0),
    },
}));

const Dashboard = (props) => {
    const classes = useStyles();

    // const [open, setOpen] = useState(false);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Fleshit
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                    >
                        Features
                    </Link>
                    <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                    >
                        Support
                    </Link>
                </nav>

                {props.user ? (
                    <div className={classes.user}>
                        <Avatar className={classes.avatar}>
                            {props.user.first_name.slice(0, 1)}
                        </Avatar>
                        <Typography component="span">
                            {props.user.first_name + " " + props.user.last_name}
                        </Typography>
                    </div>
                ) : null}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(Dashboard);

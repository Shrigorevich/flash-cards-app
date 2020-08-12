import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import ControlPanel from "./СontrolPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "calc(100vw - 72px)",
        margin: "0 0 0 72px",
    },
}));

const WorkSpace = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                <Route path="/home/control-panel">
                    <ControlPanel />
                </Route>
                <Route path="/home/my-decks">Decks</Route>
                <Route path="/home/stats">Stats</Route>
                <Route path="/home">
                    <Redirect to="/home/control-panel" />
                </Route>
            </Switch>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(WorkSpace);

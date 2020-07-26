import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./components/theme";
import Home from "./pages/home";
import GetStarted from "./pages/getStarted";

const App = (props) => {
    //console.log("Props.user: ", props.user);

    return (
        <MuiThemeProvider theme={theme}>
            {props.user ? <Home /> : <GetStarted />}
        </MuiThemeProvider>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(App);

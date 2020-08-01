import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./components/theme";
import Home from "./pages/home";
import GetStarted from "./pages/getStarted";
import { getProfile } from "./redux/actions";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = (props) => {
    useEffect(() => {
        props.getProfile();
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/">
                        <GetStarted />
                    </Route>
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
};

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         user: state.auth.user,
//     };
// };

const mapDispatchToProps = {
    getProfile,
};

export default connect(null, mapDispatchToProps)(App);

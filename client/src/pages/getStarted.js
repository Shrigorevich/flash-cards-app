import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory, Link } from "react-router-dom";
import { googleAuth, logOut } from "./../redux/actions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { Button, Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../components/theme";
import Image from "./../images/bg.png";

const useStyles = makeStyles((theme) => ({
    box: {
        width: "100vw",
        height: "100vh",
        background: `url(${Image}) center`,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        fontSize: "18px",
        "& h1": {
            fontSize: "4rem",
        },
        "& h2": {
            fontSize: "2rem",
            marginBottom: "12px",
        },
    },
    typography: {
        textAlign: "center",
        "& a": {
            color: `${theme.palette.secondary.main}`,
            fontSize: "1.2rem",
            textDecoration: "none",
        },
        "& a:hover": {
            cursor: "pointer",
        },
        "& p": {
            margin: "6px 0 6px 0",
        },
    },
}));

const GetStarted = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const responseGoogle = async (GoogleUser) => {
        dispatch(googleAuth(GoogleUser.getAuthResponse().id_token));
        history.push("/home");
    };

    const logOutUser = () => {
        localStorage.removeItem("token");
        dispatch(logOut());
    };

    return (
        <Box className={classes.box}>
            <Container className={classes.container}>
                <Typography component="h1">
                    Achieve the best possible results
                </Typography>
                <Typography component="h2">
                    Step by step, study any subject
                </Typography>
                {props.user ? (
                    <Typography className={classes.typography} component="span">
                        <Link to="/home">
                            Continue as {props.user.first_name}
                        </Link>
                        <p>or</p>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={logOutUser}
                        >
                            Log Out
                        </Button>
                    </Typography>
                ) : (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GCID}
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        theme={"dark"}
                    />
                )}
            </Container>
        </Box>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(GetStarted);

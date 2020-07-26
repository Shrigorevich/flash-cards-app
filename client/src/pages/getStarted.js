import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { googleAuth } from "./../redux/actions";
import { connect } from "react-redux";

const GetStarted = (props) => {
    const responseGoogle = async (GoogleUser) => {
        props.googleAuth(GoogleUser.getAuthResponse().id_token);
    };

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GCID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
};

const mapDispatchToProps = {
    googleAuth,
};

export default connect(null, mapDispatchToProps)(GetStarted);

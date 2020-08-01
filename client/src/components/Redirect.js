import React from "react";
import { useHistory } from "react-router-dom";

const Redirect = () => {
    const history = useHistory();

    React.useEffect(() => {
        history.push("/");
    }, []);

    return <div></div>;
};

export default Redirect;

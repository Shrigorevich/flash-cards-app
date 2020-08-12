import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createDeck } from "./../redux/actions";
import clsx from "clsx";

import {
    Typography,
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Grid,
    Avatar,
    Paper,
    CardActionArea,
    CardMedia,
    CardHeader,
} from "@material-ui/core";

const useStyles = makeStyles({
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    customCard: {
        backgroundColor: "#424242",
        borderRadius: "5px",
        padding: "12px",
        height: "100%",
    },
    user: {
        display: "flex",
        alignItems: "center",
        marginBottom: "18px",
    },
    avatar: {
        backgroundColor: "orange",
        marginRight: "12px",
    },
    daily: {
        marginBottom: "12px",
    },
    continue: {
        marginTop: "12px",
    },

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    header: {
        height: "50px",
        display: "flex",
        alignItems: "center",
        "& h2": {
            margin: "0 0 0 12px",
        },
    },
    orange: {
        backgroundColor: "#ffc107",
    },
    green: {
        backgroundColor: "#8bc34a",
    },
    blue: {
        backgroundColor: "#00bcd4",
    },
    red: {
        backgroundColor: "#f6685e",
    },
    toDecks: {
        display: "flex",
        justifyContent: "space-between",
    },
    advertising: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        backgroundColor: "#424242",
        padding: "12px",
    },
});

const ControlPanel = (props) => {
    console.log(props.decks[0]);
    const classes = useStyles();

    const dispatch = useDispatch();

    const newDeckRequest = () => {
        dispatch(createDeck(props.user._id));
    };
    //<button onClick={newDeckRequest}>Request</button>
    // <Typography
    //     className={classes.title}
    //     color="textSecondary"
    //     gutterBottom
    // >
    //     Word of the Day
    // </Typography>
    return (
        <Box m={2}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container className={classes.customCard}>
                        {props.user ? (
                            <Grid item xs={12} className={classes.user}>
                                <Avatar className={classes.avatar}>
                                    {props.user.first_name.slice(0, 1)}
                                </Avatar>
                                <Typography>
                                    {props.user.first_name +
                                        " " +
                                        props.user.last_name}
                                </Typography>
                            </Grid>
                        ) : null}
                        <Grid item xs={6} className={classes.daily}>
                            Cards passed: 0
                        </Grid>
                        <Grid item xs={6} className={classes.daily}>
                            New cards: 0 / 10
                        </Grid>
                        <Grid item xs={6} className={classes.daily}>
                            Correct answers: 75%
                        </Grid>
                        <Grid item xs={6} className={classes.daily}>
                            Best series: 5
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    {props.decks[0] ? (
                        <Grid item className={classes.customCard}>
                            <Typography variant="h5" component="h2">
                                {props.decks[0].name}
                            </Typography>
                            <Typography
                                className={classes.pos}
                                color="textSecondary"
                            >
                                Number of terms: {props.decks[0].cards_number}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {props.decks[0].description}
                                <br />
                            </Typography>
                            <Box mt={2} className={classes.toDecks}>
                                <Button size="small" color="primary">
                                    Continue
                                </Button>
                                <Button size="small" color="primary">
                                    All decks
                                </Button>
                            </Box>
                        </Grid>
                    ) : null}
                </Grid>
                <Grid item xs={12} p={1}>
                    <Box className={classes.advertising}>
                        <Typography variant="h5">
                            You can subscribe to Fleshit and get access to all
                            tutorials
                        </Typography>
                        <Button size="big" color="secondary">
                            GET PREMIUM ACCESS
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <Box
                                        className={clsx(
                                            classes.header,
                                            classes.orange
                                        )}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Business
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Communication with foreign business
                                            partners
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <Box
                                        className={clsx(
                                            classes.header,
                                            classes.green
                                        )}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Beauty and health
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Are you ready for a new image? We
                                            have what you need.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <Box
                                        className={clsx(
                                            classes.header,
                                            classes.blue
                                        )}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Trevels
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Contains key phrases and expressions
                                            for tourism.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <Box
                                        className={clsx(
                                            classes.header,
                                            classes.red
                                        )}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Eat and meals
                                        </Typography>
                                    </Box>
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Do you like delicious food? We have
                                            prepared the perfect course for you!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        decks: state.decks.list,
    };
};

export default connect(mapStateToProps, null)(ControlPanel);

// <div className={classes.root}>
//     <Grid container spacing={2}>
//
//

//         <Grid item xs={6}></Grid>
//         <Grid item xs={6}></Grid>
//     </Grid>
// </div>

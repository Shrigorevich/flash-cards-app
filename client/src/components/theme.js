import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    // typography: {
    //     useNextVariants: true,
    //     color: "#fff",
    // },
    palette: {
        type: "dark",
        primary: {
            main: "#2196f3",
            light: "#4dabf5",
            dark: "#1769aa",
        },
        secondary: {
            main: "#76ff03",
            light: "#91ff35",
            dark: "#52b202",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        contrastText: "#fff",
    },
});

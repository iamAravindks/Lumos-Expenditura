import { createTheme, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  HeroContainer: {
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "40vh",
    },
    // backgroundColor: "lightblue",
  },
  HeroTitle: {
    // backgroundColor: "lightblue",
    minHeight: "26vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      minHeight: "10vh",
      // backgroundColor: "lightgreen",
      marginTop:theme.spacing(0)
    },
  },
  HeroImgContainer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    // backgroundColor: "lightgreen",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxHeight: "20vh",
      alignItems:"start"
    },
  },
  HeroImg: {
    width: "700px ",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
    // backgroundColor: "lightgreen",
  },
  TextWhite: {
    color: `${theme.palette.text.primary} !important`,
  },
}));

export const theme = createTheme();

theme.typography.h2 = {
color: "#fff" ,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.7rem",
  },
};
theme.typography.subtitle1 = {
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: ".7rem",
    marginTop: "5px",
  },
};

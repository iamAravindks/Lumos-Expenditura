import {  makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up("md")]: {
      minHeight: "100vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "60vh",
    },
  },
  FormContainer: {
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )0",
    minHeight: "100%",
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: { order: 2 },
  },
  Hero: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: { order: 1 },
  },
  LoginForm: {
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE",
    height: "400px",
    width: "300px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },

  Inputs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "230px",
    flexDirection: "column",
    // backgroundColor:"lightblue"
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: "20px",
  },
  PersonPin: {
    width: "100%",
    height: "2.7rem",
    color: theme.palette.primary.main,
    animation: `$animateHover 1s infinite ${theme.transitions.easing.easeInOut} alternate`,
  },
  "@keyframes animateHover": {
    "0%": {
      transform: "translateY(-8%)",
    },
    "25%": {
      transform: "translateY(-4%)",
    },
    "50%": {
      transform: "translateY(0%)",
    },
    "75%": {
      transform: "translateY(4%)",
    },
    "100%": {
      transform: "translateY(8%)",
    },
  },
}));
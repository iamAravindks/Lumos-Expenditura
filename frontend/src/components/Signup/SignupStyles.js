import {  makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      [theme.breakpoints.between("md", "lg")]: {
        backgroundColor: "blue !important",
      },
    },
  },
  grid: {
    [theme.breakpoints.up("md")]: {
      minHeight: "100vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "60vh",
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: "100%",
    },
    transition: "all .3s linear",
  },
  FormContainer: {
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )0",
    minHeight: "100%",
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    order: 2,
    animation: `$animateLoadMd 1s  ${theme.transitions.easing.easeInOut} `,
    [theme.breakpoints.down("md")]: {
      animation: `$animateLoad .7s  ${theme.transitions.easing.easeInOut} `,
    },
  },
  Hero: {
    order: 1,
    backgroundColor: theme.palette.primary.main,
    animation: `$animateLoadHeroMd 1s  ${theme.transitions.easing.easeInOut} `,
    [theme.breakpoints.down("md")]: {
      animation: `$animateLoadHero 1s  ${theme.transitions.easing.easeInOut} `,
    },
  },
  SignupForm: {
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE",
    height: "500px",
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: "600px",
      width: "600px",
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
    [theme.breakpoints.between("md", "lg")]: {
      height: "350px",
    },
  },
  Input: {
    [theme.breakpoints.between("md", "lg")]: {
      minWidth: "350px",
      fontSize: "1rem",
    },
  },
  VisibleIcon: {
    marginTop: "17px",
    position: "absolute",
    right: "-50px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      right: "1px",
    },
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
  "@keyframes animateLoad": {
    "0%": {
      transform: "translateY(-8%)",
      opacity: 0.3,
    },
    "50%": {
      transform: "translateY(0%)",
      opacity: 0.7,
    },

    "100%": {
      opacity: 1,
    },
  },
  "@keyframes animateLoadHero": {
    "0%": {
      transform: "translateY(8%)",
      opacity: 0.3,
    },
    "50%": {
      transform: "translateY(0%)",
      opacity: 0.7,
    },

    "100%": {
      opacity: 1,
    },
  },
  "@keyframes animateLoadMd": {
    "0%": {
      transform: "rotate(40deg)",
      transformOrigin: "bottom left",
      opacity: 0,
    },

    "100%": {
      transform: "rotate(0deg)",
      transformOrigin: "bottom left",
      opacity: 1,
    },
  },
  "@keyframes animateLoadHeroMd": {
    "0%": {
      transform: "rotate(-40deg)",
      transformOrigin: "bottom left",
      opacity: 0,
    },

    "100%": {
      transform: "rotate(0deg)",
      transformOrigin: "bottom left",
      opacity: 1,
    },
  },
}));


import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
    // [theme.breakpoints.up("sm")]: {
    //   minHeight: "100vh",
    // },
    minHeight: "100vh",
    backgroundColor: "rgb(224, 225, 228)",
    position: "relative",
  },
  Card: {
    maxWidth: "600px",
    padding: "1rem",
    minWidth: "300px",
  },
  Input: {
    [theme.breakpoints.between("md", "lg")]: {
      minWidth: "350px",
      fontSize: "1rem",
    },
  },
  ForgotPwdContainer: {
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "20px",
  },
  homeBtn: {
    position: "absolute",
    top: "50px",
    left: "50px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  backBtn: {
    position: "absolute",
    top: "50px",
    left: "110px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  VisibleIcon: {
    marginTop: "17px",
    position: "absolute",
    right: "10px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      right: "1px",
    },
  },
}));
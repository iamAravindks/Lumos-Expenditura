import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      minHeight:"93.2vh"
    }
  },
  Income: {
    [theme.breakpoints.down("xs")]: {
      order: 2,
    },
  },
  Form: {
    [theme.breakpoints.down("xs")]: {
      order: 1,
    },
  },
  Expense: {
    [theme.breakpoints.down("xs")]: {
      order: 3,
    },
  },
}));

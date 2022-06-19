import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  ProfileContainer: {
    backgroundColor:
      "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "93vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "110vh",
    },
  },
  ProfileCard: {
    backgroundColor: "#eee",
    width: "750px",
    minHeight: "600px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      maxHeight: "400px",
    },
  },
  ProfileHeader: {
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  ProfileFormContainer: {
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "490px",
  },
  ProfileForm: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "590px",
  },
  Inputs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "230px",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.between("md", "lg")]: {
      height: "350px",
    },
  },
  Input: {
    minWidth: "350px",
    margin: "5px 0",
    [theme.breakpoints.down("md")]: {
      minWidth: "200px",
    },

    "&$disabled": {
      color: "red",
    },
  },
    disabled: {},
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
    marginTop: "2rem",
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
    },
  },
}));
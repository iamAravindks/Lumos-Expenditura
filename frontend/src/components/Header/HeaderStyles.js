import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: { display: "flex" },
  BrandMobile: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#fff",
    alignSelf: "center",

  },
  BrandDesktop: {
    textDecoration: "none",
    color: "#fff",
    flexGrow: 1,
    alignSelf: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

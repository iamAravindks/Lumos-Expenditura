import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: { display: "flex" },
  BrandMobile: {
    flexGrow: 1,
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  BrandDesktop: {
    flexGrow: 1,
    alignSelf: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

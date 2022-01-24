import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  Loading: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    zIndex:1000
  },
}));

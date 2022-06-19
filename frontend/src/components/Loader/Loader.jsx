import React from "react";
import { createPortal } from "react-dom";
import loader from "../../assets/loader.gif";
import useStyles from "./LoaderStyles";
const LoaderComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.Loading}>
      <img src={loader} alt='loading' />
    </div>
  );
};
const Loader = () => {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);
  //  createPortal(<LoaderComponent />, document.getElementById("loader"));

  return domReady ? (
    createPortal(<LoaderComponent />, document.getElementById("loader"))
  ) : (
    <></>
  );
};
export default Loader;

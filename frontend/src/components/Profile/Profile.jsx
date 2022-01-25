import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import ProfileForm from "./ProfileForm";
import Alert from "../Alert/Alert.jsx";
import Loader from "../Loader/Loader.jsx";
import { AuthContext } from "../../context/authContext/authContext.js";
import { ErrorContext } from "../../context/errorContext/ErrorContext.js";
import ProfileAvatar from "../Header/ProfileAvatar";
import Header from '../Header/Header'
import useStyles from './ProfileStyles'
const Profile = () => {
  const { userInfo, loading } = useContext(AuthContext);
  const { error } = useContext(ErrorContext);
  const classes = useStyles()
console.log(userInfo);
  return (
    <>
      {loading && <Loader />}
      {error && <Alert severity='error' message={error} />}
      <Header />
      <div className={classes.ProfileContainer}>
        <Grid
          container
          spacing={2}
    className={classes.ProfileCard}
        >
          <Grid item xs={12} className={classes.ProfileHeader}>
            {/* Name - ProfileAvatar */}
            <ProfileAvatar name={`${ userInfo.name } ${ userInfo.email }`} />{" "}
            <Typography variant="h4" color="textPrimary"  style={{margin:"5px 0"}}>{userInfo.name }</Typography>
          </Grid>
          <Grid item xs={12} className={classes.ProfileFormContainer}>
            <ProfileForm />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;

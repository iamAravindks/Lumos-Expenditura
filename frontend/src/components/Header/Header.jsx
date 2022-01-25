import { useContext } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import {AuthContext} from '../../context/authContext/authContext'
import useStyles from './HeaderStyles'
import Profile from "./Profile";
import { useState } from "react";



const ResponsiveAppBar = () => {
  const {userInfo} = useContext(AuthContext)
    const [anchorElUser, setAnchorElUser] = useState(null);
  const classes = useStyles()
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfile = () =>
  {
    alert(userInfo.name)
    setAnchorElUser(null);
  }
    const handleLogout = () => {
      alert("You are going to logout");
      setAnchorElUser(null);
    };
console.log(userInfo.name);
  return (
    <AppBar position='static' style={{ minHeight: "3rem" }}>
      <Container maxWidth='xl' className={classes.container}>
        <Typography
          variant='h6'
          noWrap
          component='div'
          className={classes.BrandMobile}
        >
          Expenditura
        </Typography>

        <Typography
          variant='h6'
          noWrap
          component='div'
          className={classes.BrandDesktop}
        >
          Expenditura
        </Typography>

        <Box sx={{ flexGrow: 0, justifySelf: "end" }}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Profile name={`${userInfo.name} ${userInfo.email}`} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleProfile}>
              <Typography align='center'>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography align='center'>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

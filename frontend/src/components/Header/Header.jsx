import { useState, useContext } from "react";
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
import Profile from "./ProfileAvatar";
import { Link } from "react-router-dom";



const ResponsiveAppBar = () => {
  const {userInfo,logout} = useContext(AuthContext)
    const [anchorElUser, setAnchorElUser] = useState(null);
  const classes = useStyles()
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () =>
  {
    setAnchorElUser(null);
      const agree = window.confirm("Are you sure")
      if(agree) logout()
    };
console.log(userInfo.name);
  return (
    <AppBar position='static' style={{ minHeight: "3rem" }}>
      <Container maxWidth='xl' className={classes.container}>
        <Link to='/' className={classes.BrandMobile}>
          <Typography variant='h6' noWrap component='div'>
            Expenditura
          </Typography>
        </Link>

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
            <MenuItem>
              <Link to='/profile' style={{ textDecoration: "none" }}>
                {" "}
                <Typography align='center' color='textPrimary'>
                  Profile
                </Typography>
              </Link>
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

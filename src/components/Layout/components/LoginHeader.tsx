import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import Popover from "@mui/material/Popover";
import React from "react";
import { FaUser } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../../redux/feuchers/userSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function LoginHeader() {
  const userInfo = useAppSelector(selectUser);
  const router = useNavigate();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogin = () => {
    router("/login");
  };

  const handleProfile = () => {
    handleClose();
    router("/profile");
  };

  const handleLogOut = () => {
    dispatch(logout());
    handleClose();
    router("/");
  };

  return (
    <Box>
      {userInfo?.id ? (
        <>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <Avatar
              alt={userInfo.name}
              src={userInfo?.avatar}
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <List sx={{ width: 200 }}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleProfile}>
                  <ListItemIcon>
                    <FaUser />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogOut}>
                  <ListItemIcon>
                    <GrLogout />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
        </>
      ) : (
        <Button
          onClick={handleLogin}
          color="inherit"
          size="small"
          variant="text"
        >
          Login / Register
        </Button>
      )}
    </Box>
  );
}

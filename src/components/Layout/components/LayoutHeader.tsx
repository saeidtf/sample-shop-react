import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  styled,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink as NavLinkReact, useNavigate } from "react-router-dom";
import { selectCart } from "../../../redux/feuchers/cartSlice";
import { useAppSelector } from "../../../redux/hook";
import LoginHeader from "./LoginHeader";

import { HiMenu } from "react-icons/hi";
import { selectUser } from "../../../redux/feuchers/userSlice";

const NavLink = styled(NavLinkReact)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  transition: "color 0.3s ease-in-out",
  "&.active": {
    color: theme.palette.secondary.main,
  },
  "&:hover": {
    color: theme.palette.secondary.light,
  },
}));

export default function LayoutHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useNavigate();
  const cart = useAppSelector(selectCart);
  const userInfo = useAppSelector(selectUser);

  const handleGotoCart = () => {
    router("/cart");
  };

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        component={"nav"}
        sx={{ flexShrink: 0 }}
      >
        <Toolbar>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="h6">Online Shop</Typography>
            <IconButton color="inherit" size="large" onClick={handleGotoCart}>
              <Badge badgeContent={cart.length} color="secondary">
                <FaShoppingCart size={20} />
              </Badge>
            </IconButton>
            <LoginHeader />
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box gap={4} sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={() => setOpenMenu(true)}>
              <HiMenu size={24} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        onOpen={() => setOpenMenu(true)}
        anchor="right"
      >
        <Box
          sx={{
            width: 300,
            height: "100vh",
          }}
          role="presentation"
        >
          <Stack spacing={4} mt={4}>
            <Avatar sx={{ width: 100, height: 100, m: "auto" }} />
            {userInfo ? (
              <Typography variant="h6" align="center">
                {`${userInfo.name} ${userInfo.family}`}
              </Typography>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => router("/login")}
              >
                Login
              </Button>
            )}
            <Divider />
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, px: 2 }}
              onClick={() => setOpenMenu(false)}
            >
              {userInfo && (
                <>
                  <NavLink to="/profile">Profile</NavLink>
                  <Divider />
                </>
              )}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/cart">Cart</NavLink>
            </Box>
          </Stack>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

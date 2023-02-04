import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
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

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/cart", label: "Cart" },
];

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

  const handleLogin = () => {
    setOpenMenu(false);
    router("/login");
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
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton color="inherit" onClick={() => setOpenMenu(true)}>
                <HiMenu size={24} />
              </IconButton>
            </Box>            
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
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        onOpen={() => setOpenMenu(true)}
        anchor="left"
      >
        <Box width={300} height="100vh" textAlign="center" role="presentation">
          <Stack spacing={4} mt={4}>
            <Avatar sx={{ width: 100, height: 100, m: "auto" }} />
            {userInfo?.id ? (
              <>
                <Typography variant="h6" align="center">
                  {`${userInfo.name} ${userInfo.family}`}
                </Typography>
                <List onClick={() => setOpenMenu(false)}>
                  <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/profile">
                      <Typography variant="h6">Profile</Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </>
            ) : (
              <Box px={2}>
                <Button fullWidth variant="contained" onClick={handleLogin}>
                  Login
                </Button>
              </Box>
            )}
            <Divider />
            <List onClick={() => setOpenMenu(false)}>
              {links.map((link) => (
                <ListItem key={link.to} disablePadding>
                  <ListItemButton component={NavLink} to={link.to}>
                    <Typography variant="h6">{link.label}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

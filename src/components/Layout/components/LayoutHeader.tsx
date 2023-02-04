import {
  AppBar,
  Avatar,
  Badge,
  BadgeProps,
  Box,
  Button,
  Divider,
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

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 10,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "0 4px",
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
        position="sticky"
        color="primary"
        component={"nav"}
        sx={{ flexShrink: 0 }}
      >
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={1} sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
          }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton color="inherit" onClick={() => setOpenMenu(true)}>
                <HiMenu size={24} />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: {
                  xs: 1,
                },
              }}
            >
              <Link to="/">
                <Typography variant="h6" textAlign={"center"}>Online Shop</Typography>
              </Link>
            </Box>
            <IconButton
              aria-label="cart"
              color="inherit"
              size="large"
              onClick={handleGotoCart}
            >
              <StyledBadge
                badgeContent={cart.length}
                color="secondary"
                max={99}
              >
                <FaShoppingCart size={20} />
              </StyledBadge>
            </IconButton>
            <LoginHeader />
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box gap={4} sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
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

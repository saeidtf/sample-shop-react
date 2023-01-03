import {
  AppBar,
  Box,
  Button,
  Drawer,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/images/menu.png";

const NavLinkStyle = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  transition: "color 0.3s ease-in-out",
  "&.active": {
    color: theme.palette.secondary.main,
  },
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default function LayoutHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position="sticky" color="primary" component={"nav"}>
      <Toolbar>
        <Typography variant="h6">Online Shop</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box gap={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <NavLinkStyle to="/">Home</NavLinkStyle>
          <NavLinkStyle to="/products">Products</NavLinkStyle>
          <NavLinkStyle to="/contact">Contact</NavLinkStyle>
          <NavLinkStyle to="/about">About</NavLinkStyle>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            variant="text"
            color="secondary"
            onClick={() => setOpenMenu(true)}
          >
            <img src={MenuIcon} alt="menu" style={{ width: 30 }} />
          </Button>
          <Drawer
            anchor="right"
            open={openMenu}
            onClose={() => setOpenMenu(false)}
          >
            <Box sx={{ width: 250 }} role="presentation">
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
                onClick={()=>setOpenMenu(false)}
              >
                <NavLinkStyle to="/">Home</NavLinkStyle>
                <NavLinkStyle to="/products">Products</NavLinkStyle>
                <NavLinkStyle to="/contact">Contact</NavLinkStyle>
                <NavLinkStyle to="/about">About</NavLinkStyle>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

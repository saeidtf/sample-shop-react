import {
  AppBar,
  Badge,
  Box,
  Button, Drawer,
  IconButton,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink as NavLinkReact, useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/images/menu.png";
import { useTheme } from "../../themes";
import { useLayout } from "./Layout";

const NavLink = styled(NavLinkReact)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  transition: "color 0.3s ease-in-out",
  "&.active": {
    color: theme.palette.common.white,
  },
  "&:hover": {
    color: theme.palette.common.white,
  },
}));

export default function LayoutHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useNavigate();

  const { cart } = useLayout();
  const { language, changeLanguage } = useTheme();

  const handleGotoCart = () => {
    router("/cart");
  }

  return (
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
          <ToggleButtonGroup
            value={language.language}
            exclusive
            onChange={(e, value) => {
              changeLanguage({
                language: value as "en" | "fa",
                direction: value === "en" ? "ltr" : "rtl",
              });
            }}
            size="small"
          >
             <ToggleButton value="en" >En</ToggleButton>
             <ToggleButton value="fa" >Fa</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Box gap={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
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
            <Box
              sx={{
                width: 250,
                height: "100vh",
                backgroundColor: "primary.main",
              }}
              role="presentation"
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
                onClick={() => setOpenMenu(false)}
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

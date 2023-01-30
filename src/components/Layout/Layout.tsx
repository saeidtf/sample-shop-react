import { Box, Container, GlobalStyles, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import useLayoutContext, {
  CartType,
  UserInfoType,
} from "../../hooks/useLayoutContext";
import LayoutHeader from "./components/LayoutHeader";

type LayoutContextType = {
  cart: CartType[];
  addToCart: (product: CartType) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  userInfo: UserInfoType;
  changeUserInfo: (userInfo: UserInfoType, token: string) => void;
  logout: () => void;
  clearCart: () => void;
};

const LayoutContext = React.createContext<LayoutContextType>(
  {} as LayoutContextType
);
export const useLayout = () => React.useContext(LayoutContext);

export default function Layout() {
  const value = useLayoutContext();

  return (
    <LayoutContext.Provider value={value}>
      <GlobalStyles
        styles={{
          a: { textDecoration: "none" , color: "inherit" },                    
        }}
      />
      <Box
        sx={{
          maxWidth: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <Stack alignItems={"stretch"} height="100%" gap={2}>
          <LayoutHeader />

          <Container maxWidth="xl" sx={{ flexGrow: 1, flexShrink: 0 }}>
            <Outlet />
          </Container>
          <Box height={100} mt={8} p={4} bgcolor="primary.light" flexShrink={0}>
            <Typography variant="body2" align="center">
              Footer
            </Typography>
          </Box>
        </Stack>
      </Box>
    </LayoutContext.Provider>
  );
}

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import useLayoutContext, { CartType } from "../../hooks/useLayoutContext";
import LayoutHeader from "./LayoutHeader";


type LayoutContextType = {
  cart: CartType[];
  addToCart: (product: CartType) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
};

const LayoutContext = React.createContext<LayoutContextType>(
  {} as LayoutContextType
);
export const useLayout = () => React.useContext(LayoutContext);

export default function Layout() {  
  const value = useLayoutContext();    

  return (
    <LayoutContext.Provider value={value}>
      
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

import { Box, Container, GlobalStyles, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import LayoutHeader from "./components/LayoutHeader";

export default function Layout() {
  return (
    <>
      <GlobalStyles
        styles={{
          a: { textDecoration: "none", color: "inherit" },
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
    </>
  );
}

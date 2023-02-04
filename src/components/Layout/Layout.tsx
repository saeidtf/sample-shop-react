import { Box, Container, GlobalStyles, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LayoutHeader from "./components/LayoutHeader";

export default function Layout() {
  const boxRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }    
  }, [location]);

  return (
    <>
      <GlobalStyles
        styles={{
          a: { textDecoration: "none", color: "inherit" },
        }}
      />
      <Box
        ref={boxRef}
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

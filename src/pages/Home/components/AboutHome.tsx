import { Grid, Typography } from "@mui/material";

export const AboutHome = () => {
  return (
    <Grid
      container
      spacing={4}
      mt={6}
      alignItems="center"
    >
      <Grid item md={6} lg={8}>
        <Typography variant="h3" mb={4}>
          About us
        </Typography>
        <Typography variant="body1" textAlign={"justify"} mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="body1" textAlign={"justify"} mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid item md={6} lg={4}>
        <img
          src="https://dummyimage.com/600x400.png/dddddd/000000"
          alt="random"
          style={{ width: "100%", borderRadius: 10 }}
        />
      </Grid>
    </Grid>
  );
};

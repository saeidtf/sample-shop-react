import { Grid, Skeleton, Stack } from "@mui/material";

export default function ProductsSkelton() {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
          <Skeleton variant="rectangular" width="100%" height={250} />
          <Skeleton variant="text" width="100%" height={50} />
          <Stack direction="row" justifyContent="space-between">
            <Skeleton variant="text" width="20%" />
            <Skeleton variant="text" width="20%" />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

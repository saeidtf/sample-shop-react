import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

export default function AboutSmall() {
  return (
    <Card variant="outlined">
      <CardHeader title="Descriptions" sx={{ textAlign: "center" }} />
      <CardContent>
        <Typography variant="body1" textAlign={{
          xs: "justify",
          md: "center",
        }} mb={4} p={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          necessitatibus voluptates quos quas quidem. Quisquam, quae. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          necessitatibus voluptates quos quas quidem. Quisquam, quae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          necessitatibus voluptates quos quas quidem. Quisquam, quae. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          necessitatibus voluptates quos quas quidem. Quisquam, quae.
        </Typography>
      </CardContent>
    </Card>
  );
}

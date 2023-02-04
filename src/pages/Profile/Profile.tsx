import { Box, Card, CardContent, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";

const profileLinks = [
  { title: "User Info", href: "/profile" },
  { title: "Orders", href: "/profile/orders" },
  { title: "Payments", href: "/profile" },
  { title: "Messages", href: "/profile" },
];

export default function Profile() {
  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Profile", href: "#" },
  ];

  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      <PageHeader title="Profile" breadcrumb={breadcrumb} />
      <Box>
        <Grid container spacing={3}>
          {profileLinks.map((link) => (
            <Grid item xs={12} md={4} key={link.title}>
              <Card sx={{ height: 100, width: "100%" }}>
                <CardContent>
                  <Link to={link.href}>{link.title}</Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}

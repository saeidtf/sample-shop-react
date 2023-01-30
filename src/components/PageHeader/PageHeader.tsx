import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export type PageHeaderBreadcrumbType = {
  title: string;
  href: string;
};

type PageHeaderProps = {
  title: string;
  breadcrumb?: PageHeaderBreadcrumbType[];
};

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <Stack spacing={3} mb={3}>
      <Typography variant="h4" component={"h1"}>
        {title}
      </Typography>
      {breadcrumb && (
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumb.map((item,index) => (
            <Box key={item.title}>
              {item.href === "#" ? (
                <Typography>{item.title}</Typography>
              ) : (
                <Link to={item.href}>
                  {item.title}
                </Link>
              )}
            </Box>
          ))}
        </Breadcrumbs>
      )}
    </Stack>
  );
}

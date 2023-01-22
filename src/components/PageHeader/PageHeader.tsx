import { Breadcrumbs, Stack, Typography } from "@mui/material";
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
          {breadcrumb.map((item) => (
            <>
              {item.href === "#" ? (
                <Typography key={item.title}>{item.title}</Typography>
              ) : (
                <Link key={item.title} to={item.href}>
                  {item.title}
                </Link>
              )}
            </>
          ))}
        </Breadcrumbs>
      )}
    </Stack>
  );
}

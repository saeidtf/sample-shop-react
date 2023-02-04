import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";

export interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export default function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  console.log(trigger)

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

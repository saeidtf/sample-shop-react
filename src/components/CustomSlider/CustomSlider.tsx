import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

type CustomSliderProps = Settings & {
  children: React.ReactNode;
  isResponsive?: boolean;
};

const innerResponsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

export default function CustomSlider({
  children,
  responsive,
  isResponsive = true,
  ...props
}: CustomSliderProps) {
  const combineResponsive = isResponsive
    ? [...innerResponsive, ...(responsive || [])]
    : undefined;

  return (
    <Box
      sx={{
        "& .slick-slide": {
          padding: "0 10px",
          boxSizing: "border-box",
        },
      }}
    >
      <Slider responsive={combineResponsive} {...props}>
        {children}
      </Slider>
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTheme } from "../../themes";

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
  const { language } = useTheme();

  const combineResponsive = isResponsive
    ? [...innerResponsive, ...(responsive || [])]
    : undefined;

  props.rtl = language.direction === "rtl";

  return (
    <Box
      sx={{
        "& .slick-slide": {
          padding: "0 10px",
          boxSizing: "border-box",
          height: "inherit  !important",
        },
        "& .slick-slide > div": {
          height: "95%",
        },
        "& .slick-track": {
          display: "flex !important",
        },
        p: 2,
      }}
    >
      <Slider responsive={combineResponsive} {...props}>
        {children}
      </Slider>
    </Box>
  );
}

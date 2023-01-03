import { Box } from "@mui/material";
import React from "react";
import CustomSlider from "../../../components/CustomSlider";

const sliders = [
  "https://dummyimage.com/1200x400.png/dddddd/000000",
  "https://dummyimage.com/1200x400.png/ff4444/ffffff",
  "https://dummyimage.com/1200x400.png/5fa2dd/ffffff",
];

export default function SliderPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,    
  };

  return (
    <Box component={"div"}>
      <CustomSlider {...settings} isResponsive={false}>
        {sliders.map((image, index) => (
          <Box key={index}>
            <Box display={"flex"} justifyContent="center">
              <img src={image} alt="random" style={{width:'100%' , minHeight:200}} />
            </Box>
          </Box>
        ))}
      </CustomSlider>
    </Box>
  );
}

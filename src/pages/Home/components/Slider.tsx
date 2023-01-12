import { Box, Skeleton } from "@mui/material";
import React from "react";
import CustomSlider from "../../../components/CustomSlider";
import useFetch from "../../../hooks/useFetch";

type DataType = {
  id: number;
  image: string;
  title: string;
  smallImage: string;
};

type SliderType = {
  data: DataType[];
  success: boolean;
};

export default function SliderPage() {
  const {
    data: { data: sliders = [] } = {},
    isError,
    loading,
  } = useFetch<SliderType>("/sliders");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (loading)
    return (
      <Box>
        <Skeleton variant="rectangular" width={"100%"} height={600} />
      </Box>
    );
  if (isError) return <Box>Something went wrong</Box>;

  return (
    <Box component={"div"}>
      <CustomSlider {...settings} isResponsive={false}>
        {sliders.map((item) => (
          <Box key={item.id}>
            <Box display={"flex"} justifyContent="center">
              <img
                src={item.image}
                alt="random"
                style={{ width: "100%", minHeight: 200 }}
              />
            </Box>
          </Box>
        ))}
      </CustomSlider>
    </Box>
  );
}

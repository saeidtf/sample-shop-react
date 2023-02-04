import { Box, Skeleton } from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import { useGetSliderQuery } from "../../../services";



export default function SliderPage() {
  const {
    data: { data: sliders = [] } = {},
    isLoading: loading,
    isError,
  } = useGetSliderQuery()

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
        <Skeleton variant="rectangular" width={"100%"} sx={{
          height:{
            xs: 300,
            md: 600
          }
        }}  />
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

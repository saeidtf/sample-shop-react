import { Box } from "@mui/material";
import { AboutHome } from "./components/AboutHome";
import AboutSmall from "./components/AboutSmall";
import { PrductWidget } from "./components/PrductWidget";
import Slider from "./components/Slider";

export default function Home() {  
  return (
    <Box>
      <Slider />
      <AboutHome />
      <PrductWidget title="Best Seller" url="/products/bestSeller"/>
      <AboutSmall />
      <PrductWidget title="New Product" url="/products/newest"/>
    </Box>
  );
}

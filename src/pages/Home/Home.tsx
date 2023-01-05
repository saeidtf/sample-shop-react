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
      <PrductWidget title="Best Seller" />
      <AboutSmall />
      <PrductWidget title="New Product" />
    </Box>
  );
}

import { Box } from "@mui/material";
import { AboutHome } from "./components/AboutHome";
import AboutSmall from "./components/AboutSmall";
import { BestSeller } from "./components/BestSeller";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <Box>
      <Slider />
      <AboutHome />
      <BestSeller title="Best Seller" />
      <AboutSmall />
      <BestSeller title="New Product" />
    </Box>
  );
}

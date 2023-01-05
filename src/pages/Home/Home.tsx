import { Box } from "@mui/material";
import { AboutHome } from "./components/AboutHome";
import AboutSmall from "./components/AboutSmall";
import { PrductWidget } from "./components/PrductWidget";
import Slider from "./components/Slider";
import {products} from './mockData/products'

export default function Home() {
  return (
    <Box>
      <Slider />
      <AboutHome />
      <PrductWidget title="Best Seller" products={products}/>
      <AboutSmall />
      <PrductWidget title="New Product" products={products}/>
    </Box>
  );
}

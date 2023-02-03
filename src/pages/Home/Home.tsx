import { Box } from "@mui/material";
import { useGetBestSellersQuery, useGetNewestProductsQuery } from "../../services";
import { AboutHome } from "./components/AboutHome";
import AboutSmall from "./components/AboutSmall";
import { PrductWidget } from "./components/PrductWidget";
import Slider from "./components/Slider";

export default function Home() {  

  const {
    data: { data: bestSellerData =[] } = {},
    isLoading: bestSellerLoading,
  } = useGetBestSellersQuery(undefined, { refetchOnMountOrArgChange: true})

  const {
    data: { data: newestData =[] } = {},
    isLoading: newestLoading,
  } = useGetNewestProductsQuery(undefined, { refetchOnMountOrArgChange: true})

  return (
    <Box>
      <Slider />
      <AboutHome />
      <PrductWidget title="Best Seller" data={bestSellerData} loading={bestSellerLoading}/>
      <AboutSmall />
      <PrductWidget title="New Product" data={newestData} loading={newestLoading}/>
    </Box>
  );
}

import {
  Box, Typography
} from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import { ProductItem } from "./ProductItem";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://dummyimage.com/300x200.png/dddddd/000000",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://dummyimage.com/300x200.png/ff4444/ffffff",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://dummyimage.com/300x200.png/5fa2dd/ffffff",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://dummyimage.com/300x200.png/dddddd/000000",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "https://dummyimage.com/300x200.png/ff4444/ffffff",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    image: "https://dummyimage.com/300x200.png/5fa2dd/ffffff",
  },
];

export const BestSeller = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,        
  };

  return (
    <Box mt={4}>
      <Typography variant="h4" mb={4}>
        Best Seller
      </Typography>
      <Box>
        <CustomSlider {...settings}>
          {products.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </CustomSlider>
      </Box>
    </Box>
  );
};

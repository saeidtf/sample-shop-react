import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useLayout } from "../Layout";

type ProductItemProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

const ProductItem = ({ product }: ProductItemProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [showActions, setShowActions] = useState(matches);
  const { name, price, image } = product;  
  const containerRef = React.useRef(null);

  const {addToCart} = useLayout()

  const handleToggleActions = () => {
    if(!matches){
      setShowActions((prev) => !prev);
    }else{
      setShowActions(true);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,      
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{ my: 4 }}
      onMouseEnter={handleToggleActions}
      onMouseLeave={handleToggleActions}
      ref={containerRef}
    >
      <CardMedia component="img" image={image} alt={name} />
      <CardHeader title={name} />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" color="text.secondary">
            Price
          </Typography>
          <Typography variant="h6" color="primary">
            ${price.toLocaleString()}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Slide direction="up" in={showActions} container={containerRef.current}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" size="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <Button variant="outlined" color="primary" size="small">
              View detail
            </Button>
          </Stack>
        </Slide>
      </CardActions>
    </Card>
  );
};


export default ProductItem;
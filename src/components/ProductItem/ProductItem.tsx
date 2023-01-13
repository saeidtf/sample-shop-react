import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton, Stack,
  Typography
} from "@mui/material";
import React from "react";
import {
  FaMinus, FaPlus, FaTrash
} from "react-icons/fa";
import { useLayout } from "../Layout";

type ProductItemProps = {
  product: {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
  };
};

const ProductItem = ({ product}: ProductItemProps) => {
    
  const { name, price, thumbnail } = product;
  const containerRef = React.useRef(null);

  const { addToCart, updateCart, removeFromCart, cart } = useLayout();
  const cartItem = cart.find((item) => item.id === product.id);


  const handelUpdateQuantity = () => {
    if (!cartItem) return;

    if (cartItem?.quantity < 2) {
      removeFromCart(product.id);
    } else {
      updateCart(product.id, cartItem.quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.thumbnail,
      quantity: 1,
    });
  };

  const ActionButton = () => {
    if (!cartItem) {
      return (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      );
    } else {
      return (
        <Stack direction="row" spacing={3}>
          <IconButton onClick={handelUpdateQuantity} size="small">
            {cartItem.quantity < 2 && <FaTrash />}
            {cartItem.quantity > 1 && <FaMinus />}
          </IconButton>
          <Typography variant="h6" color="primary">
            {cartItem.quantity}
          </Typography>
          <IconButton size="small" onClick={handleAddToCart}>
            <FaPlus />
          </IconButton>
        </Stack>
      );
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        my: 4,
        height: "100%",
        "&.MuiCard-root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      ref={containerRef}
    >
      <CardMedia component="img" image={thumbnail} alt={name} />
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
        <Stack direction="row" spacing={6}>
          <ActionButton />
          <Button variant="outlined" color="primary" size="small">
            View detail
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductItem;

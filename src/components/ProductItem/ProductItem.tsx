import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useTheme } from "../../themes";
import { useLayout } from "../Layout";

type ProductItemProps = {
  product: {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
  };
};

const ProductItem = ({ product }: ProductItemProps) => {
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
          Add
        </Button>
      );
    } else {
      return (
        <Box display="flex" gap={3}>
          <IconButton onClick={handelUpdateQuantity} size="small">
            {cartItem.quantity < 2 && <FaTrash />}
            {cartItem.quantity > 1 && <FaMinus />}
          </IconButton>
          <Typography
            variant="h6"
            color="primary"
            sx={{ width: 30, textAlign: "center" }}
          >
            {cartItem.quantity}
          </Typography>
          <IconButton size="small" onClick={handleAddToCart}>
            <FaPlus />
          </IconButton>
        </Box>
      );
    }
  };

  const { language } = useTheme();
  return (
    <Card
      dir={language.direction === "rtl" ? "rtl" : "ltr"}
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
        <Box display="flex" gap={3}>
          <ActionButton />
          <Button variant="outlined" color="primary" size="small">
            View
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductItem;

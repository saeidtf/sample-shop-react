import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  addToCart,
  removeFromCart,
  selectCart,
  updateCart
} from "../../redux/feuchers/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useTheme } from "../../themes";

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
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const cartItem = cart.find((item) => item.id === product.id);

  const handelUpdateQuantity = () => {
    if (!cartItem) return;

    if (cartItem?.quantity < 2) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(updateCart({ id: product.id, quantity: cartItem.quantity - 1 }));
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      })
    );
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
        <Stack direction="row" spacing={2}>
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
        </Stack>
      );
    }
  };

  const { language } = useTheme();
  return (
    <Card
      dir={language.direction}
      variant="outlined"
      sx={{
        my: 4,
        height: "100%",
        width:'100%'
      }}
      ref={containerRef}
    >
      <Stack justifyContent={"space-between"} sx={{ height: "100%"  , width:'100%'}}>
        <CardMedia component="img" image={thumbnail} alt={name}/>
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
          <Stack direction={"row"} spacing={3}>
            <ActionButton />
            <Button variant="outlined" color="primary" size="small">
              View
            </Button>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ProductItem;

import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useLayout } from "../../../components/Layout";
import { CartType } from "../../../hooks/useLayoutContext";

type CartItemActionProps = {
  item: CartType;
};

export default function CartItemAction({ item }: CartItemActionProps) {
  const { updateCart, removeFromCart } = useLayout();

  const handelUpdateQuantity = () => {
    if (item?.quantity < 2) {
      removeFromCart(item.id);
    } else {
      updateCart(item.id, item.quantity - 1);
    }
  };

  const handleAddToCart = () => {
    updateCart(item.id, item.quantity + 1);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mb: {
          xs: 4,
        },
        justifyContent: {
          xs: "center",
        },
      }}
    >
      <IconButton onClick={handelUpdateQuantity} size="small">
        {item.quantity < 2 && <FaTrash />}
        {item.quantity > 1 && <FaMinus />}
      </IconButton>
      <Typography
        variant="h6"
        color="primary"
        sx={{ width: 30, textAlign: "center" }}
      >
        {item.quantity}
      </Typography>
      <IconButton size="small" onClick={handleAddToCart}>
        <FaPlus />
      </IconButton>
    </Stack>
  );
}

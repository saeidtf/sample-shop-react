import { IconButton, Stack, Typography } from "@mui/material";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

import { ICart, removeFromCart, updateCart } from "../../../redux/feuchers/cartSlice";
import { useAppDispatch } from "../../../redux/hook";

type CartItemActionProps = {
  item: ICart;
};

export default function CartItemAction({ item }: CartItemActionProps) {
  const dispatch = useAppDispatch();
  

  const handelUpdateQuantity = () => {
    if (item?.quantity < 2) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateCart({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleAddToCart = () => {
    dispatch(updateCart({ id: item.id, quantity: item.quantity + 1 }));
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

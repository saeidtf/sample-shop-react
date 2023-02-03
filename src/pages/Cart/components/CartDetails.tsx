import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../../redux/feuchers/cartSlice";
import { useAppSelector } from "../../../redux/hook";
import CartDetailsItem from "./CartDetailsItem";

export default function CartDetails() {
  const router = useNavigate();

  const cart = useAppSelector(selectCart);

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const handleContinue = () => {
    router("/products");
  };

  const handleCheckout = () => {
    router("/checkout");
  };

  return (
    <Stack
      spacing={8}
      sx={{ width: "100%" }}
      pr={{
        xs: 0,
        md: 4,
        xl: 0,
      }}
    >
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader title="Cart Details" />
        <CardContent>
          <Stack spacing={3}>
            <CartDetailsItem
              title="Total Items"
              value={totalItems.toLocaleString()}
            />
            <CartDetailsItem title="Shipping" value="$ 0.00" />
            <CartDetailsItem title="Discount" value="$ 0.00" />
            <Divider />
            <CartDetailsItem
              title="Total Price"
              value={`$ ${subtotal.toLocaleString()}`}
            />
          </Stack>
        </CardContent>
      </Card>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button variant="outlined" onClick={handleContinue}>
          Continue Shopping
        </Button>
      </Stack>
    </Stack>
  );
}

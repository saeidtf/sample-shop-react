import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import { useLayout } from "../../../components/Layout";
import CartDetailsItem from "./CartDetailsItem";

export default function CartDetails() {
  const { cart } = useLayout();

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Stack spacing={8} sx={{width:'100%'}} pr={{
        xs:0,
        md:4,
        xl:0
    }}>
      <Card sx={{maxWidth:'100%'}}>
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
        <Button variant="contained">Checkout</Button>
        <Button variant="outlined">Continue Shopping</Button>
      </Stack>
    </Stack>
  );
}

import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { CartType } from "../../../hooks/useLayoutContext";
import CartItemAction from "./CartItemAction";

type CartItemProps = {
  item: CartType;
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <Grid container spacing={{
        xs: 3,
        md: 2,
    }}>
      <Grid item xs={12} md={3} textAlign="center">
        <img src={item.thumbnail} alt={item.name} style={{maxWidth:'100%'}}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body1" color="text.secondary">
            ${(item.price * item.quantity).toLocaleString()}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <CartItemAction item={item} />
      </Grid>
    </Grid>
  );
}

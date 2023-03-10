import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { PageHeader } from "../../components/PageHeader";
import { selectCart } from "../../redux/feuchers/cartSlice";
import { useAppSelector } from "../../redux/hook";
import CartDetails from "./components/CartDetails";
import CartItem from "./components/CartItem";

export default function Cart() {
  const cart = useAppSelector(selectCart);

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Cart", href: "#" },
  ];

  if (cart.length === 0)
    return (
      <>
        <PageHeader title="Cart" breadcrumb={breadcrumb} />
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Your cart is empty
        </Typography>
      </>
    );

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <PageHeader title="Cart" breadcrumb={breadcrumb} />
      <Grid
        container
        spacing={{
          xs: 0,
          md: 4,
          xl: 8,
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <CartDetails />
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Cart Items" />
            <CardContent>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

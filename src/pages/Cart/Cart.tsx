import { Box, Grid, Stack, Table, TableBody, TableHead } from "@mui/material";
import { useLayout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import CartDetails from "./components/CartDetails";
import TableHeaderItem from "./components/TableHeaderItem";
import TableItem from "./components/TableItem";

export default function Cart() {
  const { cart } = useLayout();
  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Cart", href: "#" },
  ];

  return (
    <Stack spacing={4} sx={{width:'100%'}}>
      <PageHeader title="Cart" breadcrumb={breadcrumb} />
      <Grid
        container
        spacing={{
          xs: 0,
          md: 4,
          xl:8
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
          <Box sx={{ overflowX: "auto" }}>
            <Table sx={{ minWidth: 500  }}>
              <TableHead>
                <TableHeaderItem
                  headers={["Product", "Price", "Quantity", "Subtotal", "#"]}
                />
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableItem item={item} key={item.id} />
                ))}
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

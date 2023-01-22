import {
  Box,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useLayout } from "../../components/Layout";
import TableHeaderItem from "./components/TableHeaderItem";
import TableItem from "./components/TableItem";

export default function Cart() {
  const { cart } = useLayout();

  return (
    <Box>
      <Typography variant="h4" component={"h1"}>
        Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          Sum
        </Grid>
        <Grid item xs={12} md={8}>
          <Table>
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
        </Grid>
      </Grid>
    </Box>
  );
}

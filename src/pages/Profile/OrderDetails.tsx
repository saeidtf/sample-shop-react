import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CustomHeader from "./components/CustomHeader";
import { OrderDetailsDataType } from "./types";

type OrderType = {
  data: OrderDetailsDataType[];
  success: boolean;
};

export default function Orders() {
  const params = useParams();
  const {
    data: { data = [] } = {} as OrderType,
    isError,
    loading,
  } = useFetch<OrderType>(`/orders/${params.id}`);

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Profile", href: "/profile" },
    { title: "Orders", href: "/profile/orders" },
    { title: "Order Details", href: "#" },
  ];

  return (
    <CustomHeader
      breadCrumb={breadcrumb}
      title="Orders"
      isError={isError}
      loading={loading}
    >
      <Box sx={{ width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img
                    src={row.product.image}
                    alt={row.product.name}
                    width="100"
                  />
                </TableCell>
                <TableCell>{row.product.name}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.price.toLocaleString()}</TableCell>
                <TableCell>{row.total.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell>
                {data
                  .reduce((acc, cur) => acc + cur.quantity, 0)
                  .toLocaleString()}
              </TableCell>
              <TableCell>
                {data.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}
              </TableCell>
              <TableCell>
                {data.reduce((acc, cur) => acc + cur.total, 0).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </CustomHeader>
  );
}

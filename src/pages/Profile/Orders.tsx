import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../services/orderApi";
import CustomHeader from "./components/CustomHeader";

export default function Orders() {
  const {
    data: { data: { rows = [] } = {} } = {},
    isError,
    isLoading: loading,
  } = useGetOrdersQuery({ pageSize: 50},{
    refetchOnMountOrArgChange: true,
  });

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Profile", href: "/profile" },
    { title: "Orders", href: "#" },
  ];

  return (
    <CustomHeader
      breadCrumb={breadcrumb}
      title="Orders"
      isError={isError}
      loading={loading}
    >
      <Box sx={{ width: "100%" , overflowX:'auto' }}>
        <Table sx={{minWidth:600}}>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Order Total</TableCell>
              <TableCell>Order Status</TableCell>
              <TableCell>#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  {new Date(row.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{row.quantity.toLocaleString()}</TableCell>
                <TableCell>{row.total.toLocaleString()}</TableCell>
                <TableCell>{row.statusTitle}</TableCell>
                <TableCell>
                  <Link to={`/profile/orders/${row.id}`}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell>
                {rows
                  .reduce((acc, cur) => acc + cur.quantity, 0)
                  .toLocaleString()}
              </TableCell>
              <TableCell>
                {rows.reduce((acc, cur) => acc + cur.total, 0).toLocaleString()}
              </TableCell>
              <TableCell colSpan={2} />
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </CustomHeader>
  );
}

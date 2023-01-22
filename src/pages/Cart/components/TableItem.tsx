import {
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { CartType } from "../../../hooks/useLayoutContext";

type TableItemProps = {
  item: CartType;
};

export default function TableItem({ item }: TableItemProps) {
  return (
    <TableRow key={item.id}>
      <TableCell>{item.name}</TableCell>
      <TableCell>${item.price.toLocaleString()}</TableCell>
      <TableCell>
        <TextField
          type="number"
          inputProps={{ min: 1 }}
          defaultValue={item.quantity}
          size="small"
          sx={{ width: 80 }}
        />
      </TableCell>
      <TableCell>${(item.price * item.quantity).toLocaleString()}</TableCell>
      <TableCell>
        <Tooltip title="Remove from cart">
          <IconButton size="small" color="error">
            <FaTrash />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

import { TableCell, TableRow } from "@mui/material";
import React from "react";

type TableHeaderItemProps = {
  headers: string[];
};

export default function TableHeaderItem({ headers }: TableHeaderItemProps) {
  return (
    <TableRow>
      {headers.map((header) => (
        <TableCell key={header}>{header}</TableCell>
      ))}
    </TableRow>
  );
}

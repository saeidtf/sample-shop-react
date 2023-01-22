import { Stack, Typography } from '@mui/material';
import React from 'react'

type CartDetailsItemProps = {
    title: string;
    value: string;
}

export default function CartDetailsItem({title, value}: CartDetailsItemProps) {

  return (
    <Stack direction={"row"} spacing={2} justifyContent="space-between">
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body1">{value}</Typography>
    </Stack>
  )
}

import { Box, Grid, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import useFetch from "../../hooks/useFetch";
import ProductsSkelton from "./components/ProductsSkelton";

export type ProductItemType = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  thumbnail: string;
  description: string;
};

type ProductDataType = {
  data: {
    count: number;
    rows: ProductItemType[];
  };
  success: boolean;
};

export default function Products() {
  const router = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const pagesize = Number(searchParams.get("pagesize")) || 12;

  const {
    isError,
    loading,
    data: { data } = {},
  } = useFetch<ProductDataType>(`/products?pageSize=${pagesize}&page=${page}`);
  const { rows, count } = data || ({} as ProductDataType["data"]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {    
    router(`?page=${value}&pagesize=${pagesize}`);
  };

  if (loading) return <ProductsSkelton />;
  if (isError) return <Box>Error</Box>;

  return (
    <Stack spacing={3}>
      <Grid container spacing={2}>
        {rows?.map((product) => (
          <Grid item xs={12} sm={6} md={3} lg={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
      {count && count > pagesize && (
        <Pagination
          count={Math.ceil(count / pagesize)}
          page={page}
          onChange={handleChangePage}
        />
      )}
    </Stack>
  );
}

import {
  Box,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import useFetch from "../../hooks/useFetch";
import ProductsSkelton from "./components/ProductsSkelton";
import debounce from 'lodash/debounce'

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
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const pagesize = Number(searchParams.get("pagesize")) || 12;
  const [search, setSearch] = useState("");

  const {
    isError,
    loading,
    data: { data } = {},
  } = useFetch<ProductDataType>(
    `/products?pageSize=${pagesize}&page=${page}${search && `&q=${search}`}`
  );
  const { rows, count } = data || ({} as ProductDataType["data"]);

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value)
    setSearch(value);
  }, 1000);

  if (isError) return <Box>Error</Box>;

  return (
    <Stack spacing={8}>
      <Box mt={4}>
        <TextField
          defaultValue={search}
          onChange={handleSearch}
          label="Search"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Box>
      {loading && <ProductsSkelton />}
      {!loading && (
        <Grid container spacing={2}>
          {rows?.map((product) => (
            <Grid item xs={12} sm={6} md={3} lg={4} key={product.id}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      )}
      {count && count > pagesize && (
        <Pagination
          count={Math.ceil(count / pagesize)}
          page={page}
          showFirstButton
          showLastButton
          renderItem={(item) => (
            <PaginationItem
              {...item}
              component={Link}
              to={`?page=${item.page}`}
            />
          )}
        />
      )}
    </Stack>
  );
}

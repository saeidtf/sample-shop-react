import {
  Box,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
} from "@mui/material";
import debounce from "lodash/debounce";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import { useGetProductsQuery } from "../../services/productApi";
import ProductsSkelton from "./components/ProductsSkelton";

export default function Products() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pagesize")) || 12;
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const router =useNavigate();

  const {
    data: { data: { rows = [], count = 0 } = {} } = {},
    isError,
    isLoading: loading,
  } = useGetProductsQuery(
    {
      page,
      pageSize,
      ...(search && { q: search }),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    router(`/products?page=1${value && `&search=${value}`}`)
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
      {count && count > pageSize && (
        <Pagination
          count={Math.ceil(count / pageSize)}
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

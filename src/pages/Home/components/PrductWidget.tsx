import { Box, Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import ProductItem from "../../../components/ProductItem";
import useFetch from "../../../hooks/useFetch";
import { ProductItemType } from "../../../services";

type PrductWidgetProps = {
  title: string;
  data : ProductItemType[],
  loading?: boolean;
};
export const PrductWidget = ({ title, data , loading }: PrductWidgetProps) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <Card variant="outlined" sx={{ my: 10 }}>
      <CardHeader title={title} sx={{ textAlign: "center" }} />
      <CardContent>
        {loading && (
          <Grid container spacing={2}>
            {Array.from(new Array(4)).map((_, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box>
                  <Skeleton variant="rectangular" width={300} height={200} />
                  <Skeleton />
                  <Skeleton width="60%" />                  
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
        {!loading && (
          <CustomSlider {...settings}>
            {data.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </CustomSlider>
        )}
      </CardContent>
    </Card>
  );
};

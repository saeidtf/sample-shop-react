import { Card, CardContent, CardHeader } from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import ProductItem  from "../../../components/ProductItem";
import useFetch from "../../../hooks/useFetch";

export type Product={
  id: number;
  name: string;
  price: number;
  thumbnail: string;  
}

type ResponseType = {
  data: Product[];
  success: boolean;
}

type PrductWidgetProps = {
  title: string;
  url: string;
};
export const PrductWidget = ({ title , url }: PrductWidgetProps) => {

  const {data,isError,loading} = useFetch<ResponseType>(url);
  const products = data?.data || [];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <Card variant="outlined" sx={{ my: 10 }}>
      <CardHeader title={title} sx={{textAlign:'center'}}/>
      <CardContent>
        <CustomSlider {...settings}>
          {products.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </CustomSlider>
      </CardContent>
    </Card>
  );
};

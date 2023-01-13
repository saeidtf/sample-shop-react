import { Card, CardContent, CardHeader } from "@mui/material";
import CustomSlider from "../../../components/CustomSlider";
import ProductItem  from "../../../components/ProductItem";

export type Product={
  id: number;
  name: string;
  price: number;
  image: string;  
}
type PrductWidgetProps = {
  title: string;
  products?: Product[];  
};
export const PrductWidget = ({ title , products = [] }: PrductWidgetProps) => {
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

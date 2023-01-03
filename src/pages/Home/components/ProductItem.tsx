import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Stack,
    Typography
} from "@mui/material";

type ProductItemProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const { id, name, price, image } = product;
  return (
    <Card key={id} sx={{px:2}} >
      <CardHeader title={name} />
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ borderRadius: 4 }}
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" color="text.secondary">
            Price
          </Typography>
          <Typography variant="h6" color="primary">
            ${price}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

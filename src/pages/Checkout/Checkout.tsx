import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLayout } from "../../components/Layout";
import { PageHeader } from "../../components/PageHeader";
import STButton from "../../components/STButton";
import { TextFieldController } from "../../components/TextFieldController";
import usePost from "../../hooks/usePost";
import CartItem from "../Cart/components/CartItem";

interface IFormInput{
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
}

export default function Checkout() {
  const { cart, userInfo } = useLayout();
  const {loading,post} = usePost("/orders")
  const router= useNavigate()   

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Cart", href: "/cart" },
    { title: "Checkout", href: "#" },
  ];

  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: userInfo?.name ?? "",
      lastName: userInfo?.family ?? "",
      phoneNumber: userInfo?.phone ?? "",
      address: "",
    },
  });


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const orderItems = cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
    }));

    const order = {
        ...data,
        orderItems,
    };

    const res = await post(order);
    if(res.success){
        toast.success("Order placed successfully");
        router("/profile/orders");

    }else{
        toast.error(res.message || "Something went wrong");
    }
  };

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <PageHeader title="Checkout" breadcrumb={breadcrumb} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Cart Items" />
            <CardContent>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} isCheckout />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Shipping Address" />
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                  <TextFieldController
                    control={control}
                    name="firstName"
                    size="small"
                    label="First Name *"
                    variant="outlined"
                    fullWidth
                    formRules={{required: true}}
                  />
                  <TextFieldController
                    control={control}
                    name="lastName"
                    size="small"
                    label="Last Name *"
                    variant="outlined"
                    fullWidth
                    formRules={{required: true}}
                  />
                  <TextFieldController
                    control={control}
                    name="phoneNumber"
                    size="small"
                    label="Phone Number *"
                    variant="outlined"
                    fullWidth
                    formRules={{required: true}}
                  />
                  <TextFieldController
                    control={control}
                    name="address"
                    size="small"
                    label="Address *"
                    variant="outlined"
                    fullWidth
                    formRules={{required: true}}
                  />
                  <STButton type="submit" variant="contained" loading={loading} fullWidth>
                    Place Order
                  </STButton>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
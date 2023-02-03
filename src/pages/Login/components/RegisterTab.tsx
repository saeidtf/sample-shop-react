import { Button, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../redux/feuchers/userSlice";
import { useAppDispatch } from "../../../redux/hook";
import { useRegisterMutation } from "../../../services";

type Inputs = {
  email: string;
  password: string;
  name: string;
  family: string;
  phone: string;
};

export default function RegisterTab() {
  const router = useNavigate();
  const dispatch = useAppDispatch();

  const [createUser, { isLoading: loading }] = useRegisterMutation();

  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      family: "",
      phone: "",
    },
  });
  const onSubmit = async (data: Inputs) => {
    const res = await createUser(data).unwrap();

    if (res.success && res?.data?.user) {
      dispatch(
        login({
          value: res?.data?.user,
          token: res?.data?.token,
        })
      );
      toast("Register successful", { type: "success" });
      router("/");
    } else {
      toast(res.message, { type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} mt={4}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              {...field}
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
            />
          )}
        />
        <Controller
          name="family"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              label="Family"
              variant="outlined"
              size="small"
              {...field}
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, formState }) => (
            <TextField
              label="Phone"
              variant="outlined"
              size="small"
              {...field}
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
          render={({ field, formState }) => (
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              {...field}
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              {...field}
              error={!!formState.errors.password}
              helperText={formState.errors.password?.message}
            />
          )}
        />
      </Stack>
      <Button
        disabled={loading}
        type="submit"
        variant="contained"
        size="small"
        sx={{ mt: 4 }}
      >
        Register
      </Button>
    </form>
  );
}

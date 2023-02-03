import { Button, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLayout } from "../../../components/Layout";
import { useLoginMutation } from "../../../services";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginTab() {
  const router = useNavigate();
  const { changeUserInfo } = useLayout();

  const [logingUser, { isLoading: loading }] = useLoginMutation();

  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: Inputs) => {
    const res = await logingUser(data).unwrap();

    if (res.success && res?.data?.user) {      
      changeUserInfo(res?.data?.user, res?.data?.token);
      toast("Login successful", { type: "success" });
      router("/");
    } else {
      toast(res.message, { type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} mt={4}>
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
        Login
      </Button>
    </form>
  );
}

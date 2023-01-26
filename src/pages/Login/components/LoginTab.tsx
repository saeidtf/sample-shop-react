import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import usePost from "../../../hooks/usePost";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLayout } from "../../../components/Layout";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginTab() {
  const { loading, post } = usePost("/users/login");
  const router = useNavigate();
  const { changeUserInfo } = useLayout();

  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: Inputs) => {
    const res = await post(data);
    if (res.success) {
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

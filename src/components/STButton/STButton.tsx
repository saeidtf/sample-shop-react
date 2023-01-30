import { Button, ButtonProps, CircularProgress } from "@mui/material";
import React, { forwardRef } from "react";

export type STButtonProps = ButtonProps & {
  children: React.ReactNode;
  loading?: boolean;
};

const STButton = forwardRef<HTMLButtonElement, STButtonProps>((props, ref) => {
  const { children, loading: isLoading, ...other } = props;

  return (
    <Button ref={ref} {...other} disabled={props.disabled || isLoading}>
      {isLoading ? <CircularProgress size={20}  /> : children}
    </Button>
  );
});

export default STButton;
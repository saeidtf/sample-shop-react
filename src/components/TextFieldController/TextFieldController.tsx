import { TextField, TextFieldProps } from "@mui/material";
import { Controller, RegisterOptions } from "react-hook-form";

type TextFieldControllerType = Omit<TextFieldProps, "defaultValue"> & {
  name: string;
  control: any;
  formRules?: RegisterOptions;
};

export default function TextFieldController({
  name,
  formRules,
  control,
  ...props
}: TextFieldControllerType) {
  return (
    <Controller
      name={name}
      control={control}
      rules={formRules}
      render={({ field, formState: { isValid, errors, isValidating } }) => (
        <TextField
          {...props}
          {...field}
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
        />
      )}
    />
  );
}

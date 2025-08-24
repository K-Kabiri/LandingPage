import { InputBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomInput = ({ borderRadius, bgColor, borderColor, placeholderColor, ...props }) => {
  const theme = useTheme();

  const finalBorderColor = borderColor || "#ccc";

  return (
    <InputBase
      {...props}
      sx={{
        border: `1px solid ${finalBorderColor}`,
        borderRadius: borderRadius || 16,
        padding: "5px 15px",
        width: "100%",
        backgroundColor: bgColor,
        transition: "all 0.2s ease-in-out",

        "&:hover": {
          borderColor: theme.palette.primary.main,
        },

        "&.Mui-focused": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },

        "&:focus-within": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },

        "& input::placeholder": {
          color: placeholderColor || "#888",
          opacity: 1,
        },

        "& textarea::placeholder": {
          color: placeholderColor || "#888",
          opacity: 1,
        },
      }}
    />
  );
};

export default CustomInput;

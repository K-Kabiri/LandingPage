import { InputBase } from "@mui/material";
import theme from "../../theme.js";

const CustomInput = ({ borderRadius,bgColor, ...props }) => {
    return (
        <InputBase
            {...props}
            sx={{
                border: "1px solid #ccc",
                borderRadius: borderRadius || 16,
                padding: "5px 15px",
                width: "100%",
                backgroundColor: bgColor,
            }}
        />
    );
};

export default CustomInput;

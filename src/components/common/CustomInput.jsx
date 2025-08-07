import { InputBase } from "@mui/material";
import theme from "../../theme.js";

const CustomInput = ({ borderRadius, ...props }) => {
    return (
        <InputBase
            {...props}
            sx={{
                border: "1px solid #ccc",
                borderRadius: borderRadius || 16,
                padding: "5px 10px",
                width: "100%",
            }}
        />
    );
};

export default CustomInput;

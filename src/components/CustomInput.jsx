import { InputBase } from "@mui/material";
import theme from "../js/theme.js";

const CustomInput = ({ borderRadius, px , py, ...props }) => {
    return (
        <InputBase
            {...props}
            sx={{
                border: "1px solid #ccc",
                borderRadius: borderRadius || 16,
                padding: "5px 10px" || `${px}px ${py}px`,
                width: "100%",
                [theme.breakpoints.up("sm")]: {
                    width: "auto",
                    flexGrow: 1,
                },
            }}
        />
    );
};

export default CustomInput;

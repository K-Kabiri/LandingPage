import { InputBase } from "@mui/material";
import theme from "../../theme.js";

const CustomInput = ({ borderRadius, px , py, ...props }) => {
    return (
        <InputBase
            {...props}
            sx={{
                border: "1px solid #ccc",
                borderRadius: borderRadius || 16,
                padding: "5px 10px",
                // width: "100%",
                [theme.breakpoints.up("md")]: {
                    // width: "400px",
                    // flexGrow: 1,
                    width: "fit-content",
                },
            }}
        />
    );
};

export default CustomInput;

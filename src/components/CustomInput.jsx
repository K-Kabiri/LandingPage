import {styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";

const CustomInput = styled(InputBase)(({ theme }) => ({
    border: "1px solid #ccc",
    borderRadius: 16,
    padding: "12px 20px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto",
        flexGrow: 1,
    },
}));

export default CustomInput;
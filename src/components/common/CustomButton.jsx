import {Button} from "@mui/material";
import theme from "../../theme.js";

const CustomButton = ({bgColor, textColor, fontSize,px,py,borderRadius, children}) => {
    return (
        <Button
            sx={{
                backgroundColor: theme.palette[bgColor]?.main || bgColor|| theme.palette.primary.main,
                color: theme.palette[textColor]?.main || textColor ||  'white',
                px: px || 4,
                py:py || 1,
                borderRadius: borderRadius || 8,
                fontSize: theme.typography[fontSize] || theme.typography.fontSize,
                fontWeight: 'bold',
                boxShadow: 1,
                textTransform: 'none',
                margin:0,
                width:"fit-content",
            }}
        >
            {children}
        </Button>
    )
}
export default CustomButton;
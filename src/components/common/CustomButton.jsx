import { Button } from "@mui/material";
import {useTheme} from "@mui/material/styles";

const CustomButton = ({
                          bgColor,
                          textColor,
                          fontSize,
                          px,
                          py,
                          borderRadius,
                          iconUrl,
                          children,
                          onClick
                      }) => {
    const theme = useTheme();

    return (
        <Button
            onClick={onClick}
            sx={{
                backgroundColor: theme.palette[bgColor]?.main || bgColor || theme.palette.primary.main,
                color: theme.palette[textColor]?.main || textColor || 'white',
                px: px || 4,
                py: py || 1,
                borderRadius: borderRadius || 8,
                fontSize: theme.typography[fontSize] || theme.typography.fontSize,
                fontWeight: 'bold',
                boxShadow: 1,
                textTransform: 'none',
                margin: 0,
                width: "fit-content",
                gap: 2,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {iconUrl && <img src={iconUrl} alt="icon" className={"w-5 h-5"} />}
            {children}
        </Button>
    )
}

export default CustomButton;

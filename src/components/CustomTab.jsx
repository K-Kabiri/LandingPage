import {Tabs} from "@mui/material";
import theme from "../js/theme.js";
import React from "react";

const CustomTab = ({fontSize,paddingX, textColor, children}) => {
    console.log(children)
    return (
        <Tabs
            sx={{
                '.MuiTab-root': {
                    color: textColor || theme.palette.text.primary,
                    fontSize: fontSize || theme.typography.fontSize,
                    fontWeight: 500,
                    textTransform: 'none',
                    paddingX: paddingX || 1,
                    minHeight: 'unset',
                    borderRadius:8,
                    '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: 'white',
                    },
                },
            }}
        >
            {children}
        </Tabs>
    )
}
export default CustomTab;
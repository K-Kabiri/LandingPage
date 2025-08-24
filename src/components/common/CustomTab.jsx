import { Tabs, useTheme } from "@mui/material";
import React from "react";

const CustomTab = ({ fontSize, paddingX, textColor, children }) => {
  const theme = useTheme();

  return (
    <Tabs
      sx={{
        ".MuiTab-root": {
          color: textColor || theme.palette.text.primary,
          fontSize: theme.typography[fontSize]?.fontSize || theme.typography.fontSize,
          fontWeight: 500,
          textTransform: "none",
          paddingX: paddingX || 1,
          minHeight: "unset",
          borderRadius: 8,
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "white",
          },
        },
      }}
    >
      {children}
    </Tabs>
  );
};
export default CustomTab;

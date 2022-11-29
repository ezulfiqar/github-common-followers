import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

export const Header = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Github Common Followers
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

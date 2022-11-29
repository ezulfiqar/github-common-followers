import React from "react";
import { StyledAppBar } from "./Header.styles";
import { Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ color: "#000", flexGrow: 1, fontWeight: 700 }}
        >
          Github Common Followers
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

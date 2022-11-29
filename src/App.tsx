import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Header } from "./components";
import { CommonFollowers } from "./modules";

function App() {
  return (
    <Box className="App">
      <CssBaseline />
      <Header />
      <Toolbar />
      <Box component="main" sx={{ p: 3 }}>
        <Container maxWidth="md">
          <CommonFollowers />
        </Container>
      </Box>
    </Box>
  );
}

export default App;

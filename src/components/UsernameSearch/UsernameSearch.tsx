import React, { useState } from "react";
import { Box, Button, InputBase, Paper } from "@mui/material";

type UsernameSearchPropsType = {
  setUserOne: (value: string) => void;
  setUserTwo: (value: string) => void;
  userOne: string;
  userTwo: string;
};

export const UsernameSearch = ({
  setUserOne,
  setUserTwo,
  userOne,
  userTwo,
}: UsernameSearchPropsType) => {
  const [valueOne, setValueOne] = useState(userOne);
  const [valueTwo, setValueTwo] = useState(userTwo);

  const handleOnClick = () => {
    setUserOne(valueOne);
    setUserTwo(valueTwo);
  };

  return (
    <Box sx={{ display: "flex", columnGap: 2 }}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, p: "2px 4px" }}
          placeholder="User 1 (i.e. tumiduong)"
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => setValueOne(event.target.value)}
          value={valueOne}
        />
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, p: "2px 4px" }}
          placeholder="User 2 (i.e. mildlywilde)"
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => setValueTwo(event.target.value)}
          value={valueTwo}
        />
      </Paper>
      <Button onClick={handleOnClick} variant="contained" sx={{ paddingX: 6 }}>
        Search
      </Button>
    </Box>
  );
};

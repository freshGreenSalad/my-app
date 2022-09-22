import React from "react";
import { Box } from "@mui/material";

export default function SigninPageText() {
  return (
    <Box
      sx={{
        marginTop: 32,
        display: "flex",
        flexDirection: "column",
        p: 2,
        minWidth: 300,
        opacity: 0.5,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "white",
      }}
    >
      <h1 style={{ opacity: 0.99 }}> Tamaki Labour Company</h1>
      <h2 style={{ opacity: 0.99 }}>
        The new way to find workers, when you need them, where you need them
      </h2>
    </Box>
  );
}
export {};

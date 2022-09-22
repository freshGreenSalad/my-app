import React from "react";
import { Box } from "@mui/material";

export default function ContactPage() {
  return (
    <>
      <Box
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ padding: "80px" }}
      >
        <h1> Contact us </h1>
        <p>
          You can email the team directly through{" "}
          <span style={{ color: "blue" }}>tamakilabour.small@gmail.com </span>
          or send us a message through the form below
        </p>
      </Box>
    </>
  );
}
export {};

import React from "react";
import { Box } from "@mui/material";

export default function About() {
  return (
    <>
      <Box
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ padding: "80px" }}
      >
        <h1> About Us </h1>
        <p>Kia ora!</p>
        <p>
          Thank you for having a look through our barnd new website! We are a
          team of construction workers turned codes who want to make hiring
          workers and beter for supervisors and labour hire workers sign up
          today and join us on our mission to maker
        </p>

        <p>
          Our team is located in central Auckland and is looking for
          construction companies as parnters to help refine our product.
        </p>
      </Box>
    </>
  );
}
export {};

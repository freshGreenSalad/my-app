import * as React from "react";
import Footer from "../footer/footer";
import SignIn from "../signin/signin";
import { Box } from "@mui/material";
import SigninPageText from "../signin/signinPageText";
import { styled } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <>
        <Box>
          <ImageWrapper
            src={"./images/workerLine.jpg"}
            style={{ opacity: 0.6, padding: 0 }}
            alt=""
          />
        </Box>
      </>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
          <Box sx={{ height: "20.px" }}></Box>
        </Box>
        <Box gridColumn="span 1"></Box>
        <Box gridColumn="span 6">
          <Box>
            <SigninPageText />
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box>
            <SignIn />
          </Box>
        </Box>
      </Box>
      ;{/* </Box> */}
      <Box component="main">
        <Footer />
      </Box>
    </>
  );
}

const ImageWrapper = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderstyle: "none",
  padding: theme.spacing(0, 2),
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
}));
export {};

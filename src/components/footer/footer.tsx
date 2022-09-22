import React from "react";
import { styled } from "@mui/material";

export default function Footer() {
  return <FooterWrapper>footer</FooterWrapper>;
}

const FooterWrapper = styled("div")(
  ({ theme }) => `
    flex: 1;
    display: flex;
    justify-content: center;
    background: ${theme.palette.background.paper};
    minHeight: ${30};
`
);

export {};

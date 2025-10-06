"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/theme";

const muiCache = createCache({ key: "mui", prepend: true });

export default function ThemeRegistry({ children }) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { theme } from "./components/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <Header />
          <SideBar />
        </Box>
      </ThemeProvider>
      <CssBaseline />
    </>
  );
};

export default App;

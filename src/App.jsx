import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <Header />
        <SideMenu />
      </Box>
      <CssBaseline />
    </>
  );
};

export default App;

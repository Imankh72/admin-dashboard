import { Box } from "@mui/material";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <SideMenu />
      <Box
        sx={{
          width: "100%",
          paddingLeft: "320px",
        }}
      >
        <Header />
      </Box>
    </Box>
  );
};

export default App;

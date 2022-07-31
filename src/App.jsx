import { Box } from "@mui/material";
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
    </Box>
  );
};

export default App;

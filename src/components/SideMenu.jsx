import { Box } from "@mui/material";

const SideMenu = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          background: "#1e40af",
          right: "0",
          width: "320px",
          height: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default SideMenu;

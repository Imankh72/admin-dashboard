import { Box } from "@mui/material";

const SideBar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          background: "#1e3a8a",
          right: "0",
          width: "320px",
          height: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default SideBar;

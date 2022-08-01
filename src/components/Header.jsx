import { AppBar, Badge, Grid, IconButton, InputBase } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Grid container spacing={2}>
        <Grid item sm={6} sx={{ background: "#fd5", textAlign: "center" }}>
          <InputBase />
        </Grid>
        <Grid item sm={6} sx={{ background: "#ccc", textAlign: "center" }}>
          <IconButton aria-label="add an alarm">
            <Badge></Badge>
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;

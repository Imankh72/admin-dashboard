import {
  Chat,
  Notifications,
  PowerSettingsNew,
  Search,
} from "@mui/icons-material";
import { AppBar, Badge, Grid, IconButton, InputBase } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ padding: "0.5rem 1rem" }}>
      <Grid container>
        <Grid item>
          <InputBase
            placeholder="جستجو..."
            startAdornment={
              <Search
                fontSize="medium"
                sx={{
                  margin: "0 10px",
                }}
              />
            }
            sx={{
              background: "#ccc",
              borderRadius: "0.5rem",
            }}
          />
        </Grid>
        <Grid item sm></Grid>
        <Grid item>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <Chat />
            </Badge>
          </IconButton>
          <IconButton>
            <PowerSettingsNew />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;

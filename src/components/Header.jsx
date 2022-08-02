import styled from "@emotion/styled";
import {
  Chat,
  Notifications,
  PowerSettingsNew,
  Search,
} from "@mui/icons-material";
import { AppBar, Badge, Grid, IconButton, InputBase } from "@mui/material";

const Navbar = styled(AppBar)(({ theme }) => ({
  padding: "0.5rem 1rem",
  background: theme.palette.primary,
}));

const GroupIcon = styled(Grid)(() => ({
  "& .icon": {
    color: "#ccc",
  },
}));

const Header = () => {
  return (
    <Navbar position="static">
      <Grid container alignItems="center">
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
              fontSize: "18px",
            }}
          />
        </Grid>
        <Grid item sm></Grid>
        <GroupIcon item>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <Notifications className="icon" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <Chat className="icon" />
            </Badge>
          </IconButton>
          <IconButton>
            <PowerSettingsNew className="icon" />
          </IconButton>
        </GroupIcon>
      </Grid>
    </Navbar>
  );
};

export default Header;

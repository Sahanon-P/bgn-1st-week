import { AppBar, Grid, Stack, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <AppBar position="static" sx={{ background: "transparent" }}>
      <Toolbar>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Stack direction="row" spacing={2} alignItems={'center'}>
              <img src={Logo} height={50} width={50}></img>
              <Typography>BGN</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Typography>Sign In</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

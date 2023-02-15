import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Config from "../../config";
import Grid from "@mui/material/Grid";
import SwitchCustom from "./SwitchCustom";

export default function AppBarCustom() {
  if (Config.VIEW_WITH_TOOLBAR !== 'Y') {
    return null
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <SwitchCustom/>

        <Grid container justifyContent="flex-end">
          <Typography variant="h6" color="inherit" noWrap>
            {Config.VIEW_TOOLBAR_TITLE}
          </Typography>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}
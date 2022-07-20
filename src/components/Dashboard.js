import React from "react";
import { Paper, Grid, Card } from "@mui/material";
class Dashboard extends React.Component {
  render() {
    return (
      <Card raised sx={{ padding: "1rem", height: "100%", width: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Paper elevation={5}>First</Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Paper elevation={5}>Second</Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Paper elevation={5}>Third</Paper>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default Dashboard;

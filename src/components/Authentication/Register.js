import React from "react";
import { Button, Card, CardHeader, TextField, Grid } from "@mui/material";
import Spinner from "../UI/Spinner";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.fullNameRef = React.createRef();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  state = {
    isLoading: false,
    isRegisteredSuccess: false,
    redirectToLoginPage: false,
  };
  submitRegistration = () => {
    const name = this.fullNameRef.current.children[1].children[0].value;
    const username = this.usernameRef.current.children[1].children[0].value;
    const password = this.passwordRef.current.children[1].children[0].value;
    console.log(name, username, password);
    this.setState({ isLoading: true });
    axios
      .get(
        "https://expense-tracker-8a89a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      )
      .then((Response) => {
        const totalUsers = Response.data.length;
        axios
          .post(
            "https://expense-tracker-8a89a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
            {
              id: totalUsers + 1,
              fullName: name,
              username: username,
              password: password,
            }
          )
          .then((response) => {
            console.log(response);
            this.setState({ isLoading: false, isRegisteredSuccess: true });
            console.log("Registered");
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
  };
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    if (this.state.isRegisteredSuccess) {
      return <Navigate to="/login" />;
    }
    if (this.state.redirectToLoginPage) {
      return <Navigate to="/login" replace={true} />;
    }
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          raised
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
            padding: "15px",
          }}
        >
          <CardHeader
            title="Sign Up!"
            subheader="Fill-out your account details"
            sx={{ textAlign: "center" }}
          />
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              autoFocus
              fullWidth
              required
              ref={this.fullNameRef}
              id="name"
              name="name"
              label="Full Name"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              required
              ref={this.usernameRef}
              id="username"
              name="username"
              label="Username/Email"
              type="email"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              required
              ref={this.passwordRef}
              id="password"
              name="password"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginBlock: "1.5rem",
              textAlign: "center",
            }}
          >
            <Button onClick={this.submitRegistration} variant="contained">
              Register
            </Button>
            <Button
              onClick={() => {
                this.setState({ redirectToLoginPage: true });
              }}
            >
              Login
            </Button>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

export default Register;

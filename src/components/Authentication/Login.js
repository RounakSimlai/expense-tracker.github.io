import React from "react";
import { Button, Card, CardHeader, TextField, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import Spinner from "../UI/Spinner";
import axios from "axios";
class Login extends React.Component {
  state = {
    isLoading: false,
    loginSuccess: false,
    error: false,
    errorMessage: null,
    redirectToRegisterPage: false,
  };
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  submitLogin = () => {
    const username = this.usernameRef.current.children[1].children[0].value;
    const password = this.passwordRef.current.children[1].children[0].value;
    this.setState({ isLoading: true });
    axios
      .get(
        "https://expense-tracker-8a89a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      )
      .then((response) => {
        const userData = response.data;
        for (let id in userData) {
          if (
            username === userData[id].username &&
            password === userData[id].password
          ) {
            setTimeout(() => {
              this.setState({ isLoading: false, loginSuccess: true });
              sessionStorage.setItem("isLoggedIn", "true");
              sessionStorage.setItem("userId", userData[id].id);
              sessionStorage.setItem("userName", userData[id].fullName);
            }, 150);
            break;
          } else {
            this.setState({
              isLoading: false,
              error: true,
              errorMessage:
                "User Not found!Please ensure that the username and password are correct",
            });
            console.log("Not found");
          }
        }
      });
  };
  checkKey = (event) => {
    if (event.key === "Enter") {
      this.submitLogin();
    }
  };
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    if (this.state.loginSuccess) {
      return <Navigate to="/dashboard" replace={true} />;
    }
    if (this.state.redirectToRegisterPage) {
      return <Navigate to="/register" replace={true} />;
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
            title="Welcome!"
            subheader="Log in to continue!"
            sx={{ textAlign: "center" }}
          />
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              ref={this.usernameRef}
              autoFocus
              fullWidth
              id="username"
              name="username"
              label="Username/Email"
              type="email"
              onKeyDown={this.checkKey}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              ref={this.passwordRef}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onKeyDown={this.checkKey}
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
            <Button onClick={this.submitLogin} variant="contained">
              Login
            </Button>
            <Button
              onClick={() => {
                this.setState({ redirectToRegisterPage: true });
              }}
            >
              Register
            </Button>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

export default Login;

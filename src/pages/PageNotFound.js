import React from "react";
import { Link } from "react-router-dom";

class PageNotFound extends React.Component {
  render() {
    return (
      <main style={{ padding: "1rem" }}>
        <p>
          There's nothing here dummy!<Link to="/">Go back!</Link>
        </p>
      </main>
    );
  }
}

export default PageNotFound;

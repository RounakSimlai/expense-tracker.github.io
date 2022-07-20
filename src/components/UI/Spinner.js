import React from "react";
import { CircularProgress } from "@mui/material";
import "../../css/spinnerStyle.css";
const Spinner = () => {
  return (
    <div className="loader">
      <CircularProgress size="5rem"></CircularProgress>
    </div>
  );
};
export default Spinner;

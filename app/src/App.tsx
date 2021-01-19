import React, { Component, useState } from "react";
import { Table, Button } from "reactstrap";
import {
  faImage,
  faThumbsUp,
  faThumbsDown,
  faMoneyCheckAlt,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Users } from "./Users";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Users />
    </React.StrictMode>
  );
};

export default App;

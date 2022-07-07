import Styles from "./styles/Styles.css";
import React, { useState } from "react";
import LoginLayOut from "./LoginLayOut";
import Dashboard from "./Dashboard";
import StudentLogin from "./StudentLoginForm";
import StudentSignin from "./StudentSignin";
import Dropdown from "./Dropdown";

const classes = [
  { name: "One", value: 1 },
  { name: "Two", value: 2 },
  { name: "Three", value: 3 },
  { name: "Four", value: 4 },
  { name: "Five", value: 5 },
  { name: "Six", value: 6 },
  { name: "Select Class", value: 0 },
];
function App() {
  const [selected, setSelected] = useState(classes[6]);
  return (
    //   <Dropdown
    //     classes={classes}
    //     selected={selected}
    //     onSelectedChange={setSelected}
    //   />
    // );
    // <StudentSignin
    //   classes={classes}
    //   selected={selected}
    //   onSelectedChange={setSelected}
    // />
    <LoginLayOut/>
  );
}

export default App;

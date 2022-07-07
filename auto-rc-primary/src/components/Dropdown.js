import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const Dropdown = ({ classes, selected, onSelectedChange }) => {
  const [active, setActive] = useState(false);

  const renderClas = classes.map((clas) => {
    if (clas.value == selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={clas.value}
        onClick={() => {
          onSelectedChange(clas);
        }}
      >
        {clas.name}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select Color</label>
        <div
          className={`ui selection dropdown  ${active ? "visible active" : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <div className="text">{selected.label}</div>
          <i className="dropdown icon"></i>
          <div className={`menu  ${active ? "visible transition" : ""}`}>
            {renderClas}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

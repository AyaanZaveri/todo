import React from "react";
import Button from "./Button";

const Theme = ({ handleTheme }) => {
  const colors = ["Blue", "Sky", "Indigo"];

  return (
    <div className="absolute bottom-0 left-0 m-5">
        <div className="flex flex-wrap flex-row gap-x-3 mt-5">
        {colors.map((color) => (
            <div key={Math.round(Math.random() * 10000)} onClick={() => handleTheme(color)}>
            <Button key={Math.round(Math.random() * 10000)} text={color} color={color} />
            </div>
        ))}
        </div>
    </div>
  );
};

export default Theme;

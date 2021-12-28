import React from "react";
import { useState } from "react";
import * as HeroIcons from "@heroicons/react/outline";
import PropTypes from "prop-types";

const Input = ({ color, padx, pady, placeholder, width, handleText, handleDate }) => {
  return (
    <div className="flex flex-col justify-center">
      <input
        onChange={(e) => handleText(e.target.value)}
        placeholder={placeholder}
        className={`focus:ring-${color.toLowerCase()} w-${width} text-gray-500 shadow-sm appearance-none inline-flex items-center px-${padx} py-${pady} text: hover:text-gray-500 focus:text-gray-500 hover:bg-slate-50 active:text-gray-500 text-sm font-normal active:bg-${color.toLowerCase()}-100 bg-white border focus:border-${color.toLowerCase()}-500 focus:ring ring-${color.toLowerCase()}-300 rounded-md focus:outline-none transition`}
      />
      <input
        type="date"
        onChange={(date) => handleDate(date.target.value)}
        placeholder={placeholder}
        className={`focus:ring-${color.toLowerCase()} w-${width} text-gray-500 mt-2 outline-none shadow-sm appearance-none inline-flex items-center px-${padx} py-${pady} text: hover:text-gray-500 focus:text-gray-500 hover:bg-slate-50 active:text-gray-500 text-sm font-normal active:bg-${color.toLowerCase()}-100 bg-white border focus:border-${color.toLowerCase()}-500 focus:ring ring-${color.toLowerCase()}-300 rounded-md focus:outline-none transition`}
      />
    </div>
  );
};

Input.defaultProps = {
  text: "Input",
  color: "rose",
  padx: "3",
  pady: "2",
};

Input.propTypes = {
  //text: PropTypes.string || PropTypes.number,
  color: PropTypes.string,
  padx: PropTypes.string,
  pady: PropTypes.string,
  placeholder: PropTypes.string || PropTypes.number,
  width: PropTypes.string,
};

export default Input;

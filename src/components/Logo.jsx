import React from "react";

function Logo({ className }) {
  return (
    <img
      src={require("../assets/white-logo.png")}
      alt="logo"
      className={className}
    />
  );
}

export default Logo;

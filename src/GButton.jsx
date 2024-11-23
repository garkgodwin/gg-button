import React from "react";
import classNames from "classnames";
import "./index.css";

const Button = ({
  text,
  onClick,
  variant = "primary",
  size = "medium",
  isDisabled = false,
  icon = null,
  isLoading = false,
  style,
}) => {
  const classes = classNames("btn", {
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
    "btn-small": size === "small",
    "btn-medium": size === "medium",
    "btn-large": size === "large",
    "btn-disabled": isDisabled || isLoading,
    "btn-loading": isLoading,
    "btn-icon": icon !== null,
  });
  return (
    <button
      onClick={onClick}
      className={classes}
      style={style}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
    >
      {icon}
      {text}
      {isLoading && <div className="loader">Loading</div>}
    </button>
  );
};

export default Button;

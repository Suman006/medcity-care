import React from "react";
import './wrapper.css';
import { useFadeDown } from "../../hooks/useFadeDown";


export const FadeDownWrapper = ({ children, className = "", style = {} }) => {
  const [ref, isVisible] = useFadeDown();

  return (
    <div
      ref={ref}
      className={`fade-down ${isVisible ? "show" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

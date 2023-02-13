import React from "react";
import "./button.css";

const Button = ({ children, color }) => {
    return (
        <div className="button-container" style={{ backgroundColor: color }}>
            {children}
        </div>
    );
};

export default Button;

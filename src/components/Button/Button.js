import React from "react";
import "./button.css";

const Button = ({ children, color, full=false }) => {
    return (
        <div className="button-container" style={{ backgroundColor: color, width: full? '100%': 'fit-content' }}>
            {children}
        </div>
    );
};

export default Button;

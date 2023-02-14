import React from "react";
import "./grid.css";
import Card from "../Card/Card";

const GridView = ({ items = [0,1,2,3,4] }) => {
    return (
        <div className="grid-items">
            {items
                ? items.map((item, index) => {
                      return <Card />;
                  })
                : ""}
        </div>
    );
};

export default GridView;

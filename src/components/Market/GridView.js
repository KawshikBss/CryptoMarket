import React from "react";
import "./grid.css";
import Card from "../Card/Card";

const GridView = ({ items }) => {
    return (
        <div className="grid-items">
            {items
                ? items.map((item, index) => {
                      return <Card key={index} item={item} />;
                  })
                : ""}
        </div>
    );
};

export default GridView;

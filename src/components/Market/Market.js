import React, { useState } from "react";
import "./market.css";
import GridView from "./GridView";
import useContract from "../../hooks/useContract";

const Market = ({ items }) => {
    const { nftList } = useContract();
    const [filter, setFilter] = useState("All");
    const changeFilter = (filterName) => {
        setFilter((curr) => {
            return curr === filterName ? "All" : filterName;
        });
    };
    const isFilterActive = (filterName) => {
        return filter === filterName;
    };
    return (
        <div className="market-container">
            <div className="market-header">
                <h4 className="section-heading">Trending Bids</h4>
                <span className="section-filters">
                    <span
                        className={`filter ${
                            isFilterActive("All") ? "active" : ""
                        }`}
                        onClick={() => changeFilter("All")}
                    >
                        All
                    </span>
                    <span
                        className={`filter ${
                            isFilterActive("Artwork") ? "active" : ""
                        }`}
                        onClick={() => changeFilter("Artwork")}
                    >
                        Artwork
                    </span>
                    <span
                        className={`filter ${
                            isFilterActive("Book") ? "active" : ""
                        }`}
                        onClick={() => changeFilter("Book")}
                    >
                        Book
                    </span>
                </span>
            </div>
            <GridView items={nftList} />
        </div>
    );
};

export default Market;

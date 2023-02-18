import React from "react";
import Button from "../Button/Button";
import "./card.css";

const Card = ({ item }) => {
    return (
        <div className="card-container">
            <img
                src={`https://gateway.pinata.cloud/ipfs/${item}`}
                className="card-image"
            />
            <div className="card-info">
                <span className="card-title">Liquid Wave</span>
                <span className="card-section">
                    <span className="card-auc">Auction Time</span>
                    <div className="card-bid-wrapper">
                        <span className="card-bid">Current Bid</span>
                        <span className="card-bid-price">0.05 ETH</span>
                    </div>
                </span>
                <span className="card-section last">
                    <span className="card-auc-time">3h 1m 50s</span>
                    <span className="card-bid-price-final">0.15 ETH</span>
                </span>
            </div>
            <Button full>Place A Bid</Button>
        </div>
    );
};

export default Card;

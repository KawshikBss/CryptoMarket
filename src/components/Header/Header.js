import React from "react";
import "./header.css";
import { BsSearch, BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import useWallet from "../../hooks/useWallet";

const Header = () => {
    const { account, balance, connectWallet } = useWallet();
    return (
        <div className="header-container">
            <span className="search-wrapper">
                <BsSearch className="search-btn" />
                <input
                    type="text"
                    placeholder="Search Here"
                    className="search-input"
                />
            </span>
            <span className="user-section">
                <BsBell className="header-btn" />
                <FaUserCircle className="header-btn" onClick={connectWallet} />
                {account ? <span>{balance ? balance : "0"} ETH</span> : ""}
            </span>
        </div>
    );
};

export default Header;

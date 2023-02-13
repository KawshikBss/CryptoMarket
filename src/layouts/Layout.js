import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./layout.css";

function Layout({ children }) {
    return (
        <div className="container">
            <Sidebar />
            <div className="body-section">
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Layout;

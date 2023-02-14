import Button from "../../components/Button/Button";
// import '../../../public/assets/TopNft.png'
import "./home.css";

function Home() {
    return (
        <div>
            <div className="hero-section">
                <div className="home-banner-container">
                    <div className="home-banner-inner">
                        <h3 className="home-banner-header">
                            Discover, Collect, Sell and Create your NFT
                        </h3>
                        <p className="home-banner-text">
                            Digital marketplace for crypto collectibles and non
                            fungable tokens
                        </p>
                        <span className="home-banner-btn-wrapper">
                            <Button>Explore</Button>
                            <Button color={"#DC3546"}>Create</Button>
                        </span>
                    </div>
                </div>
                <div className="top-nft-container">
                    <img src="/assets/TopNft.png" className="top-nft-image" />
                    <div className="top-nft-content">
                        <span className="top-nft-user-name">John Doe</span>
                        <div className="top-nft-info">
                            <div className="top-nft-info-section">
                                <span className="nft-auc">Auction Time</span>
                                <span className="nft-bid">
                                    Current Bid :{" "}
                                    <span className="nft-bid-price">
                                        0.05 eth
                                    </span>
                                </span>
                            </div>
                            <div className="top-nft-info-section">
                                <p className="nft-auc-time">3h 1m 50s</p>
                                <p className="nft-bid-final">0.15 eth</p>
                            </div>
                            <span className="nft-btn-items">
                                <Button>Place a Bid</Button>
                                <Button color={"#DC3546"}>Details</Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

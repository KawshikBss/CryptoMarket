import Button from "../../components/Button/Button";
import "./home.css";

function Home() {
    return (
        <div>
            <div>
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
                            <Button color={'#DC3546'}>Create</Button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

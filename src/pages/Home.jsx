import React from "react";
import head from "../assets/tebbotoken-head.png";
import icon from "../assets/chain.png";
import "../styles/home.css";
import svg from "../assets/icon.svg";
const Home = () => {
  return (
    <div className="container">
      {/* <!-- <img className="tebbo" src="./assets/Tebbo (2).png" alt="Tebbo"> --> */}
      <div className="info">
        <div className="title">
          <img src={head} alt="Tebbo" />
        </div>
        <p className="text">
          Whether you're a seasoned investor or a newcomer to the crypto space,
          TebboToken welcomes you.
        </p>
        <p className="text-sml">
          TebboToken isn't just a digital currency; it's a project born out of a
          desire to learn and share knowledge.
        </p>
        <p className="text-sml">
          It serves as an example of what can be achieved with dedication and a
          passion for blockchain technology.
        </p>
        <p className="text-sml">
          Through TebboToken, the developer invites others to explore the world
          of cryptocurrencies in a straightforward and uncomplicated manner.
        </p>
        <a
          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x84713F25CBFF2fb71CEB4d8657dA6436ea7685a2&chain=bsc"
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Buy on BSC <img src={svg} alt="TebboToken" />
        </a>
      </div>
      <img className="icon" src={icon} alt="TebboToken" />
    </div>
  );
};

export default Home;

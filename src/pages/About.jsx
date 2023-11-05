import React from "react";
import "../styles/about.css";
import binance from "../assets/binance.png";
const About = () => {
  return (
    <>
      <main>
        <div className="about-container">
          <h1>About</h1>
          <p>TebboToken is a BEP20 Token</p>
          <p>
            BEP-20 tokens are a type of cryptocurrency that operate on the
            Binance Smart Chain (BSC), a blockchain network developed by
            Binance, one of the world's largest cryptocurrency exchanges. BEP-20
            is a technical standard used for creating and managing tokens on the
            Binance Smart Chain, similar to the ERC-20 standard on the Ethereum
            blockchain.
          </p>
          {/* <p>
            BEP-20 is a set of rules and specifications that a token must adhere
            to in order to be considered a BEP-20 token. These rules ensure that
            the tokens are compatible with the Binance Smart Chain and can be
            easily used and traded on the BSC network.
          </p> */}

          <p>
            Tebbo tokens are created and managed through a smart contract on the
            Binance Smart Chain. Smart contracts are self-executing contracts
            with the terms of the agreement between buyer and seller being
            directly written into lines of code. They enable the creation,
            transfer, and management of tokens without the need for
            intermediaries.
          </p>
          <br />
          <a
            className="contract_Address"
            href="https://bscscan.com/address/0x84713F25CBFF2fb71CEB4d8657dA6436ea7685a2"
            target="_blank"
            rel="noreferrer"
          >
            Smart Contract 0x84713F25CBFF2fb71CEB4d8657dA6436ea7685a2
          </a>
        </div>
        <img className="binance" src={binance} alt="binance logo" />
      </main>
    </>
  );
};

export default About;

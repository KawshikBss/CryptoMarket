import React, { useEffect, useState } from "react";
import Web3 from "web3";
import CryptoMartContract from "../CryptoMartContract.json";

const useContract = () => {
    const [nftList, setNftList] = useState([]);
    useEffect(() => {
        async function getNfts() {
            // connect to the Ethereum network using Web3.js
            const web3 = new Web3(
                "https://goerli.infura.io/v3/aa7f28507a7a45ea8ad4caeae03890d6"
            );

            // get the contract instance using the contract ABI and address
            const contract = new web3.eth.Contract(
                CryptoMartContract.abi,
                CryptoMartContract.address
            );

            // get the total number of tokens minted
            const totalSupply = await contract.methods.totalSupply().call();

            // loop through each token ID and get its metadata
            const nfts = [];
            for (let i = 1; i <= totalSupply; i++) {
                const tokenURI = await contract.methods.tokenURI(i).call();
                nfts.push(tokenURI);
            }

            // set the NFTs state variable
            setNftList(nfts);
        }

        getNfts();
    }, []);
    return { nftList };
};

export default useContract;

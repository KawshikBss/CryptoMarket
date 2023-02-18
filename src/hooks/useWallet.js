import detectEthereumProvider from "@metamask/detect-provider";
import React, { useEffect, useState } from "react";
import Web3 from "web3";

const useWallet = () => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [name, setname] = useState("");

    useEffect(() => {
        const connectWallet = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                const web3 = new Web3(provider);
                try {
                    if (account.length > 0) {
                        const accounts = await provider.request({
                            method: "eth_requestAccounts",
                        });
                        setAccount(accounts[0]);
                    }
                    if (account.length) {
                        const accountBalance = await web3.eth.getBalance(
                            account
                        );
                        console.log(accountBalance);
                        setBalance(web3.utils.fromWei(accountBalance, "ether"));
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log("metamask not found");
            }
        };
        connectWallet();
    }, []);
    const connectWallet = async () => {
        const provider = await detectEthereumProvider();
        if (provider) {
            try {
                const accounts = await provider.request({
                    method: "eth_requestAccounts",
                });
                setAccount(accounts[0]);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("MetaMask not installed");
        }
    };
    return { account, balance, connectWallet };
};

export default useWallet;

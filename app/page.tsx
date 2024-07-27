
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MetaMask from './metMask.png';

const Home: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* MetaMask is installed */
        const accounts: string[] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (err: any) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      alert("Please install MetaMask");
    }
  };

  const truncateAddress = (address: string): string => {
    if (!address) return "";
    const start = address.slice(0, 8);
    const end = address.slice(-4);
    return `${start}...${end}`;
  };

  return (
    <div className='wallet-btn ' style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh",  }}>
      <button className='button connect-wallet' style={{ width:"350px",border:"none", height:"200px",fontSize:"30px",fontWeight:"bold" , display:"flex", alignItems:"center"}} onClick={connectWallet}>
        <Image src={MetaMask} alt="MetaMask Logo" width={100} height={100} />
        {walletAddress ? truncateAddress(walletAddress) : "Connect your wallet to play"}
      </button>
    </div>
  );
}

export default Home;

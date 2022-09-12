import React from "react";
import Image from "next/image";
import MintBox from "../../assets/images/mint-box.png";
import RedGlove from "../../assets/images/red-glove.png";
import BlackGlove from "../../assets/images/black-glove.png";

export default function Mint() {
  return (
    <>
      <div className="mint-gradient flex flex-col lg:flex-row justify-center items-center lg:gap-x-40 pt-20 lg:py-28">
        {/* <main className="w-64 flex justify-center items-center relative py-48 lg:py-60">
          <div style={{ zIndex: "100" }} className="w-80 lg:w-96 absolute">
            <div className="w-full h-full">
              <Image src={MintBox} alt="" />
            </div>
          </div>
          <div className="w-full h-full text-white flex flex-col items-center justify-center absolute">
            <div style={{ zIndex: "1000" }} className="w-40 lg:w-48">
              <Image src={RedGlove} alt="" />
            </div>
            <div
              style={{
                zIndex: "1000",
              }}
              className="text-[2.5rem] text-white font-bold"
            >
              Bankless NFT
            </div>
            <div
              style={{
                zIndex: "1000",
              }}
              className="text-base text-white font-medium"
            >
              Open to Bankless Lvl1
            </div>
            <a
              style={{
                zIndex: "1000",
              }}
              rel="noreferrer noopener"
              target="_blank"
              href="https://red.fightclub.vc/"
              className="inline-block bg-gradient-to-r from-[#FF1013] to-[#8D292D] text-white p-3.5 px-8 rounded-full text-base font-medium my-4 cursor-pointer"
            >
              Mint
            </a>
          </div>
        </main> */}
        <main className="w-60 flex justify-center items-center relative py-60">
          <div style={{ zIndex: "100" }} className="w-80 lg:w-96 absolute">
            <div className="w-full h-full">
              <Image src={MintBox} alt="" />
            </div>
          </div>
          <div className="w-full h-full text-white flex flex-col items-center justify-center absolute">
            <div style={{ zIndex: "1000" }} className="w-40 lg:w-48">
              <Image src={BlackGlove} alt="" />
            </div>
            <div
              style={{
                zIndex: "1000",
              }}
              className="text-[2.5rem] text-white font-bold"
            >
              Public NFT
            </div>
            <div
              style={{
                zIndex: "1000",
              }}
              className="text-base text-white font-medium"
            >
              Open to public Mint
            </div>
            <a
              style={{
                zIndex: "1000",
              }}
              rel="noreferrer noopener"
              target="_blank"
              href="https://black.fightclub.vc/"
              className="inline-block bg-gradient-to-r from-[#FF1013] to-[#8D292D] text-white p-3.5 px-8 rounded-full text-base font-medium my-4"
            >
              Mint
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

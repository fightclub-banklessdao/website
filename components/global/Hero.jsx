import React from "react";
import Image from "next/image";
import RedGlove from "../../assets/images/red-glove.png";
import Access from "../../assets/images/hero/access.png";
import Investments from "../../assets/images/hero/investments.png";
import Engage from "../../assets/images/hero/engage.png";
import Community from "../../assets/images/hero/community.png";
import Logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 lg:py-14">
        <div className="w-40 lg:w-60">
          <Image src={Logo} alt="" />
        </div>
        <div className="text-white text-3xl xl:text-[3.5rem] font-bold text-center leading-10 lg:leading-none mt-4 lg:mt-8">
          Democratizing Crypto Investing
        </div>
        <p className="text-white font-normal text-2xl text-center max-w-[62rem] hidden lg:block">
          Fight Club is a decentralized venture capital platform that provides
          apprenticeship programs, on-chain credentials, and curated deal flow
          to our community of founders, angel investors, and venture capital
          veterans in order to break down barriers to traditional investing.
        </p>
        <p className="text-white font-normal text-lg text-center leading-8 max-w-[20rem] lg:hidden">
          Fight Club is a decentralized venture capital platform that provides
          apprenticeship programs, on-chain credentials, and curated deal flow
          to our community of founders, angel investors, and venture capital
          veterans in order to break down barriers to traditional investing.
        </p>
        <div className="w-80 lg:w-[40rem] linear-gradient-line h-0.5 my-20 lg:my-28"></div>
        <div className="text-white text-3xl lg:text-[3.5rem] font-bold text-center mb-6 lg:mb-10">
          JOIN US
        </div>
        <p className="text-white font-medium text-lg text-center lg:hidden">
          Fight Club NFT ownership <br /> grants access to:{" "}
        </p>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex items-center">
            <div className="w-16">
              <Image src={Access} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-bold">Education</h1>
              <p className="text-lg text-white font-normal">
                Gated education materials and programs.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16">
              <Image src={Investments} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-bold">Investments</h1>
              <p className="text-lg text-white font-normal">
                Venture DAO investment opportunities
                <span className="hidden lg:block">
                  (depending on eligibility).
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16">
              <Image src={Community} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-bold">Community</h1>
              <p className="text-lg text-white font-normal">
                Fight Club investor community and events.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16">
              <Image src={Engage} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-white font-bold">Engage</h1>
              <p className="text-lg text-white font-normal">
                Engage in community <br className="lg:hidden" /> governance and
                treasury
                <br className="lg:hidden" /> decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";
import Dao from "../../assets/images/dao.png";
import Medium from "../../assets/images/footer/medium.png";
import Mirror from "../../assets/images/footer/mirror.png";
import Union from "../../assets/images/footer/union.png";
import Twitter from "../../assets/images/footer/twitter.png";
import Discord from "../../assets/images/footer/discord.png";
import Notion from "../../assets/images/footer/notion.png";
import UnknownVector from "../../assets/images/footer/unknown-vector.png";
import EtherScan from "../../assets/images/footer/etherscan.png";
import Instagram from "../../assets/images/footer/instagram.png";
import FooterUnknown from "../../assets/images/footer/footer-unknown.png";
import ThreeD from "../../assets/images/3dcoin.png";
import FtwDao from "../../assets/images/ftwdao.png";
import CoinoCracy from "../../assets/images/coinocracy.png";
import Polygon from "../../assets/images/polygon.png";
import RedGlove from "../../assets/images/red-glove.png";
import Genesis from "../../assets/images/genesis.png";
import Education from "../../assets/images/education.png";
import Vector from "../../assets/images/vector.png";
import Dework from "../../assets/images/dework.png";

const footer = [
  { image: Medium, href: "https://medium.com/@fightclub_banklessdao" },
  { image: Mirror, href: "https://mirror.fightclub.io" },
  { image: Union, href: "https://union.fightclub.io" },
  {
    image: Twitter,
    href: "https://twitter.com/intent/follow?screen_name=fight_club_vc",
  },
  { image: Discord, href: "https://discord.gg/fX7TFZpvM6" },
  {
    image: Notion,
    href: "https://www.notion.so/bankless/Fight-Club-48c698b2402f44c8a6b6c4d955133f2a",
  },
  { image: UnknownVector, href: "" },
  { image: EtherScan, href: "" },
  { image: Instagram, href: "" },
  { image: FooterUnknown, href: "" },
];

export default function Footer() {
  return (
    <>
      <div className="venture-gradient">
        <div className="w-full flex justify-center py-10 lg:py-24">
          <div className="w-max flex flex-col lg:flex-row gap-6">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://fightclub-landing.on.fleek.co"
            >
              <div className="flex flex-col rounded-t-[1.8rem] rounded-b-[2.2rem] border-4 border-white">
                <div className="w-80 inline-flex rounded-t-[1.7rem]">
                  <Image className="rounded-t-3xl" src={Genesis} alt="" />
                </div>
                <div className="w-80 flex flex-col gap-2 bg-[#2c2c2c] p-6 rounded-b-[2rem]">
                  <div className="text-white text-2xl font-bold">
                    GENESIS FUND
                  </div>
                  <div className="text-[#cacaca] max-w-[15rem] text-md">
                    An accredited investor fund that focuses on pre-seed and
                    early-stage investments in Web3 projects.
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="text-white underline underline-offset-1">
                      View more
                    </div>
                    <div className="w-2">
                      <Image src={Vector} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://app.clarity.so/fightclubvc/pages/e45e107c-2229-4b41-93da-1eec2e2157ca"
            >
              <div className="flex flex-col rounded-t-[2rem] rounded-b-[2.2rem] border-4 border-white">
                <div className="w-80 h-[15.8rem] inline-flex rounded-t-[1.7rem] overflow-hidden">
                  <Image className="rounded-t-3xl" src={Education} alt="" />
                </div>
                <div className="w-80 flex flex-col gap-2 bg-[#2c2c2c] p-6 rounded-b-[2rem]">
                  <div className="text-white text-2xl font-bold">
                    EDUCATION PROGRAM
                  </div>
                  <div className="text-[#cacaca] max-w-[15rem] text-md">
                    The crypto venture analyst program creates a specialized
                    talent pool of educated members and investors.
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="text-white underline underline-offset-1">
                      View more
                    </div>
                    <div className="w-2">
                      <Image src={Vector} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-80 lg:w-[50rem] linear-gradient-line h-0.5 my-14 lg:my-20"></div>
          <div className="text-white text-[2.5rem] font-bold text-center">
            PARTNERS, PLATFORM, BLOCKCHAIN
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-x-16 mt-12">
          <div className="flex items-center gap-x-8 lg:gap-x-0">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.bankless.community"
              className="w-20 lg:w-40 cursor-pointer"
            >
              <Image src={ThreeD} alt="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.forthewin.ventures"
              className="w-20 lg:w-40 cursor-pointer"
            >
              <Image src={FtwDao} alt="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.coinocracy.finance"
              className="w-20 lg:w-40 cursor-pointer"
            >
              <Image src={CoinoCracy} alt="" />
            </a>
          </div>
          <div className="flex items-center gap-x-8 lg:gap-x-12 lg:-ml-8">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://polygon.technology"
              className="w-20 lg:w-40 cursor-pointer"
            >
              <Image src={Polygon} alt="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://dework.xyz/"
              className="w-24 lg:w-44 cursor-pointer"
            >
              <Image src={Dework} alt="" />
            </a>
          </div>
        </div>
        <footer className="w-full bg-black">
          <div className="w-full flex justify-between items-center py-10 px-2 lg:px-16">
            <div className="flex items-center">
              <div className="w-10">
                <Image src={RedGlove} alt="" />
              </div>
              <h1 className="font-bold text-white text-2xl">Fight Club</h1>
            </div>
            <h1 className="text-base font-normal text-[#cacaca]">
              © Fight Club. 2023
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3 lg:gap-10 pb-10">
            {footer.map((social, key) => {
              return (
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={social.href}
                  key={key}
                  className="w-5 lg:w-12 cursor-pointer"
                >
                  <Image key={key} src={social.image} alt="" />
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </>
  );
}

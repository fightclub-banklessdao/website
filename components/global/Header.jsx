import React from "react";
import RedGlove from "../../assets/images/red-glove.png";
import Discord from "../../assets/images/footer/discord.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="angled-gradient">
      <div className="w-full h-[4.5rem] bg-black flex lg:items-center lg:justify-between lg:px-10">
        <div className="hidden lg:flex items-center gap-x-1">
          <div className="w-8">
            <Image src={RedGlove} alt="" />
          </div>
          <h1 className="font-bold text-white text-2xl">Fight Club</h1>
        </div>
        <div className="gap-20 hidden lg:flex">
          <div className="flex items-center gap-14 text-white text-xl font-medium">
            <a
              href="#venture"
              className="cursor-pointer"
            >
              ABOUT US
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://fightclub-landing.on.fleek.co"
              className="cursor-pointer"
            >
              GENESIS FUND
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://app.clarity.so/fightclubvc/pages/e45e107c-2229-4b41-93da-1eec2e2157ca"
              className="cursor-pointer"
            >
              EDUCATION
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://discord.gg/fX7TFZpvM6"
              className="inline-block bg-gradient-to-r from-[#FF1013] to-[#8D292D] text-white p-3.5 rounded-full text-base font-medium cursor-pointer"
            >
              Join us on Discord
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-6 lg:hidden">
          <div className="invisible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.75 12H20.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.75 6H20.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.75 18H20.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8">
              <Image src={Discord} alt="" />
            </div>
            <h1 className="text-white font-semibold text-xs">JOIN</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

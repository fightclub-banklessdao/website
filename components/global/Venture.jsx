import React from "react";

export default function Venture() {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col items-center">
          <div
            id="venture"
            className="w-80 lg:w-[50rem] linear-gradient-line h-0.5 my-8 lg:my-10"
          ></div>
          <div className="text-white text-3xl lg:text-[3.5rem] font-bold text-center mt-8 lg:mt-20">
            WHO WE ARE
          </div>
          <p className="text-white font-normal text-lg lg:text-2xl text-center max-w-[20rem] lg:max-w-[50rem] py-10">
            Fight Club is a community of crypto-savvy investors, developers,
            designers, lawyers, and professionals that are committed to
            accelerating the adoption of web3 and blockchain technologies.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-5 lg:my-20">
            <button className="inline-block bg-gradient-to-r from-[#FF1013] to-[#8D292D] text-white p-3.5 px-6 rounded-full text-base font-medium">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://app.clarity.so/fightclubvc/pages/a9cdb25f-f23c-45db-aa88-8547a51b3d10"
              >
                Fight Club FAQ
              </a>
            </button>
            <button className="inline-block bg-gradient-to-r from-[#FF1013] to-[#8D292D] text-white p-3.5 px-6 rounded-full text-base font-medium">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://app.clarity.so/fightclubvc/pages/39d8d6f4-70ce-4637-a9f5-b80ac9b684f1"
              >
                Genesis Fund FAQ
              </a>
            </button>
            <button className="inline-block bg-gradient-to-r from-[#FF1013] to-[#8D292D] text-white p-3.5 px-6 rounded-full text-base font-medium">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://app.clarity.so/fightclubvc/pages/9c948fd4-27c6-4390-982f-991ea5877552"
              >
                Education FAQ
              </a>
            </button>
          </div>
          <div className="text-white text-[2.5rem] font-bold text-center py-10">
            Not Just Venture Investing
          </div>
          <p className="text-white font-normal text-lg lg:text-2xl text-center max-w-[20rem] lg:max-w-[52rem] pb-10">
            Fight Club consists of Venture DAOs: pooling community expertise to
            create investment opportunities; and an Education Program: building
            a path to become a crypto venture analyst.
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Header from "../components/Header";

const page = () => {
  return (
    <section>
      <Header />

      <div className="items-center justify-center  mx-autow-full mt-[135px]">
        <div className="w-[90%] flex flex-col space-y-[12px] h-[136px] border border-[#E0E0E0] p-[20px] rounded-[8px]">
          <span>Total Balance</span>
          <span>TLC-200</span>
          <span>200</span>
        </div>
        <form action="" className="mt-[24px]">
          <div className=" flex flex-col">
            <label htmlFor="">Enter Player Wallet Address</label>
            <input
              type="text"
              placeholder="2be112rs455sfrsvv2mnfh"
              className="bg-slate-600 h-[48px] w-[90%] px-[20px] border border-[#E0E0E0] rounded-[8px] placeholder:text-[#9CA3AF]"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;

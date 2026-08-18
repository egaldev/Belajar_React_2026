import React from "react";

const CardSayHello = () => {
  return (
    <>
      <div className="max-w-md w-full bg-slate-600 rounded-md mt-10 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white text-center text-lg font-semibold p-2">
            Hallo nama saya Egal Assegaf, saya seorang Full Stack Web Developer
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-md text-sm transition shadow-lg shadow-indigo-600/20 active:scale-[0.98] p-2 m-2 ">
            Hubungi Developer
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSayHello;

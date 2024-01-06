"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";

export const CalculatePriceForm = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [dikte, setDikte] = useState<number>();
  const [prijs, setPrijs] = useState<number>();

  useEffect(() => {
    if (width && height && dikte) {
      setPrijs(width * height * dikte);
    }
  }, [width, height, dikte]);

  return (
    <div className="flex justify-between p-4 mt-5 relative bg-slate-100 lg:bg-white">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold text-center lg:absolute z-10 lg:bg-white lg:my-6 p-4 pl-0">
          Voer afmetingen in en Bereken de prijs van uw glas
        </h1>
        <div className="lg:mt-28 lg:pl-6 flex flex-col gap-4">
          <div className="flex gap-8 lg:gap-16 justify-center">
            <div className="flex flex-col justify-center mb-3">
              <label className="text-md lg:text-2xl font-bold text-center">
                Breedte
              </label>
              <input
                type="number"
                className="border-2 border-gray-300 p-2 rounded-lg w-20 lg:w-44"
                placeholder="mm"
                value={width}
                onChange={(e) => setWidth(e.target.value as unknown as number)}
              />
            </div>
            <div className="flex flex-col justify-center mb-3">
              <label className="text-md lg:text-2xl font-bold text-center">
                Hoogte
              </label>
              <input
                type="number"
                className="border-2 border-gray-300 p-2 rounded-lg w-20 lg:w-44"
                placeholder="mm"
                value={height}
                onChange={(e) => setHeight(e.target.value as unknown as number)}
              />
            </div>
            <div className="flex flex-col justify-center mb-3">
              <label className="text-md lg:text-2xl font-bold text-center">
                Dikte
              </label>
              <input
                type="number"
                className="border-2 border-gray-300 p-2 rounded-lg w-20 lg:w-44"
                placeholder="mm"
                value={dikte}
                onChange={(e) => setDikte(e.target.value as unknown as number)}
              />
            </div>
          </div>
          <div className="flex lg:flex-col gap-4 lg:gap-2 justify-center items-center">
            <div className="flex lg:flex-col gap-1 items-center justify-center">
              <h1 className="text-xl lg:text-2xl font-bold text-center tracking-wider">
                PRIJS: {!prijs && `€ ...`}
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold text-center text-orange-500">
                {prijs && `€ ${prijs.toFixed(2)}`}
              </h2>
            </div>
            {prijs && (
              <button className="bg-orange-500 text-white hover:scale-105 duration-200  px-2 lg:px-5 py-2 text-md lg:text-xl rounded-lg  w-40 lg:m-auto ">
                Bestellen nu
              </button>
            )}
          </div>
        </div>
      </div>
      <Image
        className="hidden lg:block relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/glass.png"
        alt="Next.js Logo"
        width={550}
        height={300}
        priority
      />
    </div>
  );
};

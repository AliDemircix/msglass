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
    <div className="flex justify-between p-1 mt-5 relative">
      <div>
        <h1 className="text-4xl font-bold text-center absolute z-10 bg-white my-8 p-4 pl-0">
          Wat je nodig hebt: Voer afmetingen in en Bereken de prijs van uw glas
        </h1>
        <div className="flex mt-28 gap-32">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <label className="text-2xl font-bold">Breedte</label>
              <input
                type="number"
                className="border-2 border-gray-300 p-2 rounded-lg w-56 m-2"
                placeholder="Breedte"
                value={width}
                onChange={(e) => setWidth(e.target.value as unknown as number)}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="text-2xl font-bold">Hoogte</label>
              <input
                type="number"
                className="border-2 border-gray-300 p-2 rounded-lg w-56 m-2"
                placeholder="Hoogte"
                value={height}
                onChange={(e) => setHeight(e.target.value as unknown as number)}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="text-2xl font-bold">Dikte</label>
              <input
                type="number"
                className="border-2 border-gray-300 p-2 rounded-lg w-56 m-2"
                placeholder="Dikte"
                value={dikte}
                onChange={(e) => setDikte(e.target.value as unknown as number)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-12">
              <h1 className="text-4xl font-bold text-center">Prijs:</h1>
              <h2 className="text-3xl font-bold text-center  ">
                {prijs && `€ ${prijs.toFixed(2)}`}
              </h2>
            </div>
            {prijs && (
              <button className="bg-orange-500 text-white hover:scale-105 duration-200  px-5 py-2 text-2xl rounded-lg mt-10">
                Bestellen Nu
              </button>
            )}
          </div>
        </div>
      </div>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/glass.png"
        alt="Next.js Logo"
        width={700}
        height={300}
        priority
      />
    </div>
  );
};
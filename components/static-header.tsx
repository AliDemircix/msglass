"use client";
import Image from "next/image";
import { useScrollPosition } from "../hooks/useScrollPosition";

const StaticHeader = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      {scrollPosition === 0 && (
        <div className="flex justify-between ">
          <div className="flex items-center justify-center gap-6">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/beste-prijs.png"
              alt="Next.js Logo"
              width={45}
              height={45}
              priority
            />

            <p className="text-sm uppercase font-bold">BESTE PRIJS</p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
              src="/superior-coating.png"
              alt="Next.js Logo"
              width={45}
              height={45}
              priority
            />

            <p className="text-sm font-bold">SUPERIOR COATING</p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
              src="/snelle-levering.svg"
              alt="Next.js Logo"
              width={45}
              height={45}
              priority
            />

            <p className="text-sm font-bold">SNELLE LEVERING</p>
          </div>
          <div className="flex items-center justify-center  gap-6">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
              src="/365-dagen-bereikbaar.png"
              alt="Next.js Logo"
              width={45}
              height={45}
              priority
            />
            <div>
              <p className="text-sm font-bold">365 DAGEN PER JAAR</p>
              <p className="text-sm font-bold">OPEN & BEREIKBAAR</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaticHeader;

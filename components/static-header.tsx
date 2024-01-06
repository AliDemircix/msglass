"use client";
import Image from "next/image";

const StaticHeader = () => {
  return (
    <>
      <div className="hidden lg:flex justify-between ">
        <div className="flex items-center justify-center gap-6">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/beste-prijs.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />

          <p className="text-xs uppercase font-bold tracking-wider">
            BESTE PRIJS
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
            src="/superior-coating.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />

          <p className="text-xs font-bold tracking-wider">SUPERIOR COATING</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
            src="/snelle-levering.svg"
            alt="Next.js Logo"
            width={40}
            height={40}
            priority
          />

          <p className="text-xs font-bold tracking-wider">SNELLE LEVERING</p>
        </div>
        <div className="flex items-center justify-center  gap-6">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
            src="/365-dagen-bereikbaar.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />
          <div>
            <p className="text-xs font-bold tracking-wider">
              365 DAGEN PER JAAR
            </p>
            <p className="text-xs font-bold tracking-wide">OPEN & BEREIKBAAR</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticHeader;

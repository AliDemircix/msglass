'use client';
import Image from 'next/image';

const Hero1 = () => {
  return (
    <div className="hero relative w-full">
      <Image
        src="/hero1.png"
        alt="Hero 1"
        layout="responsive"
        width={100}
        height={100}
      ></Image>
      <div className="text-white text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold uppercase">
        Some Text Here
      </div>
    </div>
  );
};
export default Hero1;

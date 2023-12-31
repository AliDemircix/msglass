"use client";
import React from "react";
import Image from "next/image";

interface ImageItemProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt, onClick }) => {
  return (
    <div className="relative cursor-pointer h-60" onClick={onClick}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      {/* Adjust width and height accordingly */}
    </div>
  );
};

export default ImageItem;

'use client';
import React, { useState } from 'react';
import images from '../../public/imageList.json';
import { Image } from '../../types/imageList';
import ImageCarousel from './ImageCarousel';
import ImageItem from './ImageItem';

const ImageList: React.FC = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<Image>();

  const openCarousel = (initialImage: Image) => {
    setCurrentImage(initialImage);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    console.log('helloooo');
    setIsCarouselOpen(false);
  };

  return (
    <div className="py-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ImageItem
          key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => openCarousel(image)}
        />
      ))}
      {isCarouselOpen && (
        <ImageCarousel
          images={images}
          currentImage={currentImage as Image}
          onClose={closeCarousel}
        />
      )}
    </div>
  );
};

export default ImageList;

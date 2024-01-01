"use client";
import React from "react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { ImageCarouselProps } from "../../types/imageList";

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  currentImage,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((image) => image.src === currentImage.src)
  );

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleClose = () => {
    onClose();
    setCurrentIndex(0);
  };

  return (
    <Transition.Root show={true} as={React.Fragment}>
      <Dialog onClose={handleClose}>
        <Transition.Child
          as={React.Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        </Transition.Child>

        <Transition.Child
          as={React.Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 z-40 overflow-hidden flex items-center justify-center">
            <button
              className="absolute top-4 right-4 p-2 text-white cursor-pointer z-50"
              onClick={handleClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white cursor-pointer z-50"
              onClick={prevImage}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white cursor-pointer z-50"
              onClick={nextImage}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <Dialog.Title className="sr-only">Image Viewer</Dialog.Title>
            <div className="relative w-full h-5/6">
              <Image
                src={images[currentIndex].src}
                alt={currentImage.alt}
                layout="fill"
                objectFit="contain"
                onClick={nextImage}
              />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default ImageCarousel;

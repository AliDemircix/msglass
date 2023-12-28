'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      label: 'home',
      link: 'home',
    },
    {
      id: 2,
      label: 'order online',
      link: 'order',
    },
    {
      id: 3,
      label: 'find out price now',
      link: 'findout',
    },
    {
      id: 4,
      label: 'Our Story',
      link: 'story',
    },
    {
      id: 5,
      label: 'contact',
      link: 'contact',
    },
  ];

  return (
    <div className="flex justify-between items-center my-4 w-full nav">
      <div className="flex items-center">
        <h1 className="text-5xl font-signature ml-2">MST</h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-orange-500 duration-200 link-underline"
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" ">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize text-sm">
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-1">
        <LuShoppingCart size={25} />
        <p className="text-sm font-bold ">Winkelwagen</p>
      </div>
    </div>
  );
};

export default Navbar;

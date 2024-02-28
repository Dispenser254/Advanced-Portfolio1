// import React from 'react'
import hero from '../assets/images/hero.png';
import { Button } from "flowbite-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeroPage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full objects-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!!
              <br />
            </span>
            My name is <span>Stephen Kibe</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <Button className="my-4">Contact me</Button>
          <div className="mt-5 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <a href="#">
                <FaFacebook />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <a href="#">
                <FaGithub />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <a href="#">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage
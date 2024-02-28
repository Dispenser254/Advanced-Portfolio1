// import React from 'react'
import { Button } from 'flowbite-react'
import hireMe from '../assets/images/hireMe.png'

const HiremePage = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
            sapiente tenetur quo, cum ad ut ratione modi laborum mollitia
            blanditiis labore dignissimos voluptas sint officiis eaque quas
            accusamus ab optio?
          </p>
          <div className="flex items-center justify-center mt-4">
            <Button
              className="mt-4 px-4 rounded-xl"
              color="blue"
            >
              Say hello
            </Button>
          </div>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 object-cover -right-3"
        />
      </div>
    </section>
  );
}

export default HiremePage
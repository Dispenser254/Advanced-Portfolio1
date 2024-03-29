// import React from 'react'

import { Button } from "flowbite-react";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md"

const ContactPage = () => {
  const contact_info = [
    { logo: <MdEmail color="indigo" />, text: "frodenZlabs@gmail.com" },
    { logo: <MdWhatsapp color="lime" />, text: "(+254) 111 927 170" },
    {
      logo: <MdLocationOn />,
      text: "Nairobi, Kenya",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-8 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-700 outline-none rounded-lg p-3"
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              className="bg-gray-700 outline-none rounded-lg p-3"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-700 outline-none rounded-lg p-3"
              rows={10}
            ></textarea>
            <Button>Send Message</Button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, index) => (
              <div
                key={index}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-800 rounded-full">
                  {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage
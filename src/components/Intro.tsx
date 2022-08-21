import { FC } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro: FC = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

     
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }} className="text-7xl font-mono text-center  "> {`Hi!!👋 I'm Anjuman Raj`} 
      </m.p>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-xl w-8/12 text-center z-[1] overflow-hidden"
      >
        {`Beyond Ethereum and Hyperledger. Blockchain expert, Web Developer with a passion for ideation, design, and creation of innovative products. I love to create, to learn new stuff and to share it.`}
      </m.p>
 
      <div className="flex flex-wrap">
      <m.a href="#who" className="text-[#FC6459] hover:text-dark border border-[#FC6459] hover:bg-[#FC6459] cursor-pointer font-medium rounded-lg text-lg px-5 py-2 text-center mr-2 mb-2  z-50 transition-all duration-150 ease-linear hover:scale-105  ">Résumé</m.a>
      <m.a href="https://www.linkedin.com/in/anjuman-raj-ba390b1b5/" className="text-[#0077B5] hover:text-dark border border-[#0077B5] hover:bg-[#0077B5] cursor-pointer font-medium rounded-lg text-lg  px-5 py-2 text-center mr-2 mb-2  z-50 transition-all duration-150 ease-linear hover:scale-105  ">LinkedIn</m.a>
      <m.a href="Github.com/ayusmann" className="text-[#ffffff] hover:text-dark border border-[#fff] hover:bg-white hover:border-none cursor-pointer font-medium rounded-lg text-lg px-5 py-2 text-center mr-2 mb-2  z-50 transition-all duration-150 ease-linear hover:scale-105 ">Github</m.a>
      </div>



      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;

import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { allDataType } from "../shared/types";

interface MainProjectsProps {
  projects: allDataType["projects"];
}

const MainProjects: FC<MainProjectsProps> = () => {

  const projectList = [
    {
      title: "Portfolio",
      image: "/projects/portfolio.png",
      desc: "",
      website: "https://anjuman.vercel.app/",
      github: "https://github.com/ayusmann/portfolio-2.0",
      tech: ["/skills/next.png", "/skills/ts.png", "/skills/tailwind.png","/skills/framer.png"],
    },
    {
      title: "Incridea'22 official website",
      image: "/projects/incridea.png",
      desc: "lorem ipsum dolor sit amet",
      website: "https://incridea.in/",
      github: "https://github.com/BharathMKulkarni/Incridea22",
      tech: ["/skills/react.png", "/skills/tailwind.png", "/skills/firebase.png", "/skills/node.png","/skills/razorpay.png"],
    },
    {
      title: "Finite Loop official website",
      image: "/projects/finiteloop.png",
      desc: "lorem ipsum dolor sit amet",
      website: "finiteLoop.co.in",
      github: "",
      tech: ["/skills/react.png", "/skills/firebase.png", "/skills/tailwind.png"],
    },
    {
      title: "Maa Tara Computers official website",
      image: "/projects/mtc.png",
      desc: "lorem ipsum dolor sit amet",
      website: "https://maataracomputers.co.in/",
      github: "https://github.com/ayusmann/mtc",
      tech: ["/skills/react.png", "/skills/tailwind.png", "/skills/firebase.png", "/skills/node.png","/skills/razorpay.png"],
    },

  ]

  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Projects</h1>
      {projectList.map((project, index) => (
        <div
          key={index}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full rounded-[12px]"
                  src={project.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <p className="text-[20px] text-justify my-3">
              {/* {project.desc} */}
            </p>

            <div className="flex gap-[5px]">
              {project.tech.map((tech) => (
                <img
                  key={tech}
                  className="w-[30px] h-[30px]"
                  src={tech}
                  alt=""
                />
              ))}
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              >
                <BiLinkExternal size={25} />
                <span> Live Demo</span>
              </a>
              {project.github &&  <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]"
              >
                <FaGithub className="inline" size={25} />
                <span> View Github</span>
                
              </a>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainProjects;

import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = () => {

  const skillsList = [
    {
      title: "React",
      image: "/skills/react.png",
      link: "https://reactjs.org/",
    },
    {
      title: "Next.js",
      image: "/skills/next.png",
      link: "https://nextjs.org/",
    },
    {
      title: "Node.js",
      image: "/skills/node.png",
      link: "https://nodejs.org/en/",
    },
    {
      title: "HTML",
      image: "/skills/html.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS",
      image: "/skills/css.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "Javascript",
      image: "/skills/js.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "Firebase",
      image: "/skills/firebase.png",
      link: "https://firebase.google.com/",
    },
    {
      title: "MongoDB",
      image: "/skills/mongodb.png",
      link: "https://www.mongodb.com/",
    },
    {
      title: "Tailwind CSS",
      image: "/skills/tailwind.png",
      link: "https://tailwindcss.com/",
    },
    {
      title: "Bootstrap",
      image: "/skills/bootstrap.png",
      link: "https://getbootstrap.com/",
    },
    {
      title: "TypeScript",
      image: "/skills/ts.png",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "GraphQL",
      image: "/skills/graphql.png",
      link: "https://graphql.org/",
    },
    
  ]

  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use to make my product everyday
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
        {skillsList.map((skill) => (
          <a
            key={skill.link}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;

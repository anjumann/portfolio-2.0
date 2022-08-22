import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/sky.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200 text-justify " id="story">
          My name is Anjuman Raj. I&apos;m a
          {false ? ` ${new Date().getFullYear() - 2020} years old` : ""}{" "}
          3rd year undergrad exploring and learning new Technologies everyday.I have developed some of web app for my College and freelance clients. I have expertise in the use of ReactJs and NextJs with a robust understanding of technologies. Used some of UI libraries like Material UI, Chakra UI, Bootstrap I also have a great command of technical languages like Java, C++, Python, JavaScript, I also like{" "}, listening to music and reading Books
        </p>
      </div>
    </div>
  );
};

export default Who;

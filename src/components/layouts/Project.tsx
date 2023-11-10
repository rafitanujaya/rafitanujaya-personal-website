import Image from "next/image";
import { SiGithub } from "react-icons/si";

const ProjectLayout = () => {
  return (
    <section id="projects" className="bg-gray-100 pt-16 pb-24">
      <h2 data-aos="zoom-in-up" className="leading-tight text-4xl font-medium tracking-tighter text-center">
        Projects
      </h2>
      <h3 data-aos="zoom-in-up" className="text-gray-500 font-medium text-base text-center mb-10">
        Explore how I consistently delivered maximum results in my previous
        projects.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 md:mx-10 lg:mx-20">
        <div data-aos="zoom-in" className="bg-gray-300 rounded-lg w-full md:max-w-[30rem] lg:max-w-[26rem] p-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 my-2">
              Cooming soon
            </h3>
            <Image
              className="w-full object-cover rounded-sm"
              alt="projectOne"
              src="/project.png"
              width={250}
              height={100}
            />
          </div>
          <div className="my-2 h-40 max-h-40 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              numquam iusto totam, repellat eligendi commodi aut, ex sequi
              veniam consequuntur necessitatibus mollitia sint molestiae nulla
              excepturi provident repudiandae hic labore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum animi provident quidem
              beatae amet tempore odit consequatur deserunt facere nostrum harum
              corrupti pariatur alias nisi placeat adipisci, est eius commodi!
            </p>
          </div>

          <div className="mt-5 font-mono text-base md:text-xs">
              Javascript
          </div>

          <div className="mt-6 flex items-center ">
            <a
              href="#"
              className="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <SiGithub size={20} style={{ marginRight: "5px" }} />
              Github
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Live Demo
            </a>
          </div>
        </div>

        <div data-aos="zoom-in" className="bg-gray-300 rounded-lg w-full md:max-w-[30rem] lg:max-w-[26rem] p-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 my-2">
              Cooming soon
            </h3>
            <Image
              className="w-full object-cover rounded-sm"
              alt="projectOne"
              src="/project.png"
              width={250}
              height={100}
            />
          </div>
          <div className="my-2 h-40 max-h-40 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              numquam iusto totam, repellat eligendi commodi aut, ex sequi
              veniam consequuntur necessitatibus mollitia sint molestiae nulla
              excepturi provident repudiandae hic labore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum animi provident quidem
              beatae amet tempore odit consequatur deserunt facere nostrum harum
              corrupti pariatur alias nisi placeat adipisci, est eius commodi!
            </p>
          </div>

          <div className="mt-5 font-mono text-base md:text-xs">
              Javascript
          </div>
          <div className="mt-6 flex items-center ">
            <a
              href="#"
              className="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <SiGithub size={20} style={{ marginRight: "5px" }} />
              Github
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Live Demo
            </a>
          </div>
        </div>

        <div data-aos="zoom-in" className="bg-gray-300 rounded-lg w-full md:max-w-[30rem] lg:max-w-[26rem] p-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 my-2">
              Cooming soon
            </h3>
            <Image
              className="w-full object-cover rounded-sm"
              alt="projectOne"
              src="/project.png"
              width={250}
              height={100}
            />
          </div>
          <div className="my-2 h-40 max-h-40 overflow-y-scroll">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              numquam iusto totam, repellat eligendi commodi aut, ex sequi
              veniam consequuntur necessitatibus mollitia sint molestiae nulla
              excepturi provident repudiandae hic labore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum animi provident quidem
              beatae amet tempore odit consequatur deserunt facere nostrum harum
              corrupti pariatur alias nisi placeat adipisci, est eius commodi!
            </p>
          </div>

          <div className="mt-5 font-mono text-base md:text-xs">
              Javascript
          </div>

          <div className="mt-6 flex items-center ">
            <a
              href="#"
              className="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <SiGithub size={20} style={{ marginRight: "5px" }} />
              Github
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectLayout;

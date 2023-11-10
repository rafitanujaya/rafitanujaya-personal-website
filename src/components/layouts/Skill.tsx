import { FaNodeJs, FaJs, FaReact, FaNode, FaServer, FaGit, FaAws, } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiDocker, SiExpress } from "react-icons/si";

const SkillLayout = () => {
    
  return (
    <section id="skills" className="bg-gray-100 pt-16">
      <h2 data-aos="zoom-in-up" className="leading-tight text-4xl font-medium tracking-tighter text-center">
        Skills
      </h2>
      <h3 data-aos="zoom-in-up" className="text-gray-500 font-medium text-base text-center mb-10">
        The skills, tools, and technologies I am really good at
      </h3>
      <div className="flex flex-wrap justify-center pb-10">
        {/* Node.js */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><FaNodeJs size={80} color="#8CC84B" /></div>
          <h3>Node.js</h3>
        </div>
        {/* JavaScript */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><FaJs size={80} color="#F7DF1E" /></div>
          <h3>JavaScript</h3>
        </div>
        {/* React.js */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><FaReact size={80} color="#61DAFB" /></div>
          <h3>React.js</h3>
        </div>
        {/* Next.js */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><FaNode size={80} color="#000000" /></div>
          <h3>Next.js</h3>
        </div>
        {/* Express.js */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiExpress size={80} color="#000000" /></div>
          <h3>Express.js</h3>
        </div>
        {/* MongoDB */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiMongodb size={80} color="#47A248" /></div>
          <h3>MongoDB</h3>
        </div>
        {/* PostgreSQL */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiPostgresql size={80} color="#336791" /></div>
          <h3>PostgreSQL</h3>
        </div>
        {/* MySQL */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiMysql size={80} color="#4479A1" /></div>
          <h3>MySQL</h3>
        </div>
        {/* Tailwind CSS */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiTailwindcss size={80} color="#38B2AC" /></div>
          <h3>Tailwind CSS</h3>
        </div>
        {/* Git */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><FaGit size={80} color="#F05032" /></div>
          <h3>Git</h3>
        </div>
        {/* Amazon Web Services (AWS) */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><FaAws size={80} color="#232F3E" /></div>
          <h3>AWS</h3>
        </div>
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiFirebase size={80} color="#FFCA28" /></div>
          <h3>Firebase</h3>
        </div>
        {/* Docker */}
        <div data-aos="zoom-in" className="flex flex-col items-center p-2 m-3">
          <div className="mb-2"><SiDocker size={80} color="#2496ED" /></div>
          <h3>Docker</h3>
        </div>
      </div>
    </section>
  );
};

export default SkillLayout;

import Image from "next/image";

const ExperienceLayout = () => {
  return (
    <section id="experiences" className="bg-gray-100 pt-16 pb-20">
      <h2
        data-aos="zoom-in-up"
        className="leading-tight text-4xl font-medium tracking-tighter text-center"
      >
        Experience
      </h2>
      <h3
        data-aos="zoom-in-up"
        className="text-gray-500 font-medium text-base text-center mb-10"
      >
        Here is a quick summary of my most recent experiences.
      </h3>

      <div className="pb-10">
        <div
          data-aos="zoom-in"
          className="flex flex-col md:flex-row max-w-[23rem] sm:max-w-[38rem] md:max-w-[45rem] lg:max-w-4xl xl:max-w-5xl w-full bg-slate-300 mx-auto p-5 rounded-lg shadow-lg "
        >
          <div className="flex mx-auto my-6 md:my-0 md:mx-0  items-center pr-5 md:max-w-[8.5rem] lg:max-w-none">
            <Image
              alt="goto impact"
              src="/gotoimpact.png"
              width={200}
              height={200}
            />
          </div>
          <div className="max-w-lg sm:max-w-[35rem] md:max-w-lg">
            <div className="flex flex-col sm:items-center md:flex-row justify-between mb-3 md:mb-0">
              <h3 className="font-semibold text-lg mb-1 md:mb-2">
                Fullstack Engineering - Apprenticeship
              </h3>
              <span className="font-light italic lg:hidden">
                Jun 2023 - present
              </span>
            </div>
            <ul className="list-disc ml-4">
              <li>
                Learned Full Stack MERN requirement like JavaScript, HTML, CSS,
                GIT, Express, React JS, Mongo DB, Docker, Git, Microservices
                Architecture, security.
              </li>
              <li>
                Built frontend with React Js Vite, TailwindCss, react-router-dom
                v6, Hooks, Axios, React-icons, components, layout, ES-lint.
              </li>
              <li>
                Created Server REST API with Express for Tokopedia-Play Clone
                and Mongo Db for Database, Cors and then Verify Token and JWT
                implement for Authentication Login and Register feature, error
                handling search ,cookie-parser, bcrypt, socket.io.
              </li>
            </ul>
          </div>
          <div className="mx-auto lg:ml-8 hidden lg:block">
            <h3 className="font-light italic">Jun 2023 - present</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceLayout;

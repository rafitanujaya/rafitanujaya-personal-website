import { FaGlobe, FaLaptopFile } from "react-icons/fa6";

const ServiceLayout = () => {
  return (
    <section id="services" className="bg-gray-100 md:p-5 pt-16 md:pt-16">
      <h2 className="leading-tight text-4xl font-medium tracking-tighter text-center" data-aos="zoom-in-up">
        Services
      </h2>
      <h2 className=" text-gray-500 font-medium text-base text-center" data-aos="zoom-in-up">I possess specialized expertise in this field</h2>
      <div className="flex flex-col md:flex-row md:justify-center my-10">
        <div data-aos="zoom-in" className="mx-auto sm:mx-auto md:mx-2 max-w-[22rem] sm:max-w-[28rem] md:max-w-sm w-full flex flex-col items-center bg-gray-300 px-5 py-10 my-3 rounded-lg shadow-lg">
            <div className="bg-blue-500 p-2.5 rounded-lg text-white w-16 flex items-center my-4 hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-lg"><FaGlobe size={50}/></div>
            <h3 className="mb-3 text-lg font-semibold">Web Development</h3>
            <p className="text-center">Create and maintain your websites and also take of its performance and trafic capacity</p>
        </div>

        <div data-aos="zoom-in" className="mx-auto sm:mx-auto md:mx-2 max-w-[22rem] sm:max-w-[28rem] md:max-w-sm w-full flex flex-col items-center bg-gray-300 px-5 py-10  my-3 rounded-lg shadow-lg">
            <div className="bg-blue-500 p-2.5 rounded-lg text-white w-16 flex items-center my-4 hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-lg"><FaLaptopFile size={50}/></div>
            <h3 className="mb-3 text-lg font-semibold">Application Development</h3>
            <p className="text-center">Create and maintain your websites and also take of its performance and trafic capacity</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceLayout;

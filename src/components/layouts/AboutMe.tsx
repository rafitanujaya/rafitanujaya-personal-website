import Image from "next/image";

const AboutMeLayout = () => {

  return (
    <section id="about" className="lg:h-[40rem] bg-gradient-to-b from-white to-gray-100 pt-16 ">
      <h2 data-aos="zoom-in-up" data-aos-duration="600" className="leading-tight mb-8 text-4xl font-medium tracking-tighter text-center ">
        About Me
      </h2>

      <div  data-aos="zoom-in" className="sm:max-w-sm sm:hidden" data-aos-duration="1000">
          <Image
            src="/rafitanujaya.png"
            width={400}
            height={500}
            alt="rafitanujaya"
            className="mx-auto"
          />
        </div>

      <div className="flex flex-col md:flex-row md:justify-between mx-5 md:mx-16 lg:mx-32 items-center">
        <div>
          <p data-aos="zoom-in" data-aos-duration="1000"  className="max-w-xl text-xl md:text-lg text-justify text-gray-700 mb-2">
          Hello, I{"'"}m Rafi Asshiddiqie Tanujaya, a vocational school graduate and Software Engineer with less than 1 year of experience. My expertise lies in designing efficient systems. I am adaptable to technological developments, love challenges, and enjoy looking for the latest info. With a passion to keep learning, I believe I can make a positive contribution in every project.
          </p> 
          <p data-aos="zoom-in" data-aos-duration="1000"  className="max-w-xl text-xl md:text-lg text-justify text-gray-700 mb-2">
          Passionate about technology, I thrive on tackling new challenges and making a lasting impact. Let{"'"}s collaborate and push boundaries together.
          </p>
        </div>
        <div  data-aos="zoom-in" className="sm:max-w-sm hidden sm:block" data-aos-duration="1000">
          <Image
            src="/rafitanujaya.png"
            width={400}
            height={500}
            alt="rafitanujaya"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeLayout;

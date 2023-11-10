import { FaTelegram, FaTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ContactLayout = () => {
  return (
    <section className="bg-gray-100 pt-16 md:pt-16" id="contact">
      <h2
        data-aos="zoom-in-up"
        className="leading-tight text-4xl font-medium tracking-tighter text-center"
      >
        Contact
      </h2>
      <h3
        data-aos="zoom-in-up"
        className="text-gray-500 font-medium text-base text-center mb-10"
      >
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </h3>
      <div data-aos="zoom-in" className="py-6 max-w-[23rem] sm:max-w-[38rem] md:max-w-[44rem] lg:max-w-4xl xl:max-w-5xl w-full mx-auto bg-slate-300 p-5 rounded-lg shadow-lg">
        <form action="" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
              placeholder="yourname@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your Name
            </label>
            <input
              type="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
              placeholder="yourname"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
              placeholder="Leave a comment..."
              defaultValue={""}
            />
          </div>
          <div className="text-sm text-red-500">
            *Info alert! the form cannot be used yet, if interested, please contact me via email, telegram or twitter below.
          </div>
          <button
            type="submit"
            disabled
            className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-blue-700 lg:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center mt-10 pb-10">
        <div data-aos="zoom-in" className="max-w-sm w-full flex flex-col items-center px-5 py-10 md:m-3 mx-auto">
            <div className="bg-blue-500 p-2.5 rounded-lg text-white w-11 flex items-center my-4 hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-lg"><SiGmail size={25}/></div>
            <h3 className="mb-3 text-lg font-semibold">Email</h3>
            <p className="text-center">Email me for general inquiries, including job opportunities or website development.</p>
            <a href="mailto:rafibussines@gmail.com" className="text-blue-600 font-semibold hover:underline">rafibussines@gmail.com</a>
        </div>

        <div data-aos="zoom-in" className="max-w-sm w-full flex flex-col items-center px-5 py-10  md:m-3 mx-auto ">
            <div className="bg-blue-500 p-2.5 rounded-lg text-white w-11 flex items-center my-4 hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-lg"><FaTelegram size={25}/></div>
            <h3 className="mb-3 text-lg font-semibold">Telegram</h3>
            <p className="text-center">Drop me a line on Telegram for general inquiries, including job opportunities or website development.</p>
            <a href="https://t.me/rafitanujaya" className="text-blue-600 font-semibold hover:underline">rafitanujaya</a>
        </div>

        <div data-aos="zoom-in" className="max-w-sm w-full flex flex-col items-center px-5 py-10  md:m-3 mx-auto ">
            <div className="bg-blue-500 p-2.5 rounded-lg text-white w-11 flex items-center my-4 hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-lg"><FaTwitter size={25}/></div>
            <h3 className="mb-3 text-lg font-semibold">Twitter</h3>
            <p className="text-center">Drop me a twitter chat for general questions, or to share knowledge including job opportunities or website development.</p>
            <a href="https://twitter.com/raf_encoding" className="text-blue-600 font-semibold hover:underline">raf_encoding</a>
        </div>

      </div>
    </section>
  );
};

export default ContactLayout;

import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import Connect from "./Connect";

const About = () => {
  const handleResumeDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/Vivek_Resume.pdf"; // Update resume file path if needed
    anchor.download = "cv.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="w-full bg-backgroundDark-0" id="home">
      <div className="w-[100%] border-red-400 md:w-[90%] lg:w-[80%] m-auto relative pt-20 flex flex-col md:flex-row md:justify-center">
        {/* LeftSide */}
        <div className="w-[100%] md:w-[60%] lg:w-[50%] font-Rubik md:py-20 xl:p-20 flex flex-col items-center md:items-start gap-y-8 py-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            {"Hello, I'm "}
            <TypeAnimation
              sequence={[
                "Vivek", // Updated name
                1000,
                "Raj", // Updated name
                1000,
              ]}
              speed={30}
              style={{
                background: "linear-gradient(to right, #32ff47, #111)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              repeat={Infinity}
              aria-label="Name animation"
            />
          </h1>
          <div className="font-thin text-gray-200 font-montserrat flex flex-col items-center md:items-start gap-y-2 ">
            <h1 className="text-xl md:text-2xl">Making the</h1>
            <h1 className="text-2xl md:text-4xl">
              Impossible <span className="font-bold">Possible.</span>
            </h1>
            <h1 className="text-xl md:text-2xl">Using 1's and 0's.</h1>
          </div>

          {/* Icons */}
          <Connect />

          {/* Button */}
          <div>
            <button
              className="text-white rounded-full px-4 py-3 flex items-center gap-x-4 border border-gray-500 hover:border-gray-200 transition-colors"
              onClick={handleResumeDownload}
              role="button"
              aria-label="Download Resume"
            >
              <span>Download Resume</span>
              <FaDownload />
            </button>
          </div>
        </div>

        {/* RightSide */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-start items-center pt-4">
          <div className="h-32 w-32 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden">
            <img
              src="/profile_photo.jpeg"
              alt="Profile photo of Vivek Raj"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

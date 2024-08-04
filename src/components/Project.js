import { FaGithub, FaLink } from "react-icons/fa";
import SubHeader from "./SubHeader";
import IconCover from "./IconCover";
import ImageSlider from "./ImageSlider";
import ReactPlayer from "react-player";
import NotAvailable from "./NotAvailable";

const Project = () => {

  const project2 = [
    {
      url: "/assets/e-com/ecom_1.png",
    },
    {
      url: "/assets/e-com/ecom_2.png",
    },
    {
      url: "/assets/e-com/ecom_3.png",
    },

  ];


  return (
    <div className="w-full bg-backgroundDark-0" id="projects">
      {/* section */}
      <div className="w-[80%] m-auto py-10">
        {/* Projects header */}
        <SubHeader name="Projects" />
        {/* List */}
        {/* Mini Twitter */}

        {/* Proshop*/}
        <div className="rounded-lg flex flex-col md:flex-row border-2 border-dark2 mt-10 p-4">
          {/* Image and Links */}
          <div className="w-full md:w-1/2 flex flex-col p-2">
            <div className="flex justify-start">
              <h1 className="font-montserrat font-bold text-3xl text-gray-100">
                Proshop: Ecommerce
              </h1>
              <div>
                <div className="flex gap-x-3 ml-6">
                  <IconCover
                    icon={<FaGithub />}
                    link="https://github.com/Vivek9988/e-commerce-in-React"
                  />
                  <IconCover
                    icon={<FaLink />}
                    link="https://example.com/project-link"
                  />
                </div>
              </div>
            </div>
            {/* ImageSlider */}
            <div className="flex justify-center md:justify-start p-2 my-4">
              <ImageSlider images={project2} />
            </div>
            <div>
              <h1 className="text-sm text-gray-300">Technologies used:</h1>
              <div className="flex flex-wrap gap-2 p-2">
                {/* Tech used */}
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  HTML5
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Tailwind
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Javascript
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ReactJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  Redux
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  NodeJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  ExpressJs
                </div>
                <div className="rounded text-gray-400 border border-gray-600 px-1 text-xs">
                  MongoDB
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="w-full md:w-1/2 aspect-video flex justify-center">
            <div className="h-fit rounded-md overflow-hidden border border-dark p-0 ">
              <ReactPlayer
                url="https://res.cloudinary.com/djlcf38cv/video/upload/v1722667059/Screen_Recording_2024-08-03_at_12.02.51_PM_uxjzdv.mov"
                controls={true}
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

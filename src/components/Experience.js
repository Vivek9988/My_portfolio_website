import { IoBriefcaseSharp } from "react-icons/io5";
import SubHeader from "./SubHeader";

const Experience = () => {
    return (
        <div className="w-full bg-backgroundDark-0" id="experience">
            {/* section */}
            <div className="w-[80%] m-auto py-10">
                {/* Experience header */}
                <SubHeader name="Experience" />
                {/* List */}
                <div className="mt-10 flex flex-col gap-y-4 md:flex-row">
                    {/* right */}
                    <div className="w-full flex flex-col md:flex-row gap-4 font-montserrat">
                        {/* Internship at Tech Mountain */}
                        <div className="border-2 border-gray-500 rounded-md flex gap-4 gap-x-6 p-4 w-full md:w-1/2">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/e-com/download.jpg" // Path to your image
                                    alt="Tech Mountain Company"
                                    className="w-24 h-24 object-cover rounded-md" // Adjust size as needed
                                />
                            </div>
                            <div className="w-full text-gray-100 flex flex-col gap-y-3">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-green-500 text-2xl font-bold">
                                        Internship at Tech Mountain
                                    </h1>
                                    <h1 className="text-gray-100 text-sm font-semibold">
                                        Summer 2024
                                    </h1>
                                </div>
                                <div className="text-sm">
                                    <h1 className="text-base">Tech Mountain Company</h1>
                                    <h1>Various Client Projects</h1>
                                </div>
                                <div className="text-sm">
                                    <h1 className="font-semibold">Technologies Used:</h1>
                                    <ul className="list-disc list-inside">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Express</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Internship at Coadig Sopon */}
                        <div className="border-2 border-gray-500 rounded-md flex gap-4 gap-x-6 p-4 w-full md:w-1/2">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/e-com/download2.jpg" // Path to your image
                                    alt="Coadig Sopon"
                                    className="w-24 h-24 object-cover rounded-md" // Adjust size as needed
                                />
                            </div>
                            <div className="w-full text-gray-100 flex flex-col gap-y-3">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-green-500 text-2xl font-bold">
                                        Internship at Coadig Sopon
                                    </h1>
                                    <h1 className="text-gray-100 text-sm font-semibold">
                                        june 2024
                                    </h1>
                                </div>
                                <div className="text-sm">
                                    <h1 className="text-base">Coadig Sopon</h1>
                                    <h1>Worked on MERN Stack Projects</h1>
                                </div>
                                <div className="text-sm">
                                    <h1 className="font-semibold">Technologies Used:</h1>
                                    <ul className="list-disc list-inside">
                                        <li>MongoDB</li>
                                        <li>Express</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

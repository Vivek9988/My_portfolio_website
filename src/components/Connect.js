import IconCover from "./IconCover";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Connect = () => {
  return (
    <div className="flex gap-x-4">
      <IconCover
        icon={<FaGithub className="" />}
        link="https://github.com/Vivek9988"
      />
      <IconCover
        icon={<FaLinkedin className="" />}
        link="https://www.linkedin.com/in/vivek-raj-006611245/"
      />
      <IconCover
        icon={<FaTwitter className="" />}
        link="https://x.com/VIVEKRA44502120"
      />
      <IconCover
        icon={<SiLeetcode className="" />}
        link="https://leetcode.com/u/Vivekrajsingh/"
      />
    </div>
  );
};

export default Connect;

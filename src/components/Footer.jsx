import SocialIcons from "./SocialIcons.jsx";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../public/favicon.png";

function Footer() {
  const socialLinks = [
    { icon: faGithub, url: "https://github.com/Wizzy019" },
    { icon: faXTwitter, url: "https://x.com/wizzy-nw" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/wisdom-ndukwu-36348a3ab",
    },
    { icon: faEnvelope, url: "mailto:kingwizzyndukwu@gmail.com" },
  ];

  return (
    <footer className="border-t border-b  text-white border-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <div className="flex gap-2">
          <img src={Logo} alt="logo" className="size-12" />
          <div className="text-start">
            <p className="font-semibold">Built by Wizzy</p>
            <p className="text-sm ">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>

        <SocialIcons icons={socialLinks} className="text-xl md:text-2xl" />
      </div>
    </footer>
  );
}

export default Footer;

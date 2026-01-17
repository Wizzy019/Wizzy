import SocialIcons from "./SocialIcons.jsx";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
 
function Footer() {
  return (
    <footer className="border-t text-white border-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <div className="text-start">
          <p className="font-semibold">Built by Wizzy</p>
          <p className="text-sm ">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <SocialIcons icons={[faGithub, faXTwitter, faEnvelope]} className="text-lg md:text-2xl" />
      </div>
    </footer>
  );
}


export default Footer

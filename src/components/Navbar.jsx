
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faTools,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Logo from '../../public/favicon.png';

const navItems = [
  { name: "Home", path: "/", icon: faHouse },
  { name: "Skills", path: "/skills", icon: faTools },
  { name: "Projects", path: "/projects", icon: faBriefcase },
  { name: "About", path: "/about", icon: faUser },
  { name: "Contact", path: "/contact", icon: faEnvelope },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src={Logo} className="size-20"/>
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium hover:text-blue-900 transition ${
                    isActive ? "text-blue-900" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>
      {open && (
        <ul className="md:hidden mt-4 flex justify-around border-t border-white/10 pt-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-xl ${
                    isActive ? "text-blue-900" : "text-white"
                  }`
                }
              >
                <FontAwesomeIcon icon={item.icon} />
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
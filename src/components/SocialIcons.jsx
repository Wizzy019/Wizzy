import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcons({ icons, className = "", align = "center" }) {
  return (
    <div
      className={`flex gap-1 text-2xl ${
        align === "left"
          ? "justify-start"
          : align === "right"
          ? "justify-end"
          : "justify-center"
      }`}
    >
      {icons.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-blue-900"
        >
          <FontAwesomeIcon
            icon={icon}
            className={`cursor-pointer ${className}`}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
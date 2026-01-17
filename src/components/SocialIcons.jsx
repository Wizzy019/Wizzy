import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 function SocialIcons({ icons, className="", align = "center" }) {
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
      {icons.map((icon, index) => (
        <FontAwesomeIcon
          key={index}
          icon={icon}
          className={`cursor-pointer transition hover:text-blue-900 ${className}`}
        />
      ))}
    </div>
  );
}

export default SocialIcons

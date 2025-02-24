import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ContactBadgeProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const ContactBadge = ({
  href,
  icon,
  title,
  description,
}: ContactBadgeProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 px-4 py-3 bg-secondary/30 hover:bg-secondary/50 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-accent/50 group"
    >
      <div className="p-2 rounded-lg bg-secondary">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium group-hover:text-accent transition-colors">
          {title}
        </h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors"
      />
    </a>
  );
};

export default ContactBadge;

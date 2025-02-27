import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { cardStyles } from "../styles/common";

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
      rel="noopener"
      className={`flex items-center space-x-3 px-4 py-3 bg-secondary/30 hover:bg-secondary/50 ${cardStyles} group`}
    >
      <div className="p-2 rounded-lg bg-secondary">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium group-hover:text-accent">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="w-5 h-5 text-gray-400 group-hover:text-accent"
      />
    </a>
  );
};

export default ContactBadge;

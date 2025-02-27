import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cardStyles } from "../styles/common";

interface LinkBadgeProps {
  href: string;
  icon: IconDefinition;
  label: string;
}

const LinkBadge = ({ href, icon, label }: LinkBadgeProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 ${cardStyles}`}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};

export default LinkBadge;

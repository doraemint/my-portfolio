import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const socialsList = [
  {
    icon: <FaGithub />,
    path: "https://github.com/doraemint",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/anthika-jirattananon-687b561b2/",
  },
];
const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socialsList.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;

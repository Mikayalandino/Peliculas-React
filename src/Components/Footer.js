import "../Styles/Footer.scss";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Mikayalandino">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/Mikayalandino/">
            <AiFillLinkedin />
          </a>
        </li>

        <li>
          <a href="mailto:Micaelayalandino@gmail.com">
            <AiOutlineMail />
          </a>
        </li>
      </ul>
      <p>
        Hecho con 🐱‍💻 por <a href="https://github.com/Mikayalandino">Mika</a>
      </p>
    </footer>
  );
};

export default Footer;

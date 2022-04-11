import '../Styles/Footer.scss'
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <ul>
                    <li>
                        <a href="https://github.com/Mikayalandino"  target="_blank">
                            <AiFillGithub />
                        </a>
                        
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/Mikayalandino/"  target="_blank">
                        <AiFillLinkedin />
                        </a>
                    </li>

                    <li>
                        <a href="mailto:Micaelayalandino@gmail.com"  target="_blank">
                            <AiOutlineMail />
                        </a>
                    </li>
                </ul>
            </div>
            <p>Hecho con 🐱‍💻 por <a href="https://github.com/Mikayalandino">Mika</a></p>
        </footer>
    )
}

export default Footer;
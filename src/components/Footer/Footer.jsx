import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-content">
      <div className="footer-container">
        <h3 className="footer-title">FİLM.</h3>
        <div className="footer-icons">
          <FaInstagram className="icon" />
          <FaTwitterSquare className="icon" />
          <FaFacebook className="icon" />
        </div>
        <p className="footer-end">Lorem ipsum dolor sit amet || TÜRKİYE</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
          <li>
            <a href="/#" className="hover:text-gray-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/#" className="hover:text-gray-400">
              FAQs
            </a>
          </li>
        </ul>

        {/* Contact Information */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="mb-1">Contact Us:</p>
          <p className="mb-1">Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="/#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
          </a>
          <a href="/#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a href="/#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

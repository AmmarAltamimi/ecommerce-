
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 body-font mt-auto">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 10a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM13 6a1 1 0 100-2 1 1 0 000 2zm-6 8a1 1 0 100-2 1 1 0 000 2zm8-3a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xl">eCommerce System</span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} - All rights reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 mr-4">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/ar_506_/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 mr-4">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/ammar-attamimi-9884512a4/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

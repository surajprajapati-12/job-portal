// components/Footer.jsx
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        
        <div>
          <h1 className="text-2xl font-bold">JobPortal</h1>
          <p className="mt-2 text-sm text-gray-400">
            Empowering job seekers and recruiters with smarter tools.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/jobs" className="hover:text-white">Find Jobs</a></li>
            <li><a href="/companies" className="hover:text-white">Companies</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

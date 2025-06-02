import React from "react";
import { Link } from "react-router-dom";
import { Brain, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">
                <span className="text-blue-400">AI</span>zheimer Care
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Advancing Alzheimer's care through innovative AI technologies and
              cognitive support solutions.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/domain"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Domain
                </Link>
              </li>
              <li>
                <Link
                  to="/milestones"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Milestones
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/presentations"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Presentations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400 text-sm">
                  randiniemail@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400 text-sm">761037727</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by
            AIzheimer Care Team © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

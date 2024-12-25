import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Columns */}
          <div>
            <h5 className="font-semibold mb-4">Solutions</h5>
            <ul>
              <li className="mb-2">Marketing</li>
              <li className="mb-2">Analytics</li>
              <li className="mb-2">Automation</li>
              <li className="mb-2">Commerce</li>
              <li>Insights</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul>
              <li className="mb-2">Submit ticket</li>
              <li className="mb-2">Documentation</li>
              <li>Guides</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul>
              <li className="mb-2">About</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Jobs</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul>
              <li className="mb-2">Terms of service</li>
              <li className="mb-2">Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold mb-4">Subscribe to our newsletter</h5>
              <p className="text-gray-400">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-2 px-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

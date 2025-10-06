import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between bg-gray-900 text-gray-300 px-10 py-12 mt-16">
      {/* Brand Info */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">📚 Book Vibe</h2>
        <p className="text-sm max-w-xs">
          Dive into the world of books. Discover, read, and organize your personal library with Book Vibe.
        </p>
        <p className="mt-2 text-xs text-gray-500">© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
      </div>

      {/* Navigation */}
      <nav>
        <h6 className="footer-title text-white">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Reading List</a>
        <a className="link link-hover">Wishlist</a>
      </nav>

      {/* Contact / Support */}
      <nav>
        <h6 className="footer-title text-white">Support</h6>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

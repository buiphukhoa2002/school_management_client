import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Nguyen Du High School. All rights
          reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <Link to="/" className="text-gray-600 hover:text-sky-600 text-sm">
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-sky-600 text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

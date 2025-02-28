 
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-6 sm:px-9 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-14">
          <div>
            <h3 className="font-semibold mb-3">Our top cities</h3>
            <ul className="text-gray-400 space-y-1">
              <li>San Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 space-y-1 mt-6 md:mt-9">
              <li>Los Angeles</li>
              <li>Washington DC</li>
              <li>Seattle</li>
              <li>Portland</li>
              <li>Nashville</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 space-y-1 mt-6 md:mt-9">
              <li>New York City</li>
              <li>Orange County</li>
              <li>Atlanta</li>
              <li>Charlotte</li>
              <li>Denver</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 space-y-1 mt-6 md:mt-9">
              <li>Chicago</li>
              <li>Phoenix</li>
              <li>Las Vegas</li>
              <li>Sacramento</li>
              <li>Oklahoma City</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-14 text-gray-400">
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-1">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">FOLLOW US</h3>
            <div className="flex space-x-4 text-xl">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
            <p className="mt-10 sm:mt-14 mb-6 sm:mb-14">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Your email"
                className="p-2 bg-gray-800 border rounded-lg border-gray-700 focus:outline-none w-full sm:w-60"
              />
              <button className="bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-black rounded-lg px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-gray-400 text-sm text-center md:text-left flex flex-col md:flex-row md:justify-between items-center">
          <p>
            All rights Reserved ©{" "}
            <span className="font-bold text-white">Your Company, 2021</span>
          </p>
          <p className="flex items-center">
            Made with ❤️ by <span className="ml-1 text-white">Memoona Mobeen</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

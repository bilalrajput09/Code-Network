const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between pt-8">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Code Network</h2>
          <p className="text-sm">123 Coding Lane, Tech City</p>
          <p className="text-sm">Email: ranabilalrajput09@gmail.com</p>
          <p className="text-sm">Phone: +923013926220</p>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <a
                href="#"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-sm hover:text-gray-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex">
            <a
              href="#"
              className="mr-4 text-sm hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="mr-4 text-sm hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for updates.
          </p>
          <form action="#" method="post" className="flex">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="flex-1 p-2 mr-2 rounded-l-sm"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm">
          &copy; 2023 Code Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

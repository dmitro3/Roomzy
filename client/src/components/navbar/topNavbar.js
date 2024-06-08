import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import MapIcon from "../../lib/icons/map-pin-simple-area-bold.svg";

export default function TopNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navbarSize, setNavbarSize] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(() => {
    return localStorage.getItem("activeTab") || "home";
  });
  const location = useLocation(); // Get the current location using useLocation()

  React.useEffect(() => {
    const handleResize = () => {
      setNavbarSize(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="relative px-4 py-4 mx-auto flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="/">
          <div className="flex mt-1">
            <span
              style={{ color: "black" }}
              className="font-extrabold text-3xl text-black text-inherit align-middle"
            >
              Room
              <img src={MapIcon} alt="map" className="inline-block ml-1" />
              zy
            </span>
          </div>
        </a>
        <div className="lg:hidden">
          <button
            onClick={() => setNavbarOpen(true)}
            className="navbar-burger flex items-center text-red-400 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link
              to="/"
              className={`text-sm ${
                activeTab === "home"
                  ? "font-bold text-blue-600"
                  : "text-gray-400"
              } hover:text-gray-500 cursor-pointer`}
              onClick={() => {
                setActiveTab("home");
              }}
            >
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-red-400 font-bold" href="#">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Features
            </a>
          </li>

          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link
              to="/events"
              className={`text-sm ${
                activeTab === "events"
                  ? "font-bold text-blue-600"
                  : "text-gray-400"
              } hover:text-gray-500 cursor-pointer`}
              onClick={() => {
                setActiveTab("events");
              }}
            >
              Events
            </Link>
          </li>
        </ul>
        <Link
          className={` ${
            navbarSize ? "hidden" : "block"
          } lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200`}
          to="/login"
        >
          Sign In
        </Link>

        <Link
          className={` ${
            navbarSize ? "hidden" : "block"
          }   py-2 px-6 bg-red-400 hover:bg-red-400 text-sm text-white font-bold rounded-xl transition duration-200`}
          href="/register-user"
        >
          Sign Up
        </Link>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${navbarOpen ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="#">
              <div className="flex mt-1">
                <span
                  style={{ color: "black" }}
                  className="font-extrabold text-3xl text-black text-inherit align-middle"
                >
                  Room
                  <img src={MapIcon} alt="map" className="inline-block ml-1" />
                  zy
                </span>
              </div>
            </Link>
            <button
              onClick={() => setNavbarOpen(false)}
              className="navbar-close"
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 
0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-300 rounded"
                  href="#"
                >
                  Home
                </a>
              </li>
              {location.pathname === "/" && ( // Render About and Contact links only on "/"
                <>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >
                      Contact
                    </Link>
                  </li>
                </>
              )}
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-300 rounded"
                  href="#"
                >
                  Events
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-300 rounded"
                  href="#"
                >
                  Listing
                </a>
              </li>
              <li className="mb-1">
                <Link
                  to="/login"
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                >
                  Sign in
                </Link>
              </li>
              <li className="mb-1">
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-400 hover:bg-red-700  rounded-xl"
                  href="/register-user"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

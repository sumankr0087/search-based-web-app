import React from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("SEARCH");

  const navLinks = [
    { label: "SEARCH", href: "/" },
    { label: "WEBSITE", href: "https://girmantech.com" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/company/girman-technologies" },
    { label: "CONTACT", href: "mailto:contact@girmantech.com" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Girman Technologies" className="h-15" />
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-2xl ${
                  activeLink === link.label
                    ? "text-[#3063E6] font-bold underline"
                    : "text-[#111111] font-normal"
                }`}
                onClick={() => setActiveLink(link.label)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <img src="/menu.png" alt="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="absolute top-16 right-4 bg-white border shadow-lg rounded-lg"
          style={{ width: "90px", height: "166px" }}
        >
          <div className="space-y-4 px-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block text-xs font-normal py-1 ${
                  activeLink === link.label
                    ? "text-[#3063E6] font-bold underline"
                    : "text-[#111111] font-normal"
                }`}
                onClick={() => {
                  setActiveLink(link.label);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

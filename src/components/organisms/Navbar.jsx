import Logo from "@/assets/logos/hyperhire.svg";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("채용");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const jobOptions = [
    "채용",
    "해외 개발자 원격 채용",
    "외국인 원격 채용 (비개발 직군)",
    "한국어 가능 외국인 채용",
  ];

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4 relative">
      {/* Desktop Menu */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Hyperhire Logo" className="h-8 w-8" />
        <span className="text-1.5xl font-semibold text-white">hyperhire</span>
      </div>

      <ul className="hidden md:flex space-x-20 items-center flex-grow justify-center relative">
        <li className="relative" ref={dropdownRef}>
          <span
            className="flex items-center text-white cursor-pointer hover:text-yellow-200"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedJob} <FaChevronDown className="ml-1 text-white" />
          </span>

          {dropdownOpen && (
            <ul className="absolute top-full mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-50">
              {jobOptions.map((job, idx) => (
                <li
                  key={idx}
                  className={`px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-lg ${
                      job === selectedJob ? "font-bold" : ""
                    }`}                  
                    onClick={() => {
                    setSelectedJob(job);
                    setDropdownOpen(false);
                  }}
                >
                  {job}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="hover:text-yellow-200 cursor-pointer">
          해외 개발자 채용 서비스
        </li>
      </ul>

      <button className="hidden md:block bg-white text-blue-700 font-bold rounded-xl py-2 px-6 transition hover:bg-blue-50">
        문의하기
      </button>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
      <div className="absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4 md:hidden z-50"
      style={{ backgroundColor: "rgba(220, 252, 231, 0.8)" }}>    <div className="relative w-64 flex flex-col items-center" ref={dropdownRef}>
        <span
        className="flex items-center justify-between bg-white text-green-700 font-semibold py-2 px-4 rounded cursor-pointer w-full"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedJob} <FaChevronDown className="ml-1" />
      </span>
      {dropdownOpen && (
        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white text-green-700 rounded-lg shadow-lg z-50">
          {jobOptions.map((job, idx) => (
            <li
              key={idx}
              className={`px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-lg ${
                      job === selectedJob ? "font-bold" : ""
                    }`}                     
                onClick={() => {
                setSelectedJob(job);
                setDropdownOpen(false);
              }}
            >
              {job}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Second Link */}
    <span className="text-green-700 hover:text-yellow-200 cursor-pointer text-center">
      해외 개발자 채용 서비스
    </span>

    {/* Contact Button */}
    <button className="bg-white text-green-700 font-bold rounded-xl py-2 px-6 transition hover:bg-blue-50">
      문의하기
    </button>
  </div>
)}

    </nav>
  );
}

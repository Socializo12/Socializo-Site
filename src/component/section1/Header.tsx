"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "@/component/style.css"; // apka custom css
// import TextEffect from "./TextEffect";
import Image from "next/image"
import dynamic from 'next/dynamic'
import Link from "next/link";

const TextEffect = dynamic(() => import('@/component/section1/TextEffect'), {
  ssr: false, // <-- disables server-side render for just this component
})
const sections = ["home", "services", "faq","blog","about", "contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section detection
      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable nav link
  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a href={`#${href}`}
      className={`${
        activeSection === href ? "text-blue-500 font-bold underline" : "text-black"
      } transition duration-200`}
      onClick={() => setIsMenuOpen(false)} >
      {label}
    </a>
  );

  return (
    <div className="container " id="home">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      <nav className={`sticky-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link href="#home">
            <Image src="/assets/logo1.png" alt="Logo" width={300} height={100} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="nav-links flex gap-6">
              <li><NavLink href="home" label="Home" /></li>
              <li><NavLink href="services" label="Services" /></li>
              <li><NavLink href="faq" label="FAQ" /></li>
              <li><NavLink href="blog" label="Blog" /></li>
              <li><NavLink href="about" label="About" /></li>
              <li><NavLink href="contact" label="Contact" /></li>
            </ul>
            <button className="cta-button">Lets Talk</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links flex flex-col gap-4">
            <li><NavLink href="home" label="Home" /></li>
            <li><NavLink href="services" label="Services" /></li>
            <li><NavLink href="faq" label="FAQ" /></li>
            <li><NavLink href="blog" label="Blog" /></li>
            <li><NavLink href="about" label="About" /></li>
            <li><NavLink href="contact" label="Contact" /></li>
          </ul>
          <button className="mobile-cta-button mt-4" onClick={toggleMenu}>
            Lets Talk
          </button>
        </div>
      </nav>
       {/* Hero Section */}
        <div className="hero-main">
          <div className="hero-sec">
            <div className="hero-content">
              <div className="flex flex-col justify-center items-center">
                <div
                  className="w-[300px] my-[15px] rounded-[15px] border-2 p-[10px] text-medium border-white font-bold"
                  style={{ padding: "5px" }}
                >
                  <p className="text-[20px]">Lead-Gen Automation</p>
                </div>
                <div className="my-[10px] ">
                  <h3 className="text-[62px] font-bold leading-[1.1] hero-title">
                    We Build Growth Systems for B2B Companies
                  </h3>
                </div>
                <div className="my-[10px] ">
                  <p className="px-[40px] text-[20px] leading-[1.4] hero-subtitle">
                    Our done-for-you system hunts, nurtures, and closes cold prospects—so you land new clients in just
                    60 days
                  </p>
                </div>
                <div className="my-[10px] ">
                  <button className="hero-cta-btn">Show Me How to Get 50 Leads</button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-800 my-[20px] ">
                  <svg
                    className="w-8 h-8 text-[#91ff91] border-2 rounded-[15px] mx-[10px] border-green-600 gap-6 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  <span className="ps-4">Land Clients or Your Money Back Guarantee</span>
                </div>
                <div className="w-full px-4 md:px-8 mt-4 text-center">
                  <TextEffect/>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;

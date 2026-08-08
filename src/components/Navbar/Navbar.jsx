import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "certifications", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  // Detect which section is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">

      <div className="max-w-6xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-90}
          className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          Shivendra
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">

          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-90}
              className={`
                relative cursor-pointer font-medium
                transition-colors duration-300
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:bg-accent
                after:transition-all after:duration-300
                ${
                  activeSection === link.id
                    ? "text-accent after:w-full"
                    : "text-secondary after:w-0 hover:text-accent hover:after:w-full"
                }
              `}
            >
              {link.title}
            </Link>
          ))}

          {/* Resume */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white !px-5 !py-2 rounded-lg font-medium hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl text-primary"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface">

          <div className="px-6 py-5 space-y-4">

            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-340}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block relative cursor-pointer font-medium
                  transition-all duration-300
                  ${
                    activeSection === link.id
                      ? "text-accent"
                      : "text-secondary hover:text-accent"
                  }
                `}
              >
                {link.title}
              </Link>
            ))}

            {/* Mobile Resume */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-accent text-white px-6 py-2.5 rounded-lg font-medium hover:bg-accent-hover transition-all duration-300"
            >
              Resume
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
import { useEffect, useState } from "react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Hero() {

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Coder",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-16 pb-15"
    >

      <div className="max-w-6xl mx-auto px-16 w-full mb-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Section */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">

            <p className="text-lg font-medium tracking-wide text-secondary">
              Hi, I'm 👋
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Shivendra Maurya
            </h1>

            {/* Changing Role */}
            <div className="h-10 flex justify-center lg:justify-start items-center overflow-hidden">
              <h2
                key={currentRole}
                className="text-2xl lg:text-3xl font-semibold text-accent animate-fade"
              >
                {roles[currentRole]}
              </h2>
            </div>

            <p className="text-secondary leading-8 max-w-xl mx-auto lg:mx-0">
              Passionate about building scalable web applications and solving
              real-world problems through clean, efficient code.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">

              <a
                href="./Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white !px-4 !py-2 rounded-lg font-medium transition duration-300 hover:bg-accent-hover hover:-translate-y-1"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-border !px-4 !py-2 rounded-lg font-medium text-primary transition duration-300 hover:bg-white hover:-translate-y-1"
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex justify-center lg:justify-start items-center gap-6 pt-6">

              <a href="https://www.linkedin.com/in/shivendramaury/">
                <FaLinkedin className="text-3xl text-secondary hover:text-accent transition duration-300" />
              </a>

              <a href="https://leetcode.com/u/Shivendramaurya_se/">
                <SiLeetcode className="text-3xl text-secondary hover:text-accent transition duration-300" />
              </a>

              <a href="https://github.com/shivendramaury">
                <FaGithub className="text-3xl text-secondary hover:text-accent transition duration-300" />
              </a>

              <a
                href="https://codolio.com/profile/the_shivendra"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Codolio.svg"
                  alt="Codolio"
                  className="w-8 h-8 brightness-75 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
                />
              </a>

            </div>

          </div>

          {/* Right Section */}

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">

            {/* Profile Photo + Rotating Dots */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">

              {/* Clockwise Dot */}
              <div className="absolute -inset-5 animate-spin-slow">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-md"></span>
              </div>

              {/* Anticlockwise Dot */}
              <div className="absolute -inset-3 animate-spin-reverse">
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-md"></span>
              </div>

              {/* Profile Image */}
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl">

                <img
                  src="/Profile.jpg"
                  alt="Shivendra Maurya"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
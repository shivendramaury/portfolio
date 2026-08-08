import Staynest from "../../assets/Project/Staynest.png";
import Portfolio from "../../assets/Project/Portfolio.png";
import Aktu from "../../assets/Project/Aktu.png";
import { FaGithub } from "react-icons/fa";

function Projects(){
    const projects = [
    {
      id: 1,
      image: Staynest,
      title: "StayNest",
      description:
        "A full-stack hotel booking platform with authentication, authorization, property listings, image upload, reviews, and booking management.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Bootstrap",
      ],
      live: "https://staynest-3ooy.onrender.com/",
      github: "https://github.com/shivendramaury/StayNest",
    },

    {
      id: 2,
      image: Aktu,
      title: "AKTU SGPA/CGPA Calculator",
      description:
        "A web application that calculates semester-wise SGPA and overall CGPA with instant results and real-time input validation.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      live: "https://aktu-sgpa-calculator.netlify.app/",
      github: "https://github.com/shivendramaury/aktu-cgpa-calculator",
    },

    {
      id: 3,
      image: Portfolio,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my projects, technical skills, certifications, coding profiles, and contact information.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
      ],
      live: "#",
      github: "https://github.com/shivendramaury/portfolio",
    },
    ];

    return(
        <section id="projects" className="py-20 mb-15 border-t border-border">
            <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5">

                <h2 className="text-4xl font-bold text-center text-primary">
                    Projects
                </h2>

                <p className="text-secondary text-center mt-4 mb-12">
                    Some of my feasured projects showcasing problem-solving, full-stack development, and responsive web applications.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-surface border border-border rounded-2xl shadow-sm hover:shadow-xl hover:scale-102 transition-all duration-300 overflow-hidden flex flex-col h-full">
                                
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover !p-2"
                                />

                                <div className="!p-6 flex flex-col flex-grow">
                                  <h3 className="text-2xl font-bold text-primary">
                                    {project.title}
                                  </h3>

                                  <p className="p-3 mt-3 text-secondary text-sm leading-7 flex-grow">
                                    {project.description}
                                  </p>

                                  <div className="flex flex-wrap gap-2 mt-5 ml-2">
                                    {project.technologies.map((tech, index)=>(
                                      <span
                                        key={index}
                                        className="!px-2 py-1 text-sm rounded-full bg-green-100 text-white-900 text-bold"
                                        >
                                          {tech}
                                        </span>
                                    ))}
                                  </div>

                                  {/* Button */}
                                  <div className="flex gap-4 mt-6 mb-5 ml-1 mr-1">
                                    <a
                                      href={project.live}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 text-center bg-accent text-white py-2 rounded-lg hover:bg-accent-hover transition-colors duration-300"
                                      >
                                        Live Demo
                                      </a>

                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 flex-1 text-center border border-border py-2 rounded-lg text-primary hover:bg-gray-100 transition-colors duration-300"
                                        >
                                          GitHub
                                        </a>
                                  </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 p-10">
                <a
                  href="https://github.com/shivendramaury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent text-white !px-8 !py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors duration-300 hover:scale-103"
                  >
                    <FaGithub />
                    More Projects
                </a>
            </div>
        </section>
    )
}

export default Projects;
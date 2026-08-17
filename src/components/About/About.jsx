import Reveal from "../Reveal/Reveal";

function About() {
  return (
    <section id="about" className="py-20 mb-15 border-t border-border">
      <Reveal>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-7">
            
            <p className="text-secondary leading-8">

              {/* Technical Expertise */}
              Driven by a passion for{" "}
              <strong className="text-primary">Software Development</strong> and{" "}
              <strong className="text-primary">Problem Solving</strong>, I specialize in
              building modern web applications using{" "}
              <strong className="text-primary">
                React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, and
                Tailwind CSS
              </strong>
              . With a strong foundation in{" "}
              <strong className="text-primary">
                Data Structures and Algorithms
              </strong>
              , I have solved{" "}
              <strong className="text-primary">700+ DSA problems</strong> and focus on
              writing{" "}
              <strong className="text-primary">
                clean, efficient, and scalable code
              </strong>
              .

              <br />
              <br />

              {/* Strengths & Work Approach */}
              Beyond technical skills, I am an{" "}
              <strong className="text-primary">
                adaptable and quick learner
              </strong>{" "}
              who enjoys taking on new challenges and learning new technologies. I value{" "}
              <strong className="text-primary">
                teamwork, leadership, consistency, and effective communication
              </strong>
              , and always try to take ownership of my work while continuously improving
              myself and contributing positively to the team.
              
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-5 space-y-5">

            {/* Education */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-xl px-10 py-8 shadow-sm transition duration-300 hover:scale-103">
              <div className="w-14 h-14 ml-3 rounded-lg bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                🎓
              </div>

              <div>
                <p className="text-xs text-secondary uppercase font-semibold">
                  Education
                </p>
                <h3 className="text-primary font-semibold">
                  B.Tech – Computer Science & Design(2023-27)
                </h3>
                <p className="text-secondary text-sm">
                  GNIOT, Greater Noida
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-xl px-10 py-8 shadow-sm p-10 transition duration-300 hover:scale-103">
              <div className="w-14 h-14 ml-3 rounded-lg bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                💻
              </div>

              <div>
                <p className="text-xs text-secondary uppercase font-semibold">
                  Tech Stack
                </p>
                <h3 className="text-primary font-semibold">
                  MERN Stack
                </h3>
                <p className="text-secondary text-sm">
                  React • Node.js • Express.js • MongoDB
                </p>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-xl px-10 py-8 shadow-sm transition duration-300 hover:scale-103">
              <div className="w-14 h-14 ml-3 rounded-lg bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                🧠
              </div>

              <div>
                <p className="text-xs text-secondary uppercase font-semibold">
                  Problem Solving
                </p>
                <h3 className="text-primary font-semibold">
                  700+ DSA Problems
                </h3>
                <p className="text-secondary text-sm">
                  Analytical Thinking & Clean Code
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-xl px-10 py-8 shadow-sm transition duration-300 hover:scale-103">
              <div className="w-14 h-14 ml-3 rounded-lg bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                🚀
              </div>

              <div>
                <p className="text-xs text-secondary uppercase font-semibold">
                  Strength
                </p>
                <h3 className="text-primary font-semibold">
                  Quick Learner & Adaptable
                </h3>
                <p className="text-secondary text-sm">
                  Teamwork • Leadership • Consistency
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

export default About;
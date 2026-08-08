function Skills() {
    return (
        <section id="skills" className="py-20 mb-15 border-t border-border">
            <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5">

                {/* heading */}
                <h2 className="text-4xl font-bold text-center text-primary">
                    Technical Skills
                </h2>

                <p className="mt-4 text-center text-secondary mb-12">
                    Technologies and tools I use to build modern, scalable web applications.
                </p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">

                    {/* Frontend */}
          <div className="bg-surface border border-border rounded-xl p-8 shadow-sm transition duration-300 hover:scale-103">
            <h3 className="text-xl font-semibold text-primary mb-5 ml-10 mt-5">
              💻 Frontend
            </h3>

            <div className="flex flex-wrap gap-5 ml-5 mb-5">
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium gap-5">
                HTML5
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                CSS3
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                JavaScript
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                React.js
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* backend */}

          <div className="bg-surface border border-border rounded-xl p-8 shadow-sm transition duration-300 hover:scale-103">
            <h3 className="text-xl font-semibold text-primary mb-5 ml-10 mt-5">
              ⚙️ Backend
            </h3>

            <div className="flex flex-wrap gap-5 ml-5 mb-5">
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium gap-5">
                Node.js
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                Express.js
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                REST API
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                Authentication
              </span>
              
            </div>
          </div>

          {/* Database */}

          <div className="bg-surface border border-border rounded-xl p-8 shadow-sm transition duration-300 hover:scale-103">
            <h3 className="text-xl font-semibold text-primary mb-5 ml-10 mt-5">
              🗄️ Database
            </h3>

            <div className="flex flex-wrap gap-5 ml-5 mb-5">
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium gap-5">
                MongoDB
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                My SQL
              </span>
              
              
            </div>
          </div>

          {/* Tools */}

          <div className="bg-surface border border-border rounded-xl p-8 shadow-sm transition duration-300 hover:scale-103">
            <h3 className="text-xl font-semibold text-primary mb-5 ml-10 mt-5">
              🛠️ Dev Tools
            </h3>

            <div className="flex flex-wrap gap-5 ml-5 mb-5">
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium gap-5">
                Git
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                GitHub
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium gap-5">
                Vs Code
              </span>
              <span className="!px-2 !py-1 rounded-lg bg-gray-100 text-primary font-medium">
                Postman
              </span>
              
              
            </div>
          </div>

                </div>
            </div>

        </section>
    )
}

export default Skills;
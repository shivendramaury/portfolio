import Reveal from "../Reveal/Reveal";

function Education() {
  const education = [
    {
      year: "2023 — 2027",
      degree: "B.Tech — Computer Science & Design",
      college: "Greater Noida Institute of Technology (GNIOT)",
      location: "Greater Noida, Uttar Pradesh",
      result: "CGPA: 7.4",
    },
    {
      year: "2022",
      degree: "Class 12th",
      college: "Senior Secondary Education",
      location: "Uttar Pradesh, India",
      result: "Percentage: 74.6%",
    },
    {
      year: "2020",
      degree: "Class 10th",
      college: "Secondary Education",
      location: "Uttar Pradesh, India",
      result: "Percentage: 79.33%",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mb-5">

        {/* Heading */}
        <Reveal>
          <h2 className="text-4xl font-bold text-center text-primary">
            Education
          </h2>

          <p className="text-secondary text-center mt-4 mb-14">
            My academic background and educational journey.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-accent opacity-70">
            <div className="absolute inset-0 bg-accent blur-sm opacity-30"></div>
          </div>

          {/* Education Items */}
          <div className="space-y-8">
            {education.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 150}
              >
                <div className="grid grid-cols-[40px_1fr] gap-8 items-start">

                  {/* Timeline Dot */}
                  <div className="flex justify-center pt-8">
                    <div className="w-5 h-5 rounded-full bg-surface border-4 border-accent z-10"></div>
                  </div>

                  {/* Education Card */}
                  <div
                    className="bg-surface border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-accent transition-all duration-300"
                    style={{ padding: "32px" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

                      {/* Education Details */}
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {item.degree}
                        </h3>

                        <p className="mt-4 text-secondary font-medium">
                          {item.college}
                        </p>

                        <p className="mt-3 text-sm text-secondary">
                          {item.location}
                        </p>
                      </div>

                      {/* Year + Result */}
                      <div className="text-left sm:text-right">
                        <p className="text-sm font-semibold text-secondary whitespace-nowrap">
                          {item.year}
                        </p>

                        <p className="mt-2 text-accent font-bold whitespace-nowrap">
                          {item.result}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
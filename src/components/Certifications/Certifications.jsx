import { useState } from "react";

import Reveal from "../Reveal/Reveal";
import OracleAI from "../../assets/certifications/oracle-ai.jpg";
import Databricks from "../../assets/certifications/databricks.jpg";
import Backend from "../../assets/certifications/Backend.jpg";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      badge: "ORACLE",
      year: "2025",
      image: OracleAI,
      title: "Oracle Cloud Infrastructure AI Foundations",
      organization: "Oracle",
      description:
        "Earned Oracle Cloud Infrastructure 2025 AI Foundations Associate certification.",
    },
    {
      id: 2,
      badge: "DATABRICKS",
      year: "2025",
      image: Databricks,
      title: "Databricks Fundamentals",
      organization: "Databricks",
      description:
        "Completed Databricks Fundamentals course covering data engineering concepts.",
    },
    {
      id: 3,
      badge: "BACKEND",
      year: "2025",
      image: Backend,
      title: "Backend Fundamentals",
      organization: "Knowledge Gate",
      description:
        "Completed Backend Fundamentals course and secured 83% marks in the final assessment.",
    },
  ];

  return (
    <section id="certifications" className="py-20 mb-15 border-t border-border">
      <Reveal>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-primary">
          Certifications
        </h2>

        <p className="text-secondary text-center mt-4 mb-12">
          Professional certifications and achievements that reflect my
          continuous learning journey.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-surface border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:scale-103 transition-all duration-300 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold !px-1 !py-1 rounded-full bg-accent text-white mt-2 ml-5">
                  {certificate.badge}
                </span>

                <span className="text-sm text-secondary font-medium mr-5 mt-3">
                  {certificate.year}
                </span>
              </div>

              {/* Image */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-60 object-cover rounded-xl border-none"
              />

              {/* Content */}
              <div className="grow">
              <h3 className="mt-5 text-xl font-bold text-primary ml-6">
                {certificate.title}
              </h3>

              <p className="mt-2 text-secondary font-medium ml-6">
                {certificate.organization}
              </p>

              <p className="mt-4 text-secondary text-sm leading-7 ml-6">
                {certificate.description}
              </p>
              </div>

              {/* Button */}
              
              <div className="flex justify-center mt-8 pb-2 mb-2">
                    <button
                onClick={() => setSelectedCertificate(certificate.image)}
                className="mt-4 bg-accent text-white !px-3 !py-2 rounded-lg hover:bg-accent-hover hover:cursor-pointer transition-colors duration-300"
              >
                 View Certificate
              </button>
                </div>
            </div>
          ))}

        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">

          <button
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-6 right-8 text-white text-5xl hover:text-gray-300"
          >
            &times;
          </button>

          <img
            src={selectedCertificate}
            alt="Certificate"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />

        </div>
      )}
      </Reveal>
    </section>
  );
}

export default Certifications;
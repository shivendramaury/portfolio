import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_40oajpj",
        "template_m0omgir",
        form.current,
        "GtMMVt8dJXgbCjt1g"
      )
      .then(
        () => {
          alert("Message sent successfully!");

          form.current.reset();

          setLoading(false);
        },
        (error) => {
          console.log(error);

          alert("Failed to send message.");

          setLoading(false);
        }
      );
  };


  return (
    <section id="contact" className="py-20 mb-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-primary">
          Contact Me
        </h2>

        <p className="text-secondary text-center mt-4 mb-12">
          Have a project or opportunity? Feel free to reach out. I'd love to connect.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Contact Form */}
          <div className="lg:col-span-8 flex">
            <form
              ref={form}
              onSubmit={sendEmail}
             className="bg-surface border border-border rounded-2xl shadow-sm p-10 space-y-1 w-full flex flex-col justify-between">

              <div className="flex items-center gap-6 m-3">
                <label className="w-24 font-medium text-primary">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-border rounded-lg px-5 py-3 outline-none focus:border-accent"
                />
              </div>

              <div className="flex items-center gap-6 m-3">
                <label className="w-24 font-medium text-primary">
                  Email :
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" w-full border border-border rounded-lg px-5 py-5 outline-none focus:border-accent"
                />
              </div>


              <div className="flex items-center gap-6 m-3">
                <label className="block mb-2 font-medium text-primary">
                  Message:
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-border rounded-lg px-5 py-3 outline-none resize-none focus:border-accent"
                ></textarea>
              </div>

              
              <div className="flex justify-center mt-2 mb-3">
  <button
    type="submit"
    disabled={loading}
    className="bg-accent text-white w-40 h-9 rounded-lg font-medium hover:bg-accent-hover transition-colors duration-300"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>
</div>

            </form>
          </div>

          {/* Contact Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">

            {/* Phone */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 transition duration-300 hover:scale-103">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaPhoneAlt className="text-accent text-xl" />
              </div>

              <div>
                <p className="text-sm text-secondary">Phone</p>
                <h3 className="font-semibold text-primary">
                  +91 6390797412
                </h3>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 transition duration-300 hover:scale-103">
              <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaEnvelope className="text-accent text-xl" />
              </div>

              <div>
                <p className="text-sm text-secondary">Email</p>
                <h3 className="font-semibold text-primary break-all">
                  shivendramaury@gmail.com
                </h3>
              </div>
            </div>

            {/* LinkedIn */}
            <a
  href="https://www.linkedin.com/in/shivendramaury/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-accent transition-all duration-300 hover:scale-103"
>
  <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
    <FaLinkedin className="text-accent text-xl" />
  </div>

  <div>
    <p className="text-sm text-secondary">
      LinkedIn
    </p>

    <p className="font-semibold text-primary">
      Visit Profile
    </p>
  </div>
</a>

            {/* Address */}
            <div className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 transition duration-300 hover:scale-103">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-accent text-xl" />
              </div>

              <div>
                <p className="text-sm text-secondary">Address</p>
                <h3 className="font-semibold text-primary">
                  Greater Noida,<br />
                  Uttar Pradesh, India
                </h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
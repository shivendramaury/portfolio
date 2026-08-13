import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "49ec63cb-fd0a-4a78-b316-587ed0175642"
    );

    // Email subject
    formData.append(
      "subject",
      "New Message from Shivendra's Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 mb-10 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5">

  
        <h2 className="text-4xl font-bold text-center text-primary">
          Contact Me
        </h2>

        <p className="text-secondary text-center mt-4 mb-12">
          Have a project or opportunity? Feel free to reach out.
          I'd love to connect.
        </p>


    
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">


          
          <div className="lg:col-span-8 flex">

            <form
              onSubmit={sendMessage}
              className="bg-surface border border-border rounded-2xl shadow-sm p-10 space-y-1 w-full flex flex-col justify-between"
            >

              {/* Name */}
              <div className="flex items-center gap-6 m-3">

                <label className="w-24 font-medium text-primary">
                  Name :
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-border rounded-lg px-5 py-3 outline-none focus:border-accent"
                />

              </div>


              {/* Email */}
              <div className="flex items-center gap-6 m-3">

                <label className="w-24 font-medium text-primary">
                  Email :
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-border rounded-lg px-5 py-3 outline-none focus:border-accent"
                />

              </div>


              {/* Message */}
              <div className="flex items-start gap-6 m-3">

                <label className="w-24 pt-3 font-medium text-primary">
                  Message :
                </label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="w-full border border-border rounded-lg px-5 py-3 outline-none resize-none focus:border-accent"
                ></textarea>

              </div>


              {/* Success Message */}
              {success && (
                <p className="text-green-600 text-center font-medium mt-4">
                  Message sent successfully!
                </p>
              )}


              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-center font-medium mt-4">
                  Failed to send message. Please try again.
                </p>
              )}


        
              <div className="flex justify-center mt-4 mb-3">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent text-white !px-8 !py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </div>

            </form>

          </div>


          
          <div className="lg:col-span-4 flex flex-col gap-5">


            {/* Phone */}
            <a
              href="tel:+916390797412"
              className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 transition duration-300 hover:scale-103 hover:shadow-md hover:border-accent"
            >

              <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaPhoneAlt className="text-accent text-xl" />
              </div>

              <div>
                <p className="text-sm text-secondary">
                  Phone
                </p>

                <h3 className="font-semibold text-primary">
                  +91 6390797412
                </h3>
              </div>

            </a>


            {/* Email */}
            <a
              href="mailto:shivendramaury@gmail.com"
              className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 transition duration-300 hover:scale-103 hover:shadow-md hover:border-accent"
            >

              <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaEnvelope className="text-accent text-xl" />
              </div>

              <div>
                <p className="text-sm text-secondary">
                  Email
                </p>

                <h3 className="font-semibold text-primary break-all">
                  shivendramaury@gmail.com
                </h3>
              </div>

            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shivendramaury/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 hover:shadow-md hover:border-accent transition-all duration-300 hover:scale-103"
            >

              <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
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
            <div
              className="flex items-center gap-5 bg-surface border border-border rounded-2xl p-7 shadow-sm flex-1 transition duration-300 hover:scale-103 hover:shadow-md hover:border-accent"
            >

              <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-accent text-xl" />
              </div>

              <div>
                <p className="text-sm text-secondary">
                  Address
                </p>

                <h3 className="font-semibold text-primary">
                  Greater Noida,
                  <br />
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
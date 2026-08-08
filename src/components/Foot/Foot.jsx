import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Foot() {
    return (
        <section className="border-t border-border py-8 mt-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-16 mt-5 mb-5">

                {/* Logo */}
                <h2 className="text-2xl font-bold text-primary text-center">
                    Shivendra
                </h2>

                <p className="text-secondary text-center mt-3">
                    Crafted with ❤️ using React & Tailwind CSS
                </p>

                {/* Icons */}

                <div className="flex justify-center gap-6 mt-6">

                    <a
                        href="https://github.com/shivendramaury"
                        target="_blank"
                        className="text-2xl text-secondary hover:text-accent hover:scale-105 transition-colors duration-300"
                    >
                        <FaGithub />
                    </a>
                    
                    <a
                        href="https://www.linkedin.com/in/shivendramaury/"
                        target="_blank"
                        className="text-2xl text-secondary hover:text-accent hover:scale-105 transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://leetcode.com/u/the_shivendra/"
                        target="_blank"
                        className="text-2xl text-secondary hover:text-accent hover:scale-105 transition-colors duration-300"
                    >
                        <SiLeetcode />
                    </a>

                </div>

                {/* copyright */}
                <p className="text-center text-secondary text-sm mt-6">
                    © 2026 Shivendra Maurya. All Rights Reserved.
                </p>
            </div>
        </section>
    );
}

export default Foot;
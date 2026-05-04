import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#CCCCFF] text-base-content">

            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Skill<span className="text-primary">Sphere</span>
                        </h2>
                        <p className="mt-3 text-sm opacity-80">
                            Learn, Grow & Build your future with SkillSphere. 
                            High quality courses for developers.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="footer-title">Contact</h3>
                        <p>Email: support@skillsphere.com</p>
                        <p>Phone: +880 1234 567890</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link className="link link-hover" href="/">Home</Link>
                            <Link className="link link-hover" href="/courses">Courses</Link>
                            <Link className="link link-hover" href="/myprofile">My Profile</Link>
                        </div>
                    </div>

                    {/* Legal + Social */}
                    <div>
                        <h3 className="footer-title">Legal</h3>
                        <div className="flex flex-col gap-2 mb-4">
                            <Link className="link link-hover" href="">Terms</Link>
                            <Link className="link link-hover" href="">Privacy</Link>
                        </div>

                        <h3 className="footer-title">Follow Us</h3>
                        <div className="flex gap-4 text-xl mt-2">
                            <a href="#" className="hover:text-blue-500 transition">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-sky-400 transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-gray-800 transition">
                                <FaGithub />
                            </a>
                            <a href="#" className="hover:text-blue-700 transition">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-base-300 mt-10 pt-5 text-center text-sm opacity-70">
                    © {new Date().getFullYear()} SkillSphere. All rights reserved.
                </div>

            </div>

        </footer>
    );
};

export default Footer;
import React from "react";
import Lottie from 'lottie-react';
import Animation from '../assets/Animation.json';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Profile = () => {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/Zkpahore" },
        { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100088421584668" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-zahir-pahore-720049184" },
        { icon: <FaTwitter />, url: "https://twitter.com/Muhamma22385581" }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full flex flex-wrap lg:flex-nowrap gap-8 items-center">
                {/* Profile Card */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl p-8 relative overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay animate-pulse-slow">
                        <div className="w-64 h-64 bg-yellow-300 rounded-full blur-3xl -top-32 -left-32 absolute"></div>
                        <div className="w-64 h-64 bg-orange-300 rounded-full blur-3xl -bottom-32 -right-32 absolute"></div>
                    </div>

                    {/* Profile Content */}
                    <div className="relative z-10">
                        <div className="relative w-40 h-40 mx-auto mb-6 group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                                src='zkpo.png' 
                                className="w-full h-full rounded-full border-4 border-white/90 transform transition-all duration-300 group-hover:scale-105"
                                alt="Muhammad Zahir Pahore"
                            />
                        </div>

                        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-in-up">
                            Hello,<br />
                            I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-600 animate-text-gradient">Muhammad Zahir</span> Pahore
                        </h1>

                        <p className="text-xl font-semibold text-gray-700 mb-6 animate-fade-in-up delay-100">
                            Passionate MERN Stack Developer
                        </p>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/30"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-yellow-400 px-4 text-gray-800 rounded-full text-sm font-bold transform -translate-y-1/2 animate-bounce-slow">
                                    Connect With Me
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6 mb-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    {React.cloneElement(link.icon, {
                                        className: "w-8 h-8 text-white hover:text-yellow-200 transition-colors"
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Animation Section */}
                <div className="w-full lg:w-1/2 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                    <Lottie
                        animationData={Animation}
                        loop={true}
                        autoplay={true}
                        className="rounded-2xl shadow-xl border-8 border-white/20 hover:border-yellow-400/30 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
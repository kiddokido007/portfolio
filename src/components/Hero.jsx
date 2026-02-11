import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-[#0B0F17]">
            {/* Background Layers */}
            <div className="absolute inset-0 -z-10">
                {/* Layer 2: Subtle Grid Pattern */}
                <div className="absolute inset-0 grid-pattern opacity-[0.06]"></div>

                {/* Layer 1: Radial Gradient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px]"></div>

                {/* Layer 3: Floating Gradient Blobs */}
                <div className="absolute top-20 right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container-custom relative z-10 w-full animate-hero-fade">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-white/5 mb-6"
                        >
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)] uppercase">Available for new opportunities</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="mb-3 text-4xl md:text-5xl lg:text-6xl"
                        >
                            Building High-Performance <br className="hidden lg:block" />
                            <span className="gradient-text">Backend Solutions</span> & UI
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl mb-6 leading-relaxed"
                        >
                            I am <span className="text-white font-medium">Santhosh R</span>, a Software Engineer dedicated to crafting robust digital experiences with precision and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a href="#projects" className="btn-primary flex items-center gap-2 button-hover-glow !py-2.5 !px-6 text-sm">
                                Explore Projects <FaArrowRight className="text-xs" />
                            </a>
                            <div className="flex items-center gap-4 px-2">
                                <a href="https://github.com/kiddokido007" className="text-xl text-[var(--text-secondary)] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="https://linkedin.com/in/santhosh1305" className="text-xl text-[var(--text-secondary)] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Photo */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative group p-4 animate-float">
                            {/* Ring Glow Wrapper */}
                            <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#22C55E] via-[#3B82F6] to-[#A855F7] shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#0B0F17] p-2">
                                    <img
                                        src={profileImg}
                                        alt="Santhosh R"
                                        className="w-full h-full object-contain object-top mt-4 scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* CGPA Badge - Glassmorphism Card */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-2 -right-4 glass-card px-5 py-3 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl card-hover-lift hover:shadow-blue-500/20"
                            >
                                <div className="text-2xl font-bold text-white leading-none">9.27</div>
                                <div className="text-[10px] font-medium uppercase tracking-widest text-blue-400 mt-1">VIT CGPA</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

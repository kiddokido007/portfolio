import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = document.querySelectorAll('section[id]');
            let currentSection = 'Home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveLink(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none pt-6">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`pointer-events-auto flex items-center justify-between px-8 py-3 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/20' : ''
                    }`}
                style={{
                    width: 'min(90%, 800px)'
                }}
            >
                <a href="#home" className="text-xl font-bold font-heading text-white tracking-tighter">
                    SR<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-white ${activeLink === link.href.substring(1) ? 'text-white' : 'text-[var(--text-secondary)]'
                                }`}
                        >
                            {link.title}
                        </a>
                    ))}
                    <a href="#contact" className="ml-2 btn-primary !py-2 !px-5 text-sm button-hover-glow">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-xl text-white p-1">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-16 left-0 w-full p-4 md:hidden"
                        >
                            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 flex flex-col items-center gap-6 shadow-2xl">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-[var(--text-secondary)] hover:text-white"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center btn-primary"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;

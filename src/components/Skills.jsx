import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaLinux, FaServer, FaBrain } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';

const SkillCard = ({ name, icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-6 flex flex-col items-center justify-center gap-4 card-hover-lift group"
    >
        <div className={`text-4xl ${color} transition-transform duration-300 group-hover:scale-110`}>{icon}</div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] group-hover:text-white transition-colors">{name}</span>
    </motion.div>
);

const Skills = () => {
    const languages = [
        { name: 'Java', icon: <FaJava />, color: 'text-orange-500' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
        { name: 'SQL', icon: <FaDatabase />, color: 'text-yellow-400' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-600' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-300' },
        { name: 'PHP', icon: <FaPhp />, color: 'text-purple-400' },
    ];

    const core = [
        { name: 'DBMS', icon: <FaDatabase />, color: 'text-green-400' },
        { name: 'Backend', icon: <FaServer />, color: 'text-blue-200' },
        { name: 'ML', icon: <FaBrain />, color: 'text-pink-400' },
        { name: 'Networking', icon: <SiCisco />, color: 'text-blue-300' },
        { name: 'Linux', icon: <FaLinux />, color: 'text-white' },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-16">
                    <span className="label-uppercase text-purple-500 mb-2 block">Technical Expert</span>
                    <h2 className="mb-4">Standard <span className="gradient-text">Stack</span></h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                    {languages.map((skill, i) => (
                        <SkillCard key={skill.name} {...skill} delay={i * 0.05} />
                    ))}
                    {core.map((skill, i) => (
                        <SkillCard key={skill.name} {...skill} delay={(languages.length + i) * 0.05} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

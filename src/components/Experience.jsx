import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: "Application Developer Intern",
            company: "HITEC Industrial Fan & Systems",
            date: "JUN 2024 - JUL 2024",
            bullets: [
                "Automated high-precision engineering workflows",
                "Integrated Scikit-learn for intelligent forecasting",
                "Developed interactive real-time data visualizers",
                "Optimized database indexing for instant retrieval"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="container-custom">
                <div className="mb-16">
                    <span className="label-uppercase text-blue-500 mb-2 block">Career Path</span>
                    <h2 className="mb-4">Work <span className="gradient-text">Experience</span></h2>
                </div>

                <div className="relative max-w-4xl">
                    {/* Vertical Line */}
                    <div className="timeline-line md:left-0"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8"
                            >
                                {/* Glowing Dot */}
                                <div className="timeline-dot mt-2"></div>

                                <div className="glass-card p-6 md:p-8 card-hover-lift">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                            <p className="text-blue-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] flex items-center gap-2">
                                            <FaCalendarAlt className="text-blue-500" />
                                            {exp.date}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3 group">
                                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                                                <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

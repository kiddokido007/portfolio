import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaTerminal } from 'react-icons/fa';

const BentoCard = ({ children, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`glass-card p-8 card-hover-lift h-full ${className}`}
    >
        <div className="relative z-10 h-full">{children}</div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-16">
                    <span className="label-uppercase text-blue-500 mb-2 block">My Story</span>
                    <h2 className="mb-4">My <span className="gradient-text">Journey</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 max-w-7xl mx-auto">
                    {/* Education */}
                    <BentoCard className="md:col-span-8 md:row-span-1" delay={0.1}>
                        <div className="flex flex-col md:flex-row gap-8 h-full items-start">
                            <div className="flex-[1.5]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500">
                                        <FaGraduationCap size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold">Education</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-0.5">M.Tech Integrated – Software Engineering</h4>
                                        <p className="text-[var(--text-secondary)] text-sm">Vellore Institute of Technology (2022–2027)</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[var(--border-color)]">
                                        <div>
                                            <div className="text-3xl font-bold text-white">9.27</div>
                                            <div className="label-uppercase text-[10px] text-[var(--text-secondary)]">Current CGPA</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-white">93.1<span className="text-base">%</span></div>
                                            <div className="label-uppercase text-[10px] text-[var(--text-secondary)]">Class XII Score</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full p-6 bg-white/5 rounded-xl border border-[var(--border-color)]">
                                <div className="label-uppercase text-[10px] text-[var(--text-secondary)] mb-4 pb-2 border-b border-[var(--border-color)]">Specializations</div>
                                <div className="flex flex-wrap gap-2">
                                    {['Data Structures', 'OS', 'DBMS', 'ML', 'Networking'].map(item => (
                                        <span key={item} className="px-2 py-1 rounded text-[10px] text-white border border-[var(--border-color)] bg-white/5 uppercase tracking-wider">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Interests */}
                    <BentoCard className="md:col-span-4 md:row-span-2" delay={0.2}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-500 mb-6">
                                    <FaTerminal size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Focus Areas</h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                                    Architecting modern systems through deep exploration of software mechanics and AI integration.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: 'Backend Engineering', desc: 'Scalable infrastructures' },
                                    { title: 'Machine Learning', desc: 'Predictive analytics' },
                                    { title: 'Systems Design', desc: 'Distributed architectures' }
                                ].map((area, i) => (
                                    <div key={area.title} className="group/item">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                                            <span className="text-sm text-white font-medium">{area.title}</span>
                                        </div>
                                        <p className="text-[10px] text-[var(--text-secondary)] ml-3.5 uppercase tracking-widest">{area.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Vision */}
                    <BentoCard className="md:col-span-4 md:row-span-1" delay={0.3}>
                        <div className="flex flex-col h-full">
                            <FaRocket className="text-3xl text-blue-500/20 self-end mb-2" />
                            <h3 className="text-lg font-bold mb-3">Vision</h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic">
                                "Creating software that doesn't just process data, but transforms human interaction with technology."
                            </p>
                        </div>
                    </BentoCard>

                    {/* Expertise */}
                    <BentoCard className="md:col-span-4 md:row-span-1" delay={0.4}>
                        <div className="flex flex-col h-full">
                            <FaCode className="text-3xl text-purple-500/20 self-end mb-4" />
                            <h3 className="text-lg font-bold mb-4">Core Strengths</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Adaptability', 'Problem Solving', 'High Performance'].map(t => (
                                    <span key={t} className="text-[10px] px-2 py-1 text-white rounded border border-[var(--border-color)] bg-white/5 uppercase tracking-widest">{t}</span>
                                ))}
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default About;

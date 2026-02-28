import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative glass-card p-6 card-hover-lift flex flex-col h-full overflow-hidden"
        >
            <div className="relative mb-6 rounded-xl overflow-hidden aspect-video bg-white/5 border border-[var(--border-color)]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <FaGithub size={60} className="text-blue-500" />
                </div>
            </div>

            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-secondary)] hover:text-white transition-colors">
                    <FaGithub size={20} />
                </a>
            </div>

            <p className="text-[var(--text-secondary)] text-sm mb-6 flex-1 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 text-[var(--text-secondary)] rounded border border-[var(--border-color)]">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'NCG Portal',
            description: 'High-performance Alumni networking platform with multi-layered authentication and real-time social dynamics.',
            tags: ['PHP', 'MySQL', 'Full Stack'],
            github: 'https://github.com/kiddokido007'
        },
        {
            title: 'Stadium Reserve',
            description: 'A robust booking ecosystem featuring visual seat allocation and high-concurrency payment validation.',
            tags: ['Java', 'JDBC', 'MySQL'],
            github: 'https://github.com/kiddokido007'
        },
        {
            title: 'TrustMeBro',
            description: 'Hyper-secure travel platform with dual-channel OTP and panic protocols for maximum passenger safety.',
            tags: ['Security', 'React', 'Firebase'],
            github: 'https://github.com/kiddokido007/TrustMeBro'
        },
        {
            title: 'SheCycle AI',
            description: 'AI-driven health companion utilizing predictive analytics for menstrual cycle and mood management.',
            tags: ['Python', 'AI/ML', 'Healthcare'],
            github: 'https://github.com/kiddokido007'
        },
        {
            title: 'Carpool TCP',
            description: 'Socket-based networking system for real-time ride orchestration over distributed LAN environments.',
            tags: ['Java', 'Sockets', 'Networking'],
            github: 'https://github.com/kiddokido007'
        },
        {
            title: 'TollGate (Upcoming)',
            description: 'Geospatial cost-optimization engine designed to minimize logistics overhead through intelligent routing.',
            tags: ['Geospatial', 'Optimization', 'In-Dev'],
            github: 'https://github.com/kiddokido007'
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-16">
                    <span className="label-uppercase text-blue-500 mb-2 block">Case Studies</span>
                    <h2 className="mb-4">Latest <span className="gradient-text">Creations</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.title + i} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

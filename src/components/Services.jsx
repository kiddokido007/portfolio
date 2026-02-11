import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-10 card-hover-lift group flex flex-col items-center text-center"
    >
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl text-blue-500 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            {icon}
        </div>

        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: <FaServer />,
            title: 'Backend Systems',
            description: 'Architecting high-performance, fault-tolerant server-side architectures that scale with your users.'
        },
        {
            icon: <FaCode />,
            title: 'Full-Stack Apps',
            description: 'Building seamless end-to-end digital experiences from pixel-perfect frontends to robust databases.'
        },
        {
            icon: <FaDatabase />,
            title: 'Database Architecture',
            description: 'Designing data models that ensure integrity, performance, and long-term maintainability.'
        },
        {
            icon: <FaBrain />,
            title: 'AI Integration',
            description: 'Integrating intelligent features and predictive models to transform simple apps into smart solutions.'
        },
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-16">
                    <span className="label-uppercase text-purple-500 mb-2 block">Specializations</span>
                    <h2 className="mb-4">Scale with <span className="gradient-text">Precision</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

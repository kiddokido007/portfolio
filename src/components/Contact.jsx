import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <span className="label-uppercase text-purple-500 mb-2 block">Get in Touch</span>
                            <h2 className="mb-6">Let's Build <br /><span className="gradient-text">Impact</span> Together</h2>
                            <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-md">
                                I'm always open to discussing technical hurdles, innovative ideas, or professional collaborations.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                { icon: <FaEnvelope className="text-blue-500" />, label: "College Email", value: "santhosh.r2022a@vitstudent.ac.in" },
                                { icon: <FaEnvelope className="text-purple-500" />, label: "Personal Email", value: "sandy05132004@gmail.com" },
                                { icon: <FaPhone className="text-green-500" />, label: "Phone", value: "+91 6385259900" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-4 flex items-center gap-4 card-hover-lift"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-0.5">{item.label}</p>
                                        <p className="text-sm font-medium text-white break-all">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 mt-12 pb-8">
                            <a href="https://github.com/kiddokido007" className="text-2xl text-[var(--text-secondary)] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://linkedin.com/in/santhosh1305" className="text-2xl text-[var(--text-secondary)] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 md:p-10 relative overflow-hidden"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-[var(--text-secondary)] ml-1">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-[var(--text-secondary)] ml-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-[var(--text-secondary)] ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full btn-primary py-4 flex items-center justify-center gap-3 button-hover-glow ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status === 'sending' ? (
                                    <>Sending... <FaSpinner className="animate-spin" /></>
                                ) : status === 'success' ? (
                                    <>Message Sent! <FaCheckCircle /></>
                                ) : status === 'error' ? (
                                    <>Error Sending <FaExclamationCircle /></>
                                ) : (
                                    <>Send Message <FaPaperPlane className="text-xs" /></>
                                )}
                            </button>
                        </form>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-20"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl mb-4">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                                    <p className="text-[var(--text-secondary)]">
                                        Thank you for reaching out. I'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 text-sm text-blue-500 hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

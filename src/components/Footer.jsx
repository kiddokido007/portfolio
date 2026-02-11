import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-color)]">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xl font-bold font-heading text-white tracking-tighter">
                    SR<span className="text-blue-500">.</span>
                </div>

                <p className="text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.2em] font-medium">
                    © {new Date().getFullYear()} Santhosh R. Built with Precision.
                </p>

                <div className="flex gap-8 text-[var(--text-secondary)] text-xs font-medium uppercase tracking-widest">
                    <span className="hover:text-blue-400 transition-colors cursor-pointer">Privacy</span>
                    <span className="hover:text-purple-400 transition-colors cursor-pointer">Terms</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

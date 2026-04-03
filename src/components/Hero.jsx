import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Mic, Smartphone } from 'lucide-react';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="relative py-24 px-4 bg-white border-b border-slate-100">
            <motion.div
                className="max-w-5xl mx-auto text-center z-10 relative"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-slate-500 font-bold text-sm mb-6 cursor-default">
                    <span className="relative flex h-2.5 w-2.5 mr-1 pt-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                    </span>
                    Built for Indian Farmers 🇮🇳
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 leading-tight">
                    Smart Farming Advice on
                    <span className="text-emerald-600 block sm:inline sm:ml-2">Any Phone</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-500 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                    Instant voice-based crop advice in your language. No app required.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="#signup"
                        className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-3 font-medium"
                    >
                        <Phone size={20} />
                        <span>Start Free Now</span>
                    </motion.a>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
                    {[
                        { icon: <Smartphone size={24} />, text: "No App Needed" },
                        { icon: <Phone size={24} />, text: "Works on Any Phone" },
                        { icon: <Mic size={24} />, text: "Voice-Based" },
                        { icon: <ShieldCheck size={24} />, text: "24/7 Monitoring" },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 p-4 text-slate-600">
                            <div className="text-emerald-600">{feature.icon}</div>
                            <span className="font-medium text-sm text-center">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
}

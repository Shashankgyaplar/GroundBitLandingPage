import React from 'react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
    const steps = [
        { num: 1, title: "24/7 Field Monitoring", desc: "IoT device tracks soil and weather." },
        { num: 2, title: "Simple Voice Interaction", desc: "Use WhatsApp voice notes or missed calls." },
        { num: 3, title: "Instant AI Reply", desc: "Answers back in <10s in your language." },
        { num: 4, title: "Community Risk Alerts", desc: "Voice alerts sent to nearby farmers." }
    ];

    return (
        <section className="py-32 px-4 bg-white overflow-hidden relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-20 text-center tracking-tight"
                >
                    How It Works
                </motion.h2>

                <div className="space-y-12 max-w-2xl mx-auto">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-6 border-l-2 border-slate-200 pl-6 pb-6"
                        >
                            <div className="text-xl font-bold text-slate-300">
                                0{step.num}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                                <p className="text-base text-slate-500">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

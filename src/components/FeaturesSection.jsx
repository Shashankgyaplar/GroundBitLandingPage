import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mic, Globe2, Radio, CloudRain, BellRing, Zap } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        { icon: <Smartphone strokeWidth={2.5} />, title: "Works on Any Phone", desc: "Basic keypad phones supported." },
        { icon: <Mic strokeWidth={2.5} />, title: "Voice-Based", desc: "Speak normally. No typing needed." },
        { icon: <Globe2 strokeWidth={2.5} />, title: "Multilingual", desc: "Hindi, Kannada, Tamil, Telugu." },
        { icon: <Radio strokeWidth={2.5} />, title: "Sound Pest Detection", desc: "Sensors identify pests by sound." },
        { icon: <CloudRain strokeWidth={2.5} />, title: "Field Monitoring", desc: "Solar-powered soil & temp tracking." },
        { icon: <BellRing strokeWidth={2.5} />, title: "Community Alerts", desc: "Automatic warnings for neighbor farms." },
        { icon: <Zap strokeWidth={2.5} />, title: "Ultra-Fast Responses", desc: "Actionable advice in under 10s." },
    ];

    return (
        <section className="py-32 px-4 bg-brand-light/20 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-6 tracking-tight">Built For Indian Farms</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand/5 hover:shadow-xl hover:border-brand/20 transition-all group overflow-hidden relative cursor-default"
                        >
                            <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(f.icon, { size: 30 })}
                            </div>
                            <h3 className="font-extrabold text-xl text-dark mb-3 leading-snug">{f.title}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">{f.desc}</p>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand/5 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-multiply pointer-events-none -z-20"></div>
        </section>
    );
}

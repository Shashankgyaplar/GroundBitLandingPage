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
        <section className="py-24 px-4 bg-white border-b border-slate-100">
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
                            className="flex flex-col items-start gap-4 p-4 border-b border-slate-100"
                        >
                            <div className="text-dark">
                                {React.cloneElement(f.icon, { size: 28 })}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-dark mb-1">{f.title}</h3>
                                <p className="text-slate-500 font-medium text-sm">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

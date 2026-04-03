import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, MessageSquare, AlertTriangle } from 'lucide-react';

export default function DifferentiatorSection() {
    const steps = [
        { icon: <Cpu size={36} className="text-emerald-500" />, title: "1. Watches 24/7", desc: "ESP32 monitors field continuously.", bgColor: "bg-emerald-50" },
        { icon: <MessageSquare size={36} className="text-blue-500" />, title: "2. Ask Questions", desc: "Report issues via WhatsApp or missed call.", bgColor: "bg-blue-50" },
        { icon: <AlertTriangle size={36} className="text-amber-500" />, title: "3. AI Detects", desc: "Spots pests via audio instantly.", bgColor: "bg-amber-50" },
        { icon: <Users size={36} className="text-brand" />, title: "4. Community Alert", desc: "1 detection protects 50 farms.", bgColor: "bg-brand-light/50" }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50 relative border-b border-slate-100">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-6 tracking-tight">How The Community Works</h2>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Turns one device into protection for the whole <span className="text-brand">village</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="bg-white border-l-4 border-slate-200 p-6 flex flex-col"
                        >
                            <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center mb-6`}>
                                {React.cloneElement(step.icon, { size: 24 })}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    ))}

                </div>

                <div className="mt-24 bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 text-dark tracking-tight">The GroundBit Advantage</h3>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Cross-platform voice reporting paired with AI sensors.
                            <br />
                            <span className="font-bold text-dark mt-2 block">
                                1 detection protects 50 farms.
                            </span>
                        </p>
                    </div>
                    <a
                        href="#signup"
                        className="px-8 py-4 bg-dark text-white font-medium text-lg self-center self-stretch md:self-auto text-center"
                    >
                        Join the Network
                    </a>
                </div>
            </div>
        </section>
    );
}

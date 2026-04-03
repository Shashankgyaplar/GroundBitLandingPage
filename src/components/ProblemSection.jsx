import React from 'react';
import { motion } from 'framer-motion';
import { Bug, MapPinOff, CloudLightning } from 'lucide-react';

export default function ProblemSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="py-24 px-4 bg-white border-b border-slate-100">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-5xl mx-auto text-center"
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-16 tracking-tight">
                    The Challenge Small Farmers Face
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Bug size={40} className="text-red-500" />, title: "Silent Crop Diseases", desc: "Pests spread before they're visible.", bg: "bg-red-50", ring: "ring-red-100" },
                        { icon: <MapPinOff size={40} className="text-slate-500" />, title: "No Near Experts", desc: "Costly and distant agri-experts.", bg: "bg-slate-50", ring: "ring-slate-100" },
                        { icon: <CloudLightning size={40} className="text-amber-500" />, title: "Sudden Weather Shifts", desc: "Unpredictable weather destroys crops.", bg: "bg-amber-50", ring: "ring-amber-100" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-8 flex flex-col items-center text-center transition-all duration-300"
                        >
                            <div className="mb-6">
                                {item.icon}
                            </div>
                            <h3 className="font-extrabold text-2xl mb-4 text-dark">{item.title}</h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

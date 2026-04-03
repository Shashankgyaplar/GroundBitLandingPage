import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Ramesh Kumar",
            crop: "Tomato Farmer, Karnataka",
            text: "The machine calls me when danger arrives. I saved my tomatoes this season."
        },
        {
            name: "Suresh Patil",
            crop: "Cotton Farmer, Maharashtra",
            text: "I give a missed call and it tells me what to spray. My whole village is safer."
        }
    ];

    return (
        <section className="py-32 px-4 bg-[#fbfbfb] relative border-t border-slate-100">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight">Trusted by Farmers</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
                            whileHover={{ y: -5 }}
                            className="glass-card bg-white p-10 md:p-12 rounded-[2.5rem] relative shadow-md hover:shadow-xl transition-all duration-300 border-white/80"
                        >
                            <Quote className="text-brand/10 absolute top-8 left-8 w-20 h-20 -rotate-12" />
                            <p className="text-xl text-slate-600 font-medium italic relative z-10 mb-10 mt-6 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand to-emerald-600 rounded-full flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-brand/30">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-dark tracking-tight">{t.name}</h4>
                                    <p className="text-sm font-medium text-slate-500">{t.crop}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

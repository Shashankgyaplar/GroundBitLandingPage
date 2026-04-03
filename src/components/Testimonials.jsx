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
        <section className="py-24 px-4 bg-white relative border-b border-slate-100">
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
                        <div
                            key={i}
                            className="bg-white p-8 border border-slate-200"
                        >
                            <p className="text-lg text-slate-700 italic mb-8">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="font-bold text-dark">{t.name}</h4>
                                    <p className="text-sm text-slate-500">{t.crop}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

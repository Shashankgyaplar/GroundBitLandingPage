import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
    const { t } = useTranslation();
    const testimonials = [
        {
            text: t('testimonials.t1_text', "The machine calls me when danger arrives. I saved my tomatoes this season."),
            name: t('testimonials.t1_name', "Ramesh Kumar"),
            crop: t('testimonials.t1_crop', "Tomato Farmer, Karnataka")
        },
        {
            text: t('testimonials.t2_text', "I give a missed call and it tells me what to spray. My whole village is safer."),
            name: t('testimonials.t2_name', "Suresh Patil"),
            crop: t('testimonials.t2_crop', "Cotton Farmer, Maharashtra")
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight">{t('testimonials.title', 'Trusted by Farmers')}</h2>
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

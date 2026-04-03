import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Clock, CloudRain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProblemSection() {
    const { t } = useTranslation();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    const problems = [
        { icon: <Bug size={32} className="text-rose-500" />, title: t('problem.c1', 'Pests destroy crops.') },
        { icon: <Clock size={32} className="text-amber-500" />, title: t('problem.c2', 'Late advice means losses.') },
        { icon: <CloudRain size={32} className="text-blue-500" />, title: t('problem.c3', 'Weather ruins harvest.') }
    ];

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
                    {t('problem.title', 'The Challenge Small Farmers Face')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, i) => (
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
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, WifiOff, Network } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
    const { t } = useTranslation();
    const features = [
        { icon: <Globe strokeWidth={2.5} />, title: t('features.f1_title', "Cross-Platform"), desc: t('features.f1_desc', "Works on WhatsApp and dumb phones.") },
        { icon: <MessageSquare strokeWidth={2.5} />, title: t('features.f2_title', "Instant Voice AI"), desc: t('features.f2_desc', "Understands regional dialects.") },
        { icon: <WifiOff strokeWidth={2.5} />, title: t('features.f3_title', "Offline Fallback"), desc: t('features.f3_desc', "SMS works without internet.") },
        { icon: <Network strokeWidth={2.5} />, title: t('features.f4_title', "Community Grid"), desc: t('features.f4_desc', "One device protects multiple farms.") }
    ];

    return (
        <section className="py-24 px-4 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">{t('features.title', 'Why GroundBit?')}</h2>
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

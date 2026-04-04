import React from 'react';
import { motion } from 'framer-motion';
import { Bug, MessageCircle, Mic, ShieldCheck, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
    const { t } = useTranslation();
    const features = [
        { icon: <Bug strokeWidth={2.5} />, title: t('features.f1_title', "Pest Detection"), desc: t('features.f1_desc', "Identify crop diseases and pests instantly.") },
        { icon: <MessageCircle strokeWidth={2.5} />, title: t('features.f2_title', "WhatsApp Alerts"), desc: t('features.f2_desc', "Receive real-time alerts directly on WhatsApp.") },
        { icon: <Mic strokeWidth={2.5} />, title: t('features.f3_title', "Voice Alerts"), desc: t('features.f3_desc', "Get spoken guidance in your local language.") },
        { icon: <ShieldCheck strokeWidth={2.5} />, title: t('features.f4_title', "24/7 Monitoring"), desc: t('features.f4_desc', "Continuous crop monitoring and updates.") },
        { icon: <Smartphone strokeWidth={2.5} />, title: t('features.f5_title', "No App Needed"), desc: t('features.f5_desc', "Works on any phone, no installation required.") }
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
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight">{t('features.title', 'Why Farmers Choose GroundBit')}</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

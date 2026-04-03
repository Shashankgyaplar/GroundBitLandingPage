import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DemoSection() {
    const { t } = useTranslation();
    return (
        <section className="py-24 px-4 bg-slate-50 border-b border-slate-100">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-dark">{t('demo.title', 'See It In Action')}</h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{t('demo.subtitle', 'Uses tools farmers already have.')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* WhatsApp */}
                    <motion.div
                        className="bg-white p-8 border border-slate-200 flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-12 relative z-10">
                            <div className="bg-emerald-50 p-3 rounded-lg">
                                <MessageCircle size={32} className="text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark tracking-tight">{t('demo.whatsapp', 'WhatsApp Flow')}</h3>
                        </div>

                        <div className="space-y-6 relative z-10 flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-emerald-50 text-dark p-4 rounded-lg ml-auto w-4/5 border border-emerald-100"
                            >
                                <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> {t('demo.vn', 'Voice Note (0:04)')}
                                </p>
                                <p className="text-lg leading-relaxed font-medium">"{t('demo.vn_text', 'Cotton leaves have white spots. Help?')}"</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="bg-slate-100 text-dark p-4 rounded-lg mr-auto w-4/5 border border-slate-200"
                            >
                                <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">{t('demo.ai_resp', 'AI Voice Response')}</p>
                                <p className="text-base leading-relaxed font-bold">{t('demo.ai_text', 'White spots indicate Whitefly. Spray neem oil.')}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Missed call */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 border border-slate-200 flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-12 relative z-10">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <Phone size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark tracking-tight">{t('demo.keypad', 'Keypad Phone')}</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 py-8">
                            <div className="relative">
                                <div className="bg-slate-50 p-6 rounded-full border border-slate-200">
                                    <Phone size={40} className="text-slate-400 drop-shadow-sm" />
                                </div>
                            </div>
                            <p className="text-center text-slate-500 text-lg font-medium mt-6">
                                {t('demo.mc', 'Missed Call to')}
                            </p>
                            <div className="font-mono text-dark text-3xl font-bold mt-2 tracking-widest bg-slate-100 px-6 py-2 rounded-lg border border-slate-200">
                                1800-XXX
                            </div>
                            <div className="w-[1px] h-10 bg-slate-200 my-4"></div>
                            <p className="text-center text-emerald-600 font-medium text-base px-4 py-2 border border-emerald-100 bg-emerald-50 rounded-lg">
                                {t('demo.mc_desc', 'Instant voice call back with local advice.')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}

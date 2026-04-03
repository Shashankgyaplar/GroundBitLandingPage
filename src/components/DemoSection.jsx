import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function DemoSection() {
    return (
        <section className="py-32 px-4 bg-dark text-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">See It In Action</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Built around the tools farmers already use every single day.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 60 }}
                        className="bg-slate-800/80 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-700/50 relative overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(37,211,102,0.15)] transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-12 relative z-10">
                            <div className="bg-[#25D366]/20 p-4 rounded-2xl">
                                <MessageCircle size={36} className="text-[#25D366]" fill="#25D366" />
                            </div>
                            <h3 className="text-3xl font-extrabold tracking-tight">WhatsApp Flow</h3>
                        </div>

                        <div className="space-y-6 relative z-10 flex-1">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, originX: 1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#075E54] text-white p-5 rounded-3xl rounded-tr-sm ml-auto w-4/5 shadow-lg border border-white/5"
                            >
                                <p className="text-xs text-emerald-200 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Voice Note (0:12)
                                </p>
                                <p className="text-lg leading-relaxed font-medium">"My cotton leaves have white spots, what should I do?"</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, originX: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="bg-[#25D366] text-[#075E54] p-5 rounded-3xl rounded-tl-sm mr-auto w-4/5 shadow-lg shadow-emerald-900/50 border border-white/20"
                            >
                                <p className="text-xs text-teal-900 font-bold mb-2 uppercase tracking-wider">AI Voice Response</p>
                                <p className="text-lg leading-relaxed font-bold">Hello! The white spots are likely Whitefly damage. GroundBit sensor 3 km away also heard them. Spray neem oil...</p>
                            </motion.div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#25D366]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    </motion.div>

                    {/* Missed call */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 60 }}
                        className="bg-slate-800/80 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-700/50 relative overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-12 relative z-10">
                            <div className="bg-blue-500/20 p-4 rounded-2xl">
                                <Phone size={36} className="text-blue-400" fill="currentColor" />
                            </div>
                            <h3 className="text-3xl font-extrabold tracking-tight">Keypad Phone</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 bg-slate-900/80 rounded-[2rem] border border-slate-700 relative z-10 py-12 px-6">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl animate-pulse opacity-30"></div>
                                <div className="bg-blue-500/20 p-6 rounded-full relative z-10 border border-blue-500/30">
                                    <Phone size={48} className="text-blue-400 drop-shadow-md" />
                                </div>
                            </motion.div>
                            <p className="text-center text-slate-300 text-xl font-medium mt-8">
                                Farmer gives Missed Call to
                            </p>
                            <div className="font-mono text-white text-4xl font-extrabold mt-3 tracking-widest bg-slate-800 px-6 py-3 rounded-2xl border border-slate-700 shadow-inner">
                                1800-XXX
                            </div>
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "40px" }}
                                className="w-[2px] bg-gradient-to-b from-blue-500 to-emerald-400 my-6"
                            ></motion.div>
                            <p className="text-center text-emerald-400 font-bold text-lg px-4 bg-emerald-950/40 py-3 rounded-xl border border-emerald-900/50">
                                System calls back instantly with voice advice in local language.
                            </p>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute top-0 left-[20%] w-[60%] h-full bg-brand/5 blur-[120px] -z-0 rounded-full pointer-events-none"></div>
        </section>
    );
}

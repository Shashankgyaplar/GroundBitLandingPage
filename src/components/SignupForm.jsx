import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SignupForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            toast.success('Registration successful!', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#25D366',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '16px',
                    borderRadius: '16px'
                },
            });
        }, 1500);
    };

    return (
        <section className="py-32 px-4 bg-emerald-50/50 relative overflow-hidden" aria-labelledby="form-heading">
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(37,211,102,0.15)] p-10 md:p-16 border border-emerald-100 relative overflow-hidden"
                >
                    <div className="text-center mb-12 relative z-10">
                        <h2 id="form-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-4 tracking-tight">Protect Your Farm</h2>
                        <p className="text-xl text-slate-500 font-medium">Join the network. We'll contact you to configure alerts.</p>
                    </div>

                    {!success ? (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10" aria-live="polite">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="block text-lg font-bold text-dark ml-2">Full Name</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    aria-required="true"
                                    autoComplete="name"
                                    placeholder="e.g. Ramesh Kumar"
                                    className="w-full bg-slate-50 border border-slate-200 text-dark text-xl px-6 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand/20 focus:border-brand transition-all shadow-sm placeholder:text-slate-400 font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mobileNumber" className="block text-lg font-bold text-dark ml-2">Mobile Number</label>
                                <div className="flex relative items-center">
                                    <span className="absolute left-6 text-slate-400 font-extrabold text-xl" aria-hidden="true">+91</span>
                                    <input
                                        id="mobileNumber"
                                        name="phone"
                                        type="tel"
                                        required
                                        aria-required="true"
                                        autoComplete="tel-national"
                                        pattern="[0-9]{10}"
                                        title="Please enter exactly 10 digits"
                                        placeholder="98765 43210"
                                        className="w-full bg-slate-50 border border-slate-200 text-dark text-xl pl-16 pr-6 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand/20 focus:border-brand transition-all shadow-sm tracking-widest font-medium placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="languagePref" className="block text-lg font-bold text-dark ml-2">Preferred Language</label>
                                <div className="relative">
                                    <select
                                        id="languagePref"
                                        name="language"
                                        required
                                        aria-required="true"
                                        autoComplete="language"
                                        defaultValue=""
                                        className="w-full bg-slate-50 border border-slate-200 text-dark text-xl px-6 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand/20 focus:border-brand transition-all shadow-sm font-medium appearance-none"
                                    >
                                        <option value="" disabled>Select a language</option>
                                        <option value="hi">Hindi (हिंदी)</option>
                                        <option value="mr">Marathi (मराठी)</option>
                                        <option value="te">Telugu (తెలుగు)</option>
                                        <option value="ta">Tamil (தமிழ்)</option>
                                        <option value="kn">Kannada (ಕನ್ನಡ)</option>
                                        <option value="en">English</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-slate-400" aria-hidden="true">
                                        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                aria-disabled={loading}
                                className="w-full btn-primary text-2xl py-5 mt-4 flex items-center justify-center gap-3 disabled:opacity-70 shadow-[0_15px_35px_rgba(37,211,102,0.25)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] font-extrabold"
                            >
                                {loading ? <Loader2 className="animate-spin" size={28} aria-hidden="true" /> : null}
                                {loading ? "Registering..." : "Get Started Now"}
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            className="text-center py-12 relative z-10"
                            aria-live="polite"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-flex items-center justify-center w-28 h-28 bg-brand-light rounded-full mb-8 text-brand shadow-[0_0_40px_rgba(37,211,102,0.3)]"
                            >
                                <CheckCircle2 size={56} strokeWidth={2.5} aria-hidden="true" />
                            </motion.div>
                            <h3 className="text-4xl font-extrabold text-dark mb-4 tracking-tight">Registration Successful!</h3>
                            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                                We will contact you on WhatsApp or call you shortly.<br /> Welcome to the GroundBit community!
                            </p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="text-brand font-extrabold text-lg hover:text-brand-dark transition-colors px-8 py-4 rounded-full hover:bg-brand-light border border-transparent hover:border-brand/20 focus:outline-none focus:ring-4 focus:ring-brand/20"
                            >
                                Register another number
                            </button>
                        </motion.div>
                    )}

                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/60 rounded-full blur-[80px] pointer-events-none" aria-hidden="true"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-[80px] pointer-events-none" aria-hidden="true"></div>
                </motion.div>
            </div>
            <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-multiply pointer-events-none -z-20" aria-hidden="true"></div>
        </section>
    );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function SignupForm() {
    const { t } = useTranslation();
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
        <section className="py-24 px-4 bg-slate-50 border-b border-slate-100" aria-labelledby="form-heading">
            <div className="max-w-2xl mx-auto relative z-10">
                <div
                    className="bg-white border border-slate-200 p-8 md:p-12 text-left"
                >
                    <div className="text-center mb-12 relative z-10">
                        <h2 id="form-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-4 tracking-tight">{t('form.title', 'Protect Your Farm')}</h2>
                        <p className="text-xl text-slate-500 font-medium">
                            {t('form.subtitle', 'Get 3 months free when you register your number today.')}
                        </p>
                    </div>

                    {!success ? (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10" aria-live="polite">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-bold text-dark mb-2 uppercase tracking-wide">
                                    {t('form.name', 'Full Name')} <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        aria-required="true"
                                        autoComplete="name"
                                        placeholder={t('form.name_ph', 'e.g. Ramesh Kumar')}
                                        className="w-full bg-white border border-slate-300 text-dark px-4 py-3 focus:outline-none focus:border-dark placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-dark mb-2 uppercase tracking-wide">
                                    {t('form.mobile', 'Mobile Number')} <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative flex items-center border border-slate-300 bg-white focus-within:border-dark transition-all">
                                    <div className="flex items-center justify-center pl-4 pr-3 border-r border-slate-200 text-dark font-bold">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        aria-required="true"
                                        autoComplete="tel"
                                        pattern="[0-9 ]{10,12}"
                                        title="Please enter exactly 10 digits"
                                        placeholder="98765 43210"
                                        maxLength="11"
                                        className="w-full bg-transparent text-dark px-4 py-3 focus:outline-none placeholder:text-slate-400"
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
                                        className="w-full bg-white border border-slate-300 text-dark px-4 py-3 focus:outline-none focus:border-dark appearance-none"
                                    >
                                        <option value="" disabled>Select a language</option>
                                        <option value="hi">Hindi</option>
                                        <option value="te">Telugu</option>
                                        <option value="ta">Tamil</option>
                                        <option value="kn">Kannada</option>
                                        <option value="en">English</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-slate-400" aria-hidden="true">
                                        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                aria-disabled={loading}
                                className="w-full bg-dark text-white text-lg py-4 mt-8 font-bold disabled:opacity-70 hover:bg-slate-800 transition-colors"
                            >
                                {loading ? t('form.btn_loading', 'Registering...') : t('form.btn', 'Get Started Now')}
                            </button>
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
                            <h3 className="text-4xl font-extrabold text-dark mb-4 tracking-tight">{t('form.success', 'Registration Successful!')}</h3>
                            <p className="text-xl text-slate-500 font-medium mb-12">
                                {t('form.success_desc', "We'll contact you to finish setup.")}
                            </p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="text-brand font-bold text-lg hover:underline underline-offset-4 focus:outline-none"
                            >
                                {t('form.success_btn', 'Register another number')}
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}

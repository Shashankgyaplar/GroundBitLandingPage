import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function SignupForm() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value.trim();
        const rawPhone = form.phone.value.replace(/\s+/g, '');
        const language = form.language.value;

        if (!name) {
            toast.error(t('form.err_name', 'Name is required.'));
            return;
        }

        if (rawPhone.length !== 10 || !/^\d+$/.test(rawPhone)) {
            toast.error(t('form.err_phone', 'Enter valid 10-digit number'));
            return;
        }

        if (!language) {
            toast.error(t('form.err_lang', 'Select a language'));
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://16-170-106-41.nip.io/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    phone: "91" + rawPhone,
                    language
                })
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            setSuccess(true);

            toast.success(t('form.success_toast', 'Registration successful!'), {
                style: {
                    background: '#25D366',
                    color: '#fff'
                }
            });

        } catch (error) {
            toast.error(error.message || t('form.err_general', 'Something went wrong'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 px-4 bg-slate-50 border-b border-slate-100">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200 p-8 md:p-12">

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold mb-4">
                            {t('form.title', 'Protect Your Farm')}
                        </h2>

                    </div>

                    {!success ? (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* NAME */}
                            <div>
                                <label className="font-bold">
                                    {t('form.name', 'Full Name')} *
                                </label>
                                <input
                                    name="name"
                                    required
                                    placeholder={t('form.name_ph', 'Ramesh Kumar')}
                                    className="w-full border px-4 py-3 mt-2"
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <label className="font-bold">
                                    {t('form.mobile', 'Mobile Number')} *
                                </label>
                                <div className="flex border mt-2">
                                    <span className="px-3 py-3 bg-gray-100">+91</span>
                                    <input
                                        name="phone"
                                        required
                                        placeholder="9876543210"
                                        className="w-full px-4 py-3 outline-none"
                                    />
                                </div>
                            </div>

                            {/* LANGUAGE */}
                            <div>
                                <label className="font-bold">
                                    {t('form.language', 'Preferred Language')}
                                </label>
                                <select
                                    name="language"
                                    required
                                    defaultValue=""
                                    className="w-full border px-4 py-3 mt-2"
                                >
                                    <option value="" disabled>
                                        {t('form.select_language', 'Select a language')}
                                    </option>
                                    <option value="hi-IN">Hindi</option>
                                    <option value="te-IN">Telugu</option>
                                    <option value="ta-IN">Tamil</option>
                                    <option value="kn-IN">Kannada</option>
                                    <option value="en-IN">English</option>
                                </select>
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-4 font-bold"
                            >
                                {loading
                                    ? t('form.btn_loading', 'Registering...')
                                    : t('form.btn', 'Get Started')}
                            </button>

                        </form>
                    ) : (
                        <motion.div className="text-center py-10 flex flex-col items-center justify-center">
                            <CheckCircle2 size={60} className="text-brand" />
                            <h3 className="text-2xl font-bold mt-4">
                                {t('form.success', 'Registration Successful')}
                            </h3>
                        </motion.div>
                    )}

                </div>
            </div>
        </section>
    );
}
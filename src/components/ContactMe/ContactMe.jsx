import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus('');

 const templateParams = {
  name: formData.firstName + ' ' + formData.lastName,  // Template uses {{name}}
  email: formData.email,                               // Template uses {{email}}
  message: formData.message,                           // ✅ This is correct
  title: 'Contact Us',                                 // Template expects {{title}} in subject
  time: new Date().toLocaleString(),                  // Template uses {{time}} in content
};

  try {
    await emailjs.send(
      'service_wxf05yy',
      'template_hmsycja',
      templateParams,
      'IDskYO3dRynE0FEoq'
    );
    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setLoading(false);
    setTimeout(() => setStatus(''), 5000);
  } catch (error) {
    console.error(error);
    setStatus('error');
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden flex items-center justify-center px-4">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-white/5 backdrop-blur-2xl shadow-[0_35px_120px_rgba(15,23,42,0.85)] overflow-hidden"
      >
        {/* Subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-y-10 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] p-8 sm:p-10 lg:p-12">
          {/* Left: form */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Build Something Great
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300/90 mb-8 max-w-xl leading-relaxed"
            >
              I&apos;m always excited to collaborate, innovate, and solve real-world
              problems. Tell me about your project, idea, or just say hello —
              I&apos;ll get back to you as soon as possible.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2 tracking-wide">
                    First Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-slate-900/50 rounded-2xl border border-white/10 text-sm text-white placeholder-slate-400 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-2 tracking-wide">
                    Last Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-slate-900/50 rounded-2xl border border-white/10 text-sm text-white placeholder-slate-400 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 tracking-wide">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-slate-900/50 rounded-2xl border border-white/10 text-sm text-white placeholder-slate-400 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2 tracking-wide">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-slate-900/50 rounded-2xl border border-white/10 text-sm text-white placeholder-slate-400 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Share some details about what you have in mind..."
                />
              </div>

              {/* Status message */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium flex items-center gap-2 ${
                    status === "success"
                      ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                      : "bg-rose-500/10 text-rose-300 border border-rose-500/40"
                  }`}
                >
                  <span>{status === "success" ? "✅" : "⚠️"}</span>
                  <span>
                    {status === "success"
                      ? "Message sent successfully! I’ll reach out soon."
                      : "Something went wrong. Please try again."}
                  </span>
                </motion.div>
              )}

              <motion.button
                whileHover={!loading ? { scale: 1.03, y: -1 } : {}}
                whileTap={!loading ? { scale: 0.97, y: 0 } : {}}
                type="submit"
                disabled={loading}
                className={`w-full mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 ${
                  loading
                    ? "bg-slate-600 cursor-not-allowed text-slate-200"
                    : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400 shadow-[0_15px_40px_rgba(79,70,229,0.65)]"
                }`}
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                      className="h-4 w-4 rounded-full border-2 border-white/60 border-t-transparent"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="opacity-90" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>

          {/* Right: decorative / info panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="relative hidden lg:flex flex-col justify-between rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80 p-6 overflow-hidden"
          >
            <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/80 mb-3">
                Let&apos;s connect
              </p>
              <p className="text-lg font-semibold text-slate-50 mb-3">
                Prefer email?
              </p>
              <p className="text-sm text-slate-300/90 mb-4">
                You can also reach me directly at:
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-sky-300 border border-sky-500/40">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                rishabsharma2106@gmail.com
              </p>
            </div>

            <div className="relative mt-8">
              <p className="text-xs font-semibold text-slate-300/80 mb-2">
                Typical response time
              </p>
              <p className="text-sm text-slate-200 mb-4">Within 24 hours</p>

              <div className="h-2 w-full rounded-full bg-slate-800/80 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                />
              </div>

              <p className="mt-4 text-xs text-slate-400">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

import CompressImage from "../../assets/Compress Image.jpg";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return { theme, toggleTheme };
};

export default function UI() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Full Stack Developer", "Software Engineer"];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express","REST API"] },
    { category: "Database", items: ["Mongo DB","MySQL"] },
    { category: "Programming Language", items: ["Java","Python"] },
    { category: "Tools", items: ["VS Code","Postman","Git","GitHub"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
  };

  return (
    <>
      {/* UNIFORM COLOR SYSTEM - Add this to your global CSS */}
      <style jsx global>{`
        :root {
          --bg-primary: #0a0a0f;
          --bg-secondary: #1a1a2e;
          --bg-glass: rgba(255, 255, 255, 0.05);
          --bg-glass-hover: rgba(255, 255, 255, 0.10);
          --accent-primary: #6366f1; /* Indigo */
          --accent-secondary: #a855f7; /* Purple */
          --accent-tertiary: #ec4899; /* Pink */
          --text-primary: #ffffff;
          --text-secondary: #a0a0cc;
          --border-primary: rgba(255, 255, 255, 0.10);
          --border-hover: rgba(99, 102, 241, 0.30);
        }
        [data-theme="light"] {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --bg-glass: rgba(0, 0, 0, 0.03);
          --bg-glass-hover: rgba(0, 0, 0, 0.06);
          --accent-primary: #4f46e5;
          --accent-secondary: #9333ea;
          --accent-tertiary: #be185d;
          --text-primary: #0f0f23;
          --text-secondary: #64748b;
          --border-primary: rgba(0, 0, 0, 0.08);
          --border-hover: rgba(79, 70, 229, 0.20);
        }
        .gradient-primary { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary)); }
        .gradient-button { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); }
        .text-gradient-primary { background: linear-gradient(135deg, var(--text-primary), var(--accent-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .text-gradient-accent { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

      <div className="relative bg-[var(--bg-primary)] min-h-screen overflow-hidden pt-16">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b-[1px] border-[var(--border-primary)] bg-[var(--bg-glass)]">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
            <h1 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
              Welcome to My Portfolio
            </h1>
            
            {/* Scroll Progress */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 gradient-primary origin-left rounded-full"
              style={{ scaleX }}
            />
            
            <button
              onClick={toggleTheme}
              className="relative w-12 h-6 bg-[var(--bg-glass)] hover:bg-[var(--bg-glass-hover)] border border-[var(--border-primary)] rounded-full p-1 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 group"
              aria-label="Toggle theme"
            >
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 gradient-primary rounded-full shadow-lg shadow-[var(--accent-primary)]/25 transform transition-all duration-500 ease-in-out group-hover:shadow-[var(--accent-primary)]/50 ${
                theme === "dark" ? "translate-x-5 rotate-180 scale-110" : "translate-x-0 rotate-0 scale-100"
              }`} />
              <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                theme === "dark" ? "opacity-0 scale-75" : "opacity-100 scale-100"
              }`}>
                ☀️
              </span>
              <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}>
                🌙
              </span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section className="relative w-full px-6 py-24 z-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div variants={containerVariants} className="flex flex-col items-center justify-center gap-16 max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-8 w-full">
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-black text-gradient-primary drop-shadow-2xl leading-tight">
                Hi, I'm a{" "}
                <span className={`bg-gradient-to-r ${titleIndex === 0 ? "from-pink-400 via-orange-400 to-yellow-400" : "from-emerald-400 via-blue-400 to-purple-400"} bg-clip-text text-transparent animate-pulse transition-all duration-500`}>
                  {titles[titleIndex]}
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-[var(--text-secondary)] leading-relaxed backdrop-blur-sm mx-auto max-w-2xl">
                Crafting pixel-perfect web experiences with cutting-edge tech that solve real-world problems
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/Viewproject")}
                  className="group gradient-button hover:from-[var(--accent-primary)] hover:to-[var(--accent-secondary)] px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:shadow-[var(--accent-primary)]/25 backdrop-blur-md border border-[var(--border-primary)] hover:border-[var(--border-hover)] transition-all duration-500 text-white"
                >
                  View My Work
                  <motion.div initial={{ x: 0 }} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 500, damping: 17 }}>
                    <ArrowRight className="group-hover:text-white" size={20} />
                  </motion.div>
                </motion.button>

                <motion.a
                  href="/Rishab Sharma Resume.pdf"
                  download="Rishab Sharma Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  className="border border-[var(--border-primary)] px-8 py-4 rounded-2xl backdrop-blur-md font-semibold hover:border-[var(--border-hover)] transition-all duration-300 inline-flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-glass-hover)]"
                >
                  Download Resume
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 pt-4 justify-center">
                {[
                  { Icon: Github, href: "https://github.com/Rishabshar" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/rishab-sharma-9823ba285/" },
                  { Icon: Mail, href: "mailto:rishabsharma2106@gmail.com" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    className="p-3 bg-[var(--bg-glass)] hover:bg-[var(--bg-glass-hover)] rounded-xl backdrop-blur-sm border border-[var(--border-primary)] hover:border-[var(--border-hover)] transition-all duration-300"
                  >
                    <item.Icon size={24} className="text-[var(--text-primary)]" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <section className="w-full px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 rounded-3xl blur-xl group-hover:opacity-75 transition-all duration-500" />
                <img
                  src={CompressImage}
                  alt="Profile"
                  className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-[var(--border-primary)] relative z-10 group-hover:border-[var(--accent-primary)]/50 transition-all duration-500"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-5xl font-black text-gradient-primary">
                About{" "}
                <span className="text-gradient-accent">Me</span>
              </h2>
              <div className="space-y-6 text-xl leading-relaxed backdrop-blur-sm">
                <p className="text-[var(--text-secondary)]">
                  Dynamic MERN Stack Developer skilled in building responsive web applications using MongoDB for databases, Express.js and Node.js for robust backends, and React for interactive UIs. Proficient in RESTful APIs, state management with Redux, and deploying scalable solutions on cloud platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full bg-[var(--bg-glass)] backdrop-blur-xl px-6 py-24 border-t border-[var(--border-primary)]">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-center mb-20 text-gradient-primary drop-shadow-2xl"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                className="group bg-[var(--bg-glass)] hover:bg-[var(--bg-glass-hover)] backdrop-blur-xl p-8 rounded-3xl border border-[var(--border-primary)] hover:border-[var(--border-hover)] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-6 group-hover:text-[var(--accent-secondary)] transition-colors">
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3 text-[var(--text-secondary)]"
                    >
                      <div className="w-2 h-2 gradient-primary rounded-full scale-0 group-hover:scale-100 transition-transform origin-left duration-300" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative px-6 py-24 sm:py-32 lg:px-8 bg-[var(--bg-primary)] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-[var(--border-primary)] shadow-[0_0_80px_rgba(15,23,42,0.9)]" />
          <div className="pointer-events-none absolute -top-40 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/30 via-[var(--accent-secondary)]/20 to-[var(--accent-tertiary)]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-32 h-72 w-72 rounded-full bg-gradient-to-br from-[var(--accent-tertiary)]/30 via-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gradient-primary"
            >
              Let's Build Something Great
              <br />
              <span className="text-gradient-accent">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto"
            >
              I'm always excited to collaborate, innovate, and solve real-world problems. Whether you have a project, idea, or just want to say hello — let's connect!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/contactme")}
                className="group gradient-button hover:from-[var(--accent-primary)] hover:to-[var(--accent-secondary)] px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-[var(--accent-primary)]/25 backdrop-blur-md border border-[var(--border-primary)] hover:border-[var(--border-hover)] transition-all duration-500 text-white"
              >
                Contact Me
                <motion.div initial={{ x: 0 }} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 500, damping: 17 }}>
                  <ArrowRight className="group-hover:text-white" size={20} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--bg-glass)] backdrop-blur-xl border-t border-[var(--border-primary)] px-6 py-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[var(--text-secondary)] text-lg backdrop-blur-sm"
            >
              Made with love by Rishab.
            </motion.p>
          </div>
        </footer>
      </div>
    </>
  );
}

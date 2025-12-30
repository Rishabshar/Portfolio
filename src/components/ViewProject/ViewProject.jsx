import { useState } from 'react';
import { motion, useScroll, useMotionValue, useSpring } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react'; // Removed ExternalLink

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "TaskFlow---Intelligent-Todo-Management-System",
      description: "askFlow is a full-stack React/Node.js task manager featuring secure JWT authentication, real-time analytics, and a responsive dark-mode UI with offline support.",
      tech: ["React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      github: "https://github.com/Rishabshar/TaskFlow---Intelligent-Todo-Management-System",
    },
    
  ];

  // Mouse tracking for magnetic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const { scrollYProgress } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-black min-h-screen overflow-hidden">
      
      {/* Enhanced Particle System */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[8px] h-[8px] bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full blur-sm"
          style={{
            left: `${Math.sin(i * 0.5) * 50 + 5}%`,
            top: `${Math.cos(i * 0.3) * 40 + 5}%`,
            x: springX,
            y: springY,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 30 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-24 pb-16 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            textShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 30px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.5)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight"
        >
          My Projects
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 backdrop-blur-sm max-w-2xl mx-auto leading-relaxed"
        >
          Explore cutting-edge projects built with modern technologies that solve real-world problems
        </motion.p>
      </motion.div>

      {/* Enhanced Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative perspective-1000"
              style={{ perspective: 1000 }}
            >
              {/* Enhanced 3D Glassmorphism Card */}
              <motion.div
                className="relative h-[420px] rounded-3xl overflow-hidden backdrop-blur-xl border border-white/15 hover:border-gradient-to-r hover:border-blue-400/50 hover:shadow-3xl hover:shadow-blue-500/25 shadow-2xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-gray-800/70 via-white/5 to-gray-900/70"
                whileHover={{ 
                  scale: 1.04,
                  y: -20,
                  rotateX: 5,
                  rotateY: 5,
                  border: "1px solid rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Enhanced Image with Dynamic Overlay */}
                <div className="relative w-full h-2/3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 absolute inset-0"
                  />
                  
                  {/* Dynamic Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent/60 to-transparent"
                    animate={{ 
                      background: hoveredProject === project.id 
                        ? "linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(139,92,246,0.8) 50%, rgba(236,72,153,0.7) 100%)" 
                        : "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Magnetic Shine Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100"
                    style={{ 
                      WebkitMask: "linear-gradient(90deg, transparent, black 50%, transparent)",
                      mask: "linear-gradient(90deg, transparent, black 50%, transparent)"
                    }}
                    animate={hoveredProject === project.id ? { x: ["-100%", "100%"] } : { x: "-100%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>

                {/* Enhanced Content Area */}
                <motion.div 
                  className="absolute inset-0 p-8 flex flex-col justify-end backdrop-blur-xl"
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0.3,
                    y: hoveredProject === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-black mb-4 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg"
                    animate={{ y: hoveredProject === project.id ? 0 : 10 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-200 mb-6 leading-relaxed backdrop-blur-sm text-sm lg:text-base"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredProject === project.id ? "auto" : 0,
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Neon Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-3 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        whileHover={{ 
                          scale: 1.1, 
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                          y: -2
                        }}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl text-xs lg:text-sm font-semibold border border-blue-400/40 hover:border-blue-400/80 text-blue-200 shadow-lg"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* ✅ ONLY GitHub BUTTON NOW - Perfectly centered */}
                  <motion.div 
                    className="flex justify-center pt-2" // ✅ Changed to center single button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      x: hoveredProject === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-white/50 shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center gap-2 group text-lg font-semibold" // ✅ Larger for single button
                    >
                      <Github size={24} className="group-hover:text-gray-900" />
                      <span className="hidden lg:inline">View Code</span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

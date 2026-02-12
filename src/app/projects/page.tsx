"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const featuredProjects = [
  {
    title: "LB Bridal",
    description: "Elegant bridal website showcasing wedding dresses and services with modern design and smooth user experience.",
    image: "/lb-bridal.jpg",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    link: "https://lb-bridal.com/",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "YID Bridal", 
    description: "Sophisticated bridal boutique website featuring stunning wedding collections and online booking system.",
    image: "/yid.jpg",
    tech: ["WordPress", "Custom Theme", "Booking"],
    link: "https://yidbridal.com/",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Al Sindian Group",
    description: "Corporate website for Al Sindian Group showcasing their business services and professional portfolio.",
    image: "/sindian.jpg", 
    tech: ["WordPress", "Custom Development", "CMS"],
    link: "https://alsindiangroup.ae/",
    gradient: "from-green-500 to-emerald-500"
  }
];

const mobileProjects = [
  {
    title: "Student Fitness Mobile Application for FSKM UiTM",
    description: "A real time tracking application for student fitness activities and progress monitoring.",
    image: "/fskm.jpg",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://www.youtube.com/watch?v=GpIrwiAK8-k&t=4s",
    gradient: "from-blue-500 to-purple-500"
  }
];

const caseStudies = [
  {
    title: "Calibration System",
    description: "Precision calibration management system for industrial equipment with automated scheduling and compliance tracking.",
    image: "/calibration-system.jpg",
    tech: ["Zoho Creator", "Deluge"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "ISO Document Control",
    description: "Comprehensive document management solution for ISO compliance with version control and audit trails.",
    image: "/iso-document-control.jpg",
    tech: ["Zoho Creator", "Deluge"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Maintenance Management",
    description: "Enterprise maintenance solution with predictive analytics, work order management, and resource optimization.",
    image: "/maintenance-management.jpg",
    tech: ["Zoho Creator", "Deluge"],
    gradient: "from-teal-500 to-cyan-500"
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<"web" | "zoho" | "mobile">("web");

  // Cache bust: v2 - mobile layout fixes

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative">
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Available for Projects</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Projects that I have worked on.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </section>

      {/* Category Toggle */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-12">
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200 inline-flex flex-col sm:flex-row gap-2 w-full sm:w-auto max-w-sm sm:max-w-none">
            <button
              onClick={() => setActiveCategory("web")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 sm:flex-none ${
                activeCategory === "web"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              🌐 Web Projects
            </button>
            <button
              onClick={() => setActiveCategory("zoho")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 sm:flex-none ${
                activeCategory === "zoho"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              ⚡ Zoho Solutions
            </button>
            <button
              onClick={() => setActiveCategory("mobile")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 sm:flex-none ${
                activeCategory === "mobile"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              📱 Mobile Apps
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        {activeCategory === "web" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  WordPress Development
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Custom WordPress websites built with modern design principles and user experience in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://picsum.photos/seed/${project.title}/400/300.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : activeCategory === "mobile" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Mobile Development
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Native mobile applications built with modern frameworks and best practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="hidden md:block lg:block"></div>
              {mobileProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Header */}
                    <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">📱</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://picsum.photos/seed/${project.title}/400/300.jpg`;
                          }}
                        />
                      </div>
                      <div className="flex justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base`}
                        >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch Demo
                      </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="hidden md:block lg:block"></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Zoho Creator Solutions
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Enterprise-grade business applications built with Zoho Creator and Deluge scripting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                    {/* Header */}
                    <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">⚡</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://picsum.photos/seed/${project.title}/400/300.jpg`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Enhanced Technologies Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Technology Stack
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Modern tools and technologies I use to bring your ideas to life
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "HTML", icon: "📄", color: "from-orange-500 to-red-500" },
              { name: "CSS", icon: "🎨", color: "from-blue-500 to-purple-500" },
              { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
              { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
              { name: "WordPress", icon: "🌐", color: "from-blue-500 to-cyan-500" },
              { name: "Zoho Creator", icon: "⚡", color: "from-orange-500 to-red-500" },
              { name: "Flutter", icon: "📱", color: "from-blue-500 to-purple-500" },
              { name: "Dart", icon: "🎯", color: "from-blue-600 to-cyan-600" },
              { name: "Firebase", icon: "🔥", color: "from-yellow-500 to-orange-500" },
              { name: "Deluge", icon: "🔧", color: "from-gray-600 to-gray-800" },
              { name: "PHP", icon: "🐘", color: "from-purple-500 to-indigo-500" },
              { name: "MySQL", icon: "🗄️", color: "from-blue-600 to-cyan-600" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 text-center">{tech.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 shadow-xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <span>Let's Work Together</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Have a Project in Mind?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to get in touch!
            </p>
            
            <div className="flex justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </motion.a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for freelance work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Quick response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Free consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
  type Transition,
} from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const projects = [
  { 
    title: "LB Bridal", 
    description: "Elegant bridal website showcasing wedding dresses and services with modern design and smooth user experience.",
    tags: ["WordPress", "Elementor", "WooCommerce", "Custom Design"],
    gradient: "from-purple-500 to-pink-500",
    category: "featured",
    link: "https://lb-bridal.com/",
    image: "/lb-bridal.jpg"
  },
  { 
    title: "YID Bridal", 
    description: "Sophisticated bridal boutique website featuring stunning wedding collections and online booking system.",
    tags: ["WordPress", "Custom Theme", "Booking System", "Responsive Design"],
    gradient: "from-blue-500 to-cyan-500",
    category: "featured",
    link: "https://yidbridal.com/",
    image: "/yid.jpg"
  },
  { 
    title: "Al Sindian Group", 
    description: "Corporate website for Al Sindian Group showcasing their business services and professional portfolio.",
    tags: ["WordPress", "Custom Development", "CMS", "Professional Design"],
    gradient: "from-green-500 to-emerald-500",
    category: "featured",
    link: "https://alsindiangroup.ae/",
    image: "/sindian.jpg"
  },
];

const zohoProjects = [
  {
    title: "Calibration System",
    description: "Precision calibration management system for industrial equipment with automated scheduling and compliance tracking using Zoho Creator.",
    image: "/calibration-system.jpg",
    features: ["Automated Scheduling", "Compliance Tracking", "Equipment Management", "Reporting Dashboard"],
    tech: ["Zoho Creator", "Deluge Scripting"]
  },
  {
    title: "ISO Document Control System",
    description: "Comprehensive document management solution for ISO compliance with version control and audit trails built on Zoho Creator.",
    image: "/iso-document-control.jpg",
    features: ["Version Control", "Audit Trails", "Document Workflow", "Compliance Reporting"],
    tech: ["Zoho Creator", "Deluge Scripting"]
  },
  {
    title: "Maintenance Management System",
    description: "Enterprise maintenance solution with predictive analytics, work order management, and resource optimization using Zoho Creator.",
    image: "/maintenance-management.jpg",
    features: ["Predictive Analytics", "Work Order Management", "Resource Planning", "Asset Tracking"],
    tech: ["Zoho Creator", "Deluge Scripting"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: springTransition,
  },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"featured" | "case-studies">("featured");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  const filteredProjects = activeTab === "featured" 
    ? projects.filter(project => project.category === "featured")
    : zohoProjects;

  const ZohoCarousel = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Zoho Creator Case Studies
          </span>
        </h3>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="zoho-carousel"
        >
          {zohoProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image not found
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="text-center p-6">
                            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                              <span class="text-3xl font-bold text-white">
                                ${project.title.charAt(0)}
                              </span>
                            </div>
                            <p class="text-gray-400">Project Preview</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium text-purple-400 mb-2">Key Features:</p>
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Built with Zoho Creator - Custom business applications tailored to your needs
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id="case-studies-projects"
      className="relative mx-auto mt-24 max-w-6xl px-6 pb-24"
    >
      <motion.div
        style={{ opacity, y }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Projects
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Explore my featured projects and detailed case studies
        </motion.p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mb-12"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("featured")}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
              activeTab === "featured"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
            }`}
          >
            Featured Projects
          </button>
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
              activeTab === "case-studies"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
            }`}
          >
            Case Studies
          </button>
        </div>
      </motion.div>

      {/* Content based on active tab */}
      {activeTab === "featured" ? (
        <motion.div
          key="featured"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={`featured-${i}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ProjectCard {...project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <ZohoCarousel />
      )}

      {/* Empty State for Featured Projects */}
      {activeTab === "featured" && filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <p className="text-gray-400 text-lg">
            No featured projects available yet.
          </p>
        </motion.div>
      )}
    </section>
  );
}

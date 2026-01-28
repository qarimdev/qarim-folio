"use client";

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiGit, SiDocker, SiAmazon, SiFigma, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiCanva, SiVsco } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import FallingText from "@/components/FallingText";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      {/* Hero Section - Get to Know Me */}
      <section id="get-to-know-me" className="relative z-10 mx-auto mt-32 max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              About Me
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover my journey, skills and passion for creating digital experiences
          </p>
        </motion.div>
      </section>

      {/* About Section - Two Columns */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - About Text */}
          <motion.div variants={sectionVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Qarim
                </span>
                <span className="text-gray-900">, Developer</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                I build interfaces and thoughtful layouts to turn ideas into exceptional digital experiences. 
                With a passion for clean code and user-centric design, I bring concepts to life through 
                innovative web solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My journey in web development has been driven by curiosity and a commitment to staying 
                at the forefront of technology. I specialize in creating responsive, performant applications 
                that not only meet business needs but also delight users.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {/* <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400"></div>
                <div className="text-gray-400 text-sm mt-1">Years Experience</div>
              </div> */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-2xl p-6 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div variants={sectionVariants} className="relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-emerald-400 opacity-20 blur-3xl" />
              
              {/* Photo Container */}
              <div className="relative rounded-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-emerald-400 p-[2px] shadow-[0_0_60px_rgba(236,72,153,0.5)]">
                <div className="relative rounded-[2.85rem] bg-black/80 overflow-hidden aspect-[4/5]">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Qarim - Professional Profile Photo"
                    fill
                    className="object-cover rounded-[2.85rem]"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-80 blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-80 blur-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Study & Experience Section - Timeline */}
      <section id="journey" className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Journey & Experience
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              My educational background and professional journey
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center"
              >
                <div className="w-full lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 mb-2">
                      2021-2022
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Matriculation Student
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Pahang Matriculation College
                    </p>
                    <p className="text-gray-500 text-sm">
                      Pursued Physical Science Module with focus on Mathematics and Physics. Built strong foundation in analytical thinking and problem-solving.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-end">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Mathematics
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Physics
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Chemistry
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        Computer Science
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-300 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                <div className="w-full lg:w-1/2 lg:pl-8" />
              </motion.div>

              {/* Bachelor's Degree */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center"
              >
                <div className="w-full lg:w-1/2 lg:pr-8" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full border-4 border-gray-300 shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
                <div className="w-full lg:w-1/2 lg:pl-8">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600 mb-2">
                      2022-2026
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Bachelor's Degree Student
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Universiti Teknologi MARA Shah Alam
                    </p>
                    <p className="text-gray-500 text-sm">
                      Bachelor's Degree in Information Systems Engineering. Specialized in software development, database management and system architecture.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                        Software Engineering
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                        Database Management
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                        System Architecture
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Work Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center"
              >
                <div className="w-full lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
                      2025-Present
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      TECHNO SET SDN BHD
                    </h3>
                    <p className="text-gray-600 mb-1">
                      ZOHO Developer & Web Developer
                    </p>
                    <p className="text-gray-500 text-sm">
                      Developing custom solutions and web applications using ZOHO platform and modern web technologies. Working on enterprise-level projects with focus on performance and user experience.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 justify-end">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        ZOHO Creator
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Web Development
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        React
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                <div className="w-full lg:w-1/2 lg:pl-8" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Section with FallingText */}
      <section id="expertise" className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Technical Expertise
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Try hover and drag over the words!
            </p>
          </div>

          {/* FallingText Container */}
          <div className="relative rounded-3xl border border-gray-200 bg-white p-8 md:p-16 shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[400px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50 via-blue-50 to-transparent z-0" />
            
            <div className="relative h-[250px] w-full z-10">
              <FallingText
                text="Wordpress Java JavaScript TypeScript React Figma Tailwind RequirementsGathering Design UI UX PowerBI ZohoCreator Node.js Next.js MongoDB HTML Git Docker AWS RESTfulAPIs Agile Scrum CSS Flutter Dart Firebase"
                highlightWords={[
                  "Wordpress",
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Figma",
                  "Tailwind",
                  "Requirements",
                  "Design",
                  "UI",
                  "UX",
                  "Power",
                  "ZohoCreator",
                  "Node.js",
                  "Next.js",
                  "MongoDB",
                  "HTML",
                  "Git",
                  "Docker",
                  "AWS",
                  "RESTful",
                  "Agile",
                  "CSS",
                  "Scrum",
                  "Flutter",
                  "Dart",
                  "Firebase",
                ]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="1.5rem"
                mouseConstraintStiffness={0.9}
              />
            </div>
          </div>

          {/* Skills Categories */}
          <div className="mt-12 space-y-12">
            {/* Development */}
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-4">Development</h3>
              <div className="relative pt-1 pb-1 h-20 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <LogoLoop
                  logos={[
                    { node: <SiHtml5 />, title: "HTML" },
                    { node: <SiCss3 />, title: "CSS" },
                    { node: <SiJavascript />, title: "JavaScript" },
                    { node: <SiReact />, title: "React" },
                    { node: <SiNextdotjs />, title: "Next.js" },
                    { node: <SiTypescript />, title: "TypeScript" },
                    { node: <SiTailwindcss />, title: "Tailwind CSS" },
                    { node: <SiNodedotjs />, title: "Node.js" },
                    { node: <SiPostgresql />, title: "PostgreSQL" },
                  ]}
                  speed={80}
                  direction="left"
                  logoHeight={60}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Development technologies"
                />
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-bold text-pink-500 mb-4">Tools</h3>
              <div className="relative pt-1 pb-1 h-20 overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500/10 to-orange-500/10">
                <LogoLoop
                  logos={[
                    { node: <SiFigma />, title: "Figma" },
                    { node: <SiCanva />, title: "Canva" },
                    { node: <SiVsco />, title: "VS Code" },
                    { node: <SiGit />, title: "Git" },
                    { node: <SiDocker />, title: "Docker" },
                    { node: <SiMongodb />, title: "MongoDB" },
                  ]}
                  speed={80}
                  direction="right"
                  logoHeight={60}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Development tools"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                Achievements
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Recognition and milestones throughout my journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={sectionVariants} className="group relative overflow-hidden rounded-3xl border border-white bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-purple-500/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/academic.jpg" 
                  alt="Academic Excellence Award"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Academic Excellence</h3>
                    <p className="text-yellow-400 text-sm font-medium">Dean's List Recognition</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="group relative overflow-hidden rounded-3xl border border-white bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-pink-500/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/involvement.jpg" 
                  alt="Acknowledgment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Acknowledgment</h3>
                    <p className="text-pink-400 text-sm font-medium">Contribution Certificates</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="group relative overflow-hidden rounded-3xl border border-white bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/leadership.jpg" 
                  alt="Leadership Award"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Leadership</h3>
                    <p className="text-blue-400 text-sm font-medium">Societies & Groups</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <ScrollToTop />
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactButton() {
  return (
    <section className="relative z-10 mx-auto mt-32 max-w-6xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Let's Connect
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Have a project in mind? Hit me up!
        </p>
        
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
        >
          Contact Me
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}

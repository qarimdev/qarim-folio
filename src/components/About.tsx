"use client";
import { motion } from "framer-motion";
import FallingText from "./FallingText";
import Image from "next/image";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto mt-32 max-w-6xl px-6 pb-32"
    >
      {/* Stacked sticky cards */}
      <div className="flex justify-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-5xl space-y-6"
        >
          {/* Card 1: Photo + intro */}
          <div className="relative z-10 w-full rounded-3xl border border-white/5 bg-black/70 p-8 md:p-12 lg:p-16 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl md:sticky md:top-28 min-h-[375px]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-transparent" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
              {/* Photo */}
              <div className="mx-auto flex-shrink-0 rounded-[2rem] bg-gradient-to-tr from-purple-500 via-pink-500 to-emerald-400 p-[2px] shadow-[0_0_40px_rgba(236,72,153,0.5)]">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-[1.85rem] bg-black/80 md:h-52 md:w-52 overflow-hidden">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Qarim - Professional Profile Photo"
                    fill
                    className="object-cover rounded-[1.85rem]"
                    priority
                  />
                </div>
              </div>

              {/* Text intro */}
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  About
                </p>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Qarim
                  </span>
                  <span className="text-gray-100">, Developer</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
                  I craft interfaces and thoughtful layout to
                  turn ideas into experiences.
                </p>
                
                {/* See More Button */}
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Journey timeline */}
          <div className="relative z-20 w-full rounded-3xl border border-white/5 bg-black/70 p-8 md:p-12 lg:p-16 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl md:sticky md:top-28 min-h-[350px]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/8 to-transparent" />

            <div className="relative">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                My Journey
              </h3>
              {/* Horizontal timeline */}
              <div className="relative">
                <div className="pointer-events-none absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-purple-400 via-pink-400/80 to-blue-400/70" />

                <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="relative flex-1">
                    <div className="absolute top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.8)] md:left-1/2" />
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-purple-200/90">
                      2021-2022
                    </p>
                    <h4 className="mt-4 text-base font-semibold text-gray-50">
                      Matriculation Student
                    </h4>
                    <p className="mt-1 text-xs md:text-sm text-gray-400">
                      Pursued Physical Science Module
                      at Pahang Matriculation College.
                    </p>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.8)] md:left-1/2" />
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-pink-200/90">
                      2022-2026
                    </p>
                    <h4 className="mt-4 text-base font-semibold text-gray-50">
                      Bachelor's Degree Student
                    </h4>
                    <p className="mt-1 text-xs md:text-sm text-gray-400">
                      Pursued Bachelor's Degree in Information Systems Engineering
                      at Universiti Teknologi MARA Shah Alam.
                    </p>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.8)] md:left-1/2" />
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-200/90">
                      2025-Present
                    </p>
                    <h4 className="mt-4 text-base font-semibold text-gray-50">
                      TECHNO SET SDN BHD
                    </h4>
                    <p className="mt-1 text-xs md:text-sm text-gray-400">
                      Currently working as a ZOHO Developer
                      and Web Developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

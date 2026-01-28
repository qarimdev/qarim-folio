"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  tags?: string[];
  gradient?: string;
  index?: number;
  link?: string;
  image?: string;
};

export default function ProjectCard({ 
  title, 
  description, 
  tags = [],
  gradient = "from-purple-500 to-pink-500",
  index = 0,
  link,
  image
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <>
      {/* Gradient background effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <motion.div
        className="relative bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 h-full flex flex-col transition-all duration-300"
        animate={{
          borderColor: isHovered ? "rgba(147, 51, 234, 0.5)" : "rgba(55, 65, 81, 0.5)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient accent line */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ originX: 0 }}
        />

        {/* Number badge */}
        <motion.div
          className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        {/* Content */}
        <div className="mt-2">
          {/* Project Image */}
          {image && (
            <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-700/50">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.className = 'aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700/50 to-gray-600/50 flex items-center justify-center';
                  target.parentElement!.innerHTML = `
                    <div class="text-center">
                      <div class="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <span class="text-2xl font-bold text-white">${title.charAt(0)}</span>
                      </div>
                      <p class="text-gray-400 text-sm">Project Preview</p>
                    </div>
                  `;
                }}
              />
            </div>
          )}
          
          <motion.h3
            className={`text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-gray-300 text-sm mb-4 leading-relaxed"
            animate={{
              color: isHovered ? "rgb(229, 231, 235)" : "rgb(209, 213, 219)",
            }}
          >
            {description}
          </motion.p>

          {/* Tags */}
          {tags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="px-2 py-1 text-xs bg-gray-700/50 rounded-md text-gray-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Arrow icon */}
          <motion.div
            className="mt-4 flex items-center text-purple-400"
            animate={{
              x: isHovered ? 5 : 0,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-semibold">View Project</span>
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
          }}
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 1,
          }}
        />
      </motion.div>
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group cursor-pointer h-full block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {CardContent}
    </motion.div>
  );
}

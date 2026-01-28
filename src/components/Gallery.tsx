"use client";
import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-10 mx-auto mt-32 max-w-6xl px-6 pb-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Gallery
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-7">
          A glimpse into my journey during university studies and various activities.
        </p>
      </motion.div>

      {/* Dome Gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full h-[600px] md:h-[80vh] rounded-3xl overflow-hidden bg-black backdrop-blur-sm z-10"
      >
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={12}
          segments={30}
          dragDampening={2}
          overlayBlurColor="#000000"
          enlargeTransitionMs={500}
          openedImageWidth="500px"
          openedImageHeight="500px"
          grayscale={false}
          images={[
            '/gallery/photo1.jpg',
            '/gallery/photo2.jpg',
            '/gallery/photo3.jpg',
            '/gallery/photo4.jpg',
            '/gallery/photo5.jpg',
            '/gallery/photo6.jpg',
            '/gallery/photo7.jpg',
            '/gallery/photo8.jpg',
            '/gallery/photo9.jpg',
            '/gallery/photo10.jpg',
            '/gallery/photo11.jpg',
            '/gallery/photo12.jpg'
          ]}
        />
      </motion.div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-8"
      >
        <p className="text-gray-400 text-sm">
          Drag to rotate
        </p>
      </motion.div>
    </section>
  );
}

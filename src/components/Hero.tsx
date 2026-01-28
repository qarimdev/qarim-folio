"use client";

import ColorBends from "./ColorBends";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center">
      {/* Background Color Bends */}
      <div className="absolute inset-0">
        <ColorBends
          rotation={0}
          speed={0.2}
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 pt-24 mb-15">
        <h1 className="text-white text-5xl md:text-7xl font-bold">
          Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">Qarim</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Browse at your own pace.
        </p>
      </div>
    </div>
  );
}

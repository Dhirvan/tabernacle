"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Welcome to Full Gospel Tabernacle",
    subtitle: "Join our community of faith, hope, and love"
  },
  {
    image: "https://images.unsplash.com/photo-1601626557251-e7c16b9e0095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Sunday Services",
    subtitle: "Experience powerful worship and teaching"
  },
  {
    image: "https://images.unsplash.com/photo-1545287072-e39ad64d0fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Community Outreach",
    subtitle: "Making a difference in our community"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [relativeX, setRelativeX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const relX = (x / rect.width - 0.5) * 2; // -1 to 1
    setMouseX(x);
    setRelativeX(relX);
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1,
            x: index === currentSlide ? relativeX * 20 : 0
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: index === currentSlide ? "block" : "none"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/80" />
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-block"
        >
          <span className="text-sage text-sm font-medium tracking-wider uppercase">Welcome Home</span>
        </motion.div>

        <motion.h1
          key={currentSlide + "-title"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-snow mb-6 leading-tight"
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.p
          key={currentSlide + "-subtitle"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-snow/90 mb-8 max-w-2xl mx-auto"
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group relative px-8 py-3 rounded-lg text-lg font-semibold overflow-hidden">
            <div className="absolute inset-0 bg-sage transition-transform duration-300 group-hover:scale-105" />
            <span className="relative text-snow">Join Us</span>
          </button>
          <button className="group relative px-8 py-3 rounded-lg text-lg font-semibold overflow-hidden">
            <div className="absolute inset-0 bg-crimson transition-transform duration-300 group-hover:scale-105" />
            <span className="relative text-snow">Watch Live</span>
          </button>
        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-navy/30 hover:bg-navy/50 text-snow p-3 rounded-full transition-all duration-200 z-20 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-navy/30 hover:bg-navy/50 text-snow p-3 rounded-full transition-all duration-200 z-20 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-crimson w-20" 
                : "bg-snow/50 hover:bg-snow/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
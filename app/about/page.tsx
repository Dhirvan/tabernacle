"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-navy mb-6">Who We Are</h1>
          <p className="text-slate text-lg max-w-3xl mx-auto mb-12">
            Full Gospel Tabernacle is a vibrant, spirit-filled church committed to sharing the Gospel of Jesus Christ with our community and beyond. Our mission is to teach the Word of God, foster spiritual growth, and engage in outreach efforts that impact lives locally and globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Church worship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy bg-opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy">
              <h2 className="text-2xl font-bold text-snow mb-2">Our Beliefs</h2>
              <p className="text-snow text-opacity-90">
                We believe in the full gospel of Jesus Christ, that He is the Savior of the world, and that salvation comes through faith in His death, burial, and resurrection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Community service"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy bg-opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy">
              <h2 className="text-2xl font-bold text-snow mb-2">Our Vision</h2>
              <p className="text-snow text-opacity-90">
                We envision a community of believers united in love and purpose, spreading the message of Christ through acts of service, outreach, and discipleship.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-sage text-snow p-12 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">
            Experience the power of the Holy Spirit and grow in your faith journey with us.
          </p>
          <button className="bg-snow text-sage hover:bg-opacity-90 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200">
            Learn More
          </button>
        </motion.div>
      </div>
    </main>
  );
}
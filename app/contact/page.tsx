"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-navy mb-6">Get in Touch</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            We would love to hear from you! Whether you have questions, need prayer, or would like to learn more about our church, feel free to reach out to us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-crimson" />
              <div>
                <h3 className="text-lg font-semibold text-navy">Phone</h3>
                <p className="text-slate">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-crimson" />
              <div>
                <h3 className="text-lg font-semibold text-navy">Email</h3>
                <p className="text-slate">info@fullgospeltabernacle.org</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-crimson" />
              <div>
                <h3 className="text-lg font-semibold text-navy">Address</h3>
                <p className="text-slate">123 Faith Street, Cityville, ST 12345</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-crimson" />
              <div>
                <h3 className="text-lg font-semibold text-navy">Service Times</h3>
                <p className="text-slate">Sundays: 10:00 AM Worship Service</p>
                <p className="text-slate">Wednesdays: 7:00 PM Bible Study</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <a href="#" className="text-navy hover:text-crimson transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-navy hover:text-crimson transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-snow p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-slate focus:outline-none focus:border-crimson"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-slate focus:outline-none focus:border-crimson"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate focus:outline-none focus:border-crimson"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-crimson text-snow py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
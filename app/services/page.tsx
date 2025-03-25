"use client";

import { motion } from "framer-motion";
import { Clock, Music, Book, Heart } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Sunday Worship",
    time: "10:00 AM",
    description: "Join us for a powerful time of worship and teaching",
    image: "https://images.unsplash.com/photo-1510380290192-1bcd3f3c5fd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Book,
    title: "Bible Study",
    time: "Wednesdays 7:00 PM",
    description: "Dive deep into God's Word with our community",
    image: "https://images.unsplash.com/photo-1585858229735-cd08d8cb0e63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Music,
    title: "Worship Night",
    time: "Fridays 7:00 PM",
    description: "Experience the presence of God through worship",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Heart,
    title: "Youth Ministry",
    time: "Sundays 4:00 PM",
    description: "Empowering the next generation in faith",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Services() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-navy mb-6">Our Services</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Join us in worship and fellowship throughout the week
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <service.icon className="w-8 h-8 text-crimson mb-4" />
                <h3 className="text-2xl font-bold text-snow mb-2">{service.title}</h3>
                <p className="text-sage font-medium mb-2">{service.time}</p>
                <p className="text-snow text-opacity-90">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-crimson text-snow p-12 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-6">
            We'd love to have you be part of our church family
          </p>
          <button className="bg-snow text-crimson hover:bg-opacity-90 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200">
            Plan Your Visit
          </button>
        </motion.div>
      </div>
    </main>
  );
}
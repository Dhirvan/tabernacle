"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Music } from "lucide-react";

const services = [
  {
    title: "Sunday Service",
    time: "9:00 AM & 11:00 AM",
    description: "Join us for worship, prayer, and an inspiring message",
    icon: Clock,
  },
  {
    title: "Youth Ministry",
    time: "Wednesdays 6:30 PM",
    description: "Engaging programs for teens and young adults",
    icon: MapPin,
  },
  {
    title: "Worship Night",
    time: "Fridays 7:00 PM",
    description: "Experience the power of worship through music and prayer",
    icon: Music,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Join us in worship and fellowship throughout the week
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-sage mb-6" />
              <h3 className="text-2xl font-semibold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-crimson font-medium mb-4">{service.time}</p>
              <p className="text-slate">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
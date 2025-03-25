"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Youth Night",
    date: "March 30th",
    time: "6:00 PM",
    description: "A fun-filled evening of worship, games, and fellowship for teens ages 12-18."
  },
  {
    title: "Women's Bible Study",
    date: "April 5th",
    time: "7:00 PM",
    description: "Join the women of Full Gospel Tabernacle for an inspiring study of God's Word, prayer, and fellowship."
  },
  {
    title: "Easter Sunday Celebration",
    date: "April 20th",
    time: "10:00 AM",
    description: "Join us as we celebrate the resurrection of our Lord and Savior, Jesus Christ. Special music and a powerful message of hope."
  },
  {
    title: "Community Outreach",
    date: "April 27th",
    time: "9:00 AM",
    description: "We will be gathering to serve our local community through food distribution, prayer, and acts of kindness."
  }
];

export default function Events() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-navy mb-6">Upcoming Events</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Stay connected and get involved! Join us for our upcoming events and activities designed to nurture your faith and build lasting relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-snow p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-crimson mr-2" />
                <div>
                  <h3 className="text-xl font-semibold text-navy">{event.title}</h3>
                  <p className="text-sage">{event.date} at {event.time}</p>
                </div>
              </div>
              <p className="text-slate">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
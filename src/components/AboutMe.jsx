import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => (
  <motion.div
    className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-black via-cosmic-purple to-black p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-space-mono mb-6 text-center">Command Center: About Ravi Teja</h2>
    <div className="max-w-2xl space-y-4">
      <p className="font-space-mono text-lg">
        RPG Journey Timeline:
      </p>
      <ul className="font-space-mono list-disc pl-6 space-y-2">
        <li>Level 0: Started C++ - Began coding adventure</li>
        <li>Level 3: Built First MERN Stack App - Mastered full-stack</li>
        <li>Level 10: Freelance + Startup Work - Conquered real-world challenges</li>
      </ul>
      <div className="grid grid-cols-3 gap-4 font-space-mono text-lg">
        <span className="text-neon-green">React</span>
        <span className="text-neon-green">Node.js</span>
        <span className="text-neon-green">MongoDB</span>
        <span className="text-electric-blue">Tailwind CSS</span>
        <span className="text-electric-blue">Git</span>
        <span className="text-electric-blue">VS Code</span>
      </div>
    </div>
  </motion.div>
);

export default AboutMe;
import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../content/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-white relative z-10">

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m Rachel, a passionate web developer and mathematics student. 
            I love solving real-world problems with clean design and 
            meaningful interactions. Always learning, always building.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {projects.map((proj, idx) => (
    <ProjectCard key={idx} project={proj} />
  ))}
</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
            My <span className="text-accent">Experience</span>
          </h2>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <span className="text-accent text-2xl">💻</span>
              <div>
                <h3 className="font-semibold text-xl">Frontend Developer Intern – Cryisor Inc.</h3>
                <p className="text-gray-300">
                  Built mobile trading prototype UI in Flutter, optimized Firebase queries; contributed to investor demo securing $20k seed funding.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <span className="text-accent text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-xl">Data Analyst</h3>
                <p className="text-gray-300">
                  Visualized datasets and created interactive charts to drive insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <span className="text-accent text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold text-xl">Backend Developer – Enactus TERRA Project</h3>
                <p className="text-gray-300">
                   Implemented automated content pipeline in React Native; reduced manual updates by 60% and increased engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

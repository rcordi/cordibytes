import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../content/projects';

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const overlayVariants = {
    initial: { backgroundColor: 'rgba(0,0,0,0.5)' },
    hover: { backgroundColor: 'rgba(0,0,0,0.65)' },
  };

  return (
    <motion.a
      href={project.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full aspect-square rounded-xl overflow-hidden relative cursor-pointer"
      variants={cardVariants}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.25 }} // faster hover
    >
      {project.image && (
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
          transition={{ duration: 0.25 }}
        />
      )}

      <motion.div
        className="absolute inset-0 p-4 flex flex-col justify-end"
        variants={overlayVariants}
        transition={{ duration: 0.25 }}
      >
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-slate-200 text-sm mt-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-accent/30 text-accent rounded text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.a>
  );
}

'use client';
import React from 'react';
import Image from "next/image";
import { projects } from "./../../data/projects";
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectShowcase = () => {
  return (
    <section className="md:py-16 py-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 m-8">
        <AnimatePresence>
          {projects
            .slice()
            .sort((a, b) => b.id - a.id)
            .map(project => (
            <motion.div
              key={project.id}
              className=" rounded-lg overflow-hidden  hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/productpages/${project.id}`}>
                <div className="h-100 overflow-hidden ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-6">
                  <div className='flex items-center'>
                  <h3 className="text-2xl font-medium dark:text-white text-amber-800 mb-2">{project.title}</h3>
                 
                  </div>
                  <p className="text-stone-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-x-4 items-center justify-between">
                    <p className="text-stone-600 dark:text-gray-100 mb-4">{project.date}</p>
                    <p className="text-stone-600 dark:text-gray-100 mb-4">{project.tag}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;

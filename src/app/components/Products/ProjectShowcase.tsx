'use client';
import React, { useState } from 'react';
import { Code, Globe, Users, User, Award } from 'lucide-react';
import Image from "next/image";
import { projects } from "./../../data/projects";
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectShowcase = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };
/*
//和集合
  const filteredProjects = activeFilters.length === 0
    ? projects
    : projects.filter(project =>
        project.tags.some(tag => activeFilters.includes(tag))
      ); */

      const filteredProjects = activeFilters.length === 0
      ? projects
      : projects.filter(project =>
          activeFilters.every(filter => project.tags.includes(filter))
        );
    

  const getTagIcon = (tag: string) => {
    switch(tag) {
      case 'Web App': return <Code className="h-4 w-4 mr-1" />;
      case 'Website': return <Globe className="h-4 w-4 mr-1" />;
      case 'Team Project': return <Users className="h-4 w-4 mr-1" />;
      case 'Individual Project': return <User className="h-4 w-4 mr-1" />;
      case 'Award': return <Award className="h-4 w-4 mr-1" />;
      default: return null;
    }
  };

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'Web App':
      case 'Website':
        return 'bg-sky-100 text-sky-700';
      case 'Team Project':
      case 'Individual Project':
        return 'bg-green-100 text-green-700';
      case 'Award':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <section className="py-16">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['Web App', 'Website', 'Team Project', 'Individual Project', 'Award'].map(filter => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilters.includes(filter)
                ? 'bg-rose-400 text-white'
                : 'bg-white text-stone-700 hover:bg-rose-100'
            }`}
          >
            {getTagIcon(filter)}
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-8">
        <AnimatePresence>
          {filteredProjects
            .slice() 
            .sort((a, b) => b.id - a.id) 
            .map(project => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/productpages/${project.id}`}>
                <div className="h-100 overflow-hidden">
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
                  <h3 className="text-2xl font-medium text-amber-800 mb-2">{project.title}</h3>
                  <p className="px-5 py-1 bg-gray-100 text-stone-600 rounded-full ml-10">{project.date}</p>
                  </div>
                  <p className="text-stone-600 mb-1">{project.description}</p>
                  <p className="text-stone-600 mb-4">{project.description2}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                      >
                        {getTagIcon(tag)}
                        {tag === 'Award' ? project.awardTitle : tag} {/* Awardタグの場合、正式名を表示 */}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

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

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Variants, HTMLMotionProps } from 'framer-motion';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    } 
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
} as const;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const projectCard: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    y: -5,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
} as const;

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const projects = [
    {
      title: "Job Sphere - Job Portal Web Application",
      duration: "Aug 2024 – Dec 2024",
      description: "A comprehensive job portal platform connecting 100+ job seekers with employers using microservices architecture and enterprise-grade security.",
      technologies: ["MERN Stack", "Docker", "Jenkins", "Postman", "JWT Authentication"],
      achievements: [
        "Architected and developed a scalable job portal platform connecting 100+ job seekers with employers",
        "Implemented enterprise-grade role-based authentication system with JWT tokens, supporting job seekers, employers, and admins with role-specific compliance",
        "Containerized application using Docker and established automated Jenkins CI/CD pipeline, reducing deployment time by 60% and ensuring zero-downtime deployments",
        "Developed comprehensive API documentation and testing suite using Postman, achieving 95% endpoint coverage with automated testing integration"
      ],
      github: "https://github.com/saikat-bahadur/Job-Portal",
      demo: "https://github.com/saikat-bahadur/Job-Portal",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Full Stack Development",
      status: "Completed"
    },
    {
      title: "GemBot - AI Chatbot Android Application",
      duration: "Feb 2024 – June 2024",
      description: "Native Android AI chatbot application serving 500+ active users with 95% crash-free session rate using modern Android development practices.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM Architecture"],
      achievements: [
        "Developed native conversational AI application serving 500+ active users with 95% crash-free session rate",
        "Architected modern UI using Jetpack Compose and Material Design 3 principles, reducing development time by 40% and improving code maintainability",
        "Designed robust error handling and logging system using Android best practices, reducing app crashes by 80%"
      ],
      github: "https://github.com/saikat-bahadur/GemBot",
      demo:  "https://github.com/saikat-bahadur/GemBot",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Mobile Development",
      status: "Completed"
    },
    {
      title: "NexusNews - News Web Application",
      duration: "Aug 2023 – Dec 2023",
      description: "Responsive news aggregation platform using React.js, delivering real-time news updates to 200+ daily users with seamless user experience.",
      technologies: ["JavaScript", "ReactJS", "News API Integration"],
      achievements: [
        "Built a responsive news aggregation platform using React.js, delivering real-time news updates to 200+ daily users",
        "Integrated third-party news APIs with axios for seamless data fetching, achieving 1.5-second average load time",
        "Implemented dynamic search and category filtering functionality, improving user engagement by 60%"
      ],
      github: "https://github.com/saikat-bahadur/News-Website",
      demo: "https://github.com/saikat-bahadur/News-Website",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Frontend Development",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            variants={fadeInUp}
          >
            A showcase of my recent work and contributions
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectCard}
              initial="hidden"
              whileInView="show"
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Card className="overflow-hidden border-0 modern-card relative h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className="bg-purple-600/90 text-white border-0 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </motion.div>

                  {/* Status Badge */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge className="bg-green-600/90 text-white border-0 backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="absolute bottom-4 right-4 flex gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-600/80 backdrop-blur-sm rounded-full hover:bg-purple-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {project.duration}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 text-purple-700 hover:from-purple-100 hover:to-blue-100 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <motion.button
                      className="flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 focus:outline-none group/btn"
                      onClick={() => toggleExpand(index)}
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover/btn:underline">
                        {expandedProject === index ? 'Hide' : 'View'} Key Achievements
                      </span>
                      <ArrowRight 
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedProject === index ? 'rotate-90' : ''}`} 
                      />
                    </motion.button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedProject === index ? 'auto' : 0,
                        opacity: expandedProject === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 text-sm text-muted-foreground pt-2">
                        {project.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start group/item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: expandedProject === index ? 1 : 0,
                              x: expandedProject === index ? 0 : -10
                            }}
                            transition={{ 
                              delay: i * 0.1,
                              duration: 0.3 
                            }}
                          >
                            <span className="text-purple-600 mr-3 mt-1 font-bold group-hover/item:scale-110 transition-transform">•</span>
                            <span className="group-hover/item:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
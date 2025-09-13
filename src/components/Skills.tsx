import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Git", "Jenkins", "Docker", "Kubernetes", "Postman","Linux"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Concepts & Methodologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Data Structures & Algorithms", "Operating Systems", "OOP", "Computer Networks", "Database Management", "CI/CD Pipelines", "Microservices Architecture", "Agile/Scrum Methodologies"]
    }
  ];

  const certifications = [
    "NPTEL - Data Structures and Algorithms with Python",
    "Micro-Certification - Welcome to ServiceNow",
    "DevOps Internship Program"
  ];

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A comprehensive toolkit of modern technologies and methodologies for building{' '}
              <span className="font-semibold text-purple-600">robust applications</span>
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="modern-card border-0 shadow-lg h-full group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4 text-2xl font-bold group-hover:text-purple-600 transition-colors">
                      <motion.span 
                        className="text-purple-600 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {category.icon}
                      </motion.span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            y: -3, 
                            scale: 1.05,
                            transition: { type: 'spring', stiffness: 300 }
                          }}
                        >
                          <Badge 
                            variant="outline" 
                            className="skill-tag text-sm py-2 px-4 font-medium hover:shadow-lg transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div 
            className="fade-in-up"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="modern-card border-0 shadow-xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <CardTitle className="text-3xl md:text-4xl font-black mb-4">
                    <span className="gradient-text">Certifications</span> & Achievements
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Professional certifications and notable achievements
                  </p>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index} 
                      className="group text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white font-bold text-lg">✓</span>
                      </motion.div>
                      <p className="font-semibold text-sm group-hover:text-green-700 transition-colors leading-relaxed">
                        {cert}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
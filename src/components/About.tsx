import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Settings, Cloud, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies and frameworks"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Technologies",
      description: "Experience with scalable cloud-based solutions"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "DevOps",
      description: "Expertise in CI/CD pipelines and infrastructure automation"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always eager to learn and implement cutting-edge technologies"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a passionate Computer Science Engineering student with a drive for{' '}
              <span className="font-semibold text-purple-600">innovation</span> and{' '}
              <span className="font-semibold text-blue-600">excellence</span> in technology.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Summary */}
            <div className="fade-in-left">
              <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Results-driven Computer Science Engineering student with proven expertise 
                  in full-stack development, cloud technologies, and scalable devops solutions. 
                  Demonstrated ability to architect and deploy enterprise-grade applications 
                  using modern frameworks and DevOps practices.
                </p>
                <p>
                  Strong foundation in data structures, algorithms, and software engineering 
                  principles with experience in agile development methodologies. Seeking a 
                  Software Engineer role to contribute to innovative cloud solutions and 
                  drive technological excellence.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Key Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "System Architecture",
                    "Team Collaboration",
                    "Agile Methodologies",
                    "CI/CD Pipelines",
                    "API Design"
                  ].map((strength) => (
                    <Badge key={strength} variant="secondary" className="skill-tag">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <motion.div 
              className="fade-in-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="modern-card border-0 shadow-lg group">
                      <CardContent className="p-6">
                        <motion.div 
                          className="text-purple-600 mb-4 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {highlight.icon}
                        </motion.div>
                        <h4 className="font-bold text-lg mb-3 group-hover:text-purple-600 transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Goals & Aspirations */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="modern-card border-0 shadow-xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl font-black mb-6">
                    My <span className="gradient-text">Goals</span> & Aspirations
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                    I aspire to become a leading{' '}
                    <span className="font-semibold text-purple-600">Software Engineer</span> specializing in{' '}
                    <span className="font-semibold text-blue-600">cloud technologies</span> and scalable system design. 
                    My goal is to contribute to innovative projects that make a meaningful impact on society while 
                    continuously learning and growing in the ever-evolving tech landscape.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

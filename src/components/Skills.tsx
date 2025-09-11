import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

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
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies for building robust applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="project-card border-0 shadow-sm fade-in-up bg-gradient-to-br from-primary/10 to-accent/10" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="skill-tag text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="fade-in-up bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg ">
            <Card className="border-0 section-bg shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-green-50 border border-border hover:border-primary/50 transition-colors">
                      <p className="font-medium text-sm">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
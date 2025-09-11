import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
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
      demo: "https://saikat-bahadur.com/job-portal"
    },
    {
      title: "GenBot - AI Chatbot Android Application",
      duration: "Feb 2024 – June 2024",
      description: "Native Android AI chatbot application serving 500+ active users with 95% crash-free session rate using modern Android development practices.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM Architecture"],
      achievements: [
        "Developed native conversational AI application serving 500+ active users with 95% crash-free session rate",
        "Architected modern UI using Jetpack Compose and Material Design 3 principles, reducing development time by 40% and improving code maintainability",
        "Designed robust error handling and logging system using Android best practices, reducing app crashes by 80%"
      ],
      github: "https://github.com/saikat-bahadur/GemBot",
      demo: "https://github.com/saikat-bahadur/GemBot"
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
      demo: "https://github.com/saikat-bahadur/News-Website"
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my technical expertise through impactful projects that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card border-0 shadow-sm fade-in-up bg-gradient-to-br from-primary/10 to-accent/10" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2 lg:flex-col">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => window.open(project.demo, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="skill-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
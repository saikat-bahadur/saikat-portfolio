import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Settings, Cloud, Lightbulb } from 'lucide-react';

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
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate Computer Science Engineering student with a drive for innovation and excellence in technology.
            </p>
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
            <div className="fade-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="project-card border-0 shadow-sm bg-gradient-to-br from-primary/10 to-accent/10">
                    <CardContent className="p-6">
                      <div className="text-primary mb-4">
                        {highlight.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Goals & Aspirations */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg fade-in-up">
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10 p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">My Goals & Aspirations</h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed ">
                  I aspire to become a leading Software Engineer specializing in cloud technologies 
                  and scalable system design. My goal is to contribute to innovative projects that 
                  make a meaningful impact on society while continuously learning and growing in 
                  the ever-evolving tech landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

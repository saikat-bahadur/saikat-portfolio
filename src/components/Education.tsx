import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "GIET University",
      degree: "Bachelor of Technology in Computer Science Engineering",
      location: "Gunupur, Odisha",
      duration: "May 2026",
      cgpa: "CGPA: 9.14",
      description: "Pursuing comprehensive education in computer science with focus on software engineering, data structures, algorithms, and system design."
    },
    {
      institution: "Delhi Public School",
      degree: "Higher Secondary Education",
      location: "Angul, Odisha",
      duration: "July 2021",
      cgpa: "Percentage: 89.6%",
      stream: "Science | CBSE",
      description: "Completed senior secondary education with distinction in Science stream, building strong foundation in Mathematics and Computer Science."
    },
    {
      institution: "Maharishi Vidya Mandir",
      degree: "Secondary Education",
      location: "Angul, Odisha", 
      duration: "May 2019",
      cgpa: "Percentage: 90.4%",
      stream: "CBSE",
      description: "Achieved academic excellence in secondary education with consistent high performance across all subjects."
    }
  ];

  return (
    <section id="education" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey and achievements that have shaped my technical foundation.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="project-card border-0 shadow-sm fade-in-up bg-gradient-to-br from-primary/10 to-accent/10" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                      <h4 className="text-lg font-semibold text-muted-foreground mb-3">
                        {edu.degree}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="skill-tag">
                          {edu.cgpa}
                        </Badge>
                        {edu.stream && (
                          <Badge variant="secondary" className="skill-tag">
                            {edu.stream}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Education;
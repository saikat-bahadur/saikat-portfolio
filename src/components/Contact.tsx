import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ExternalLink, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "saikatbahadur918@gmail.com",
      action: () => window.open('mailto:saikatbahadur918@gmail.com', '_blank')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8847879214",
      action: () => window.open('tel:+918847879214', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Angul, Odisha, India",
      action: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saikatbahadur",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/saikat-bahadur",
      icon: <Github className="w-6 h-6" />
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-left">
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="project-card border-0 shadow-sm bg-gradient-to-br from-primary/10 to-accent/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{item.label}</h4>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                        {item.action && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={item.action}
                            className="hover:text-primary"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      onClick={() => window.open(link.url, '_blank')}
                      className="flex items-center gap-2"
                    >
                      {link.icon}
                      {link.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="fade-in-right ">
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Ready to Collaborate?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 ">
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're looking for a passionate developer to join your team, 
                    have an exciting project in mind, or just want to connect with fellow 
                    tech enthusiasts, I'd love to hear from you.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">What I'm Looking For:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Software Engineer internships and full-time opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Open source collaboration projects
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Mentorship and learning opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Tech discussions and networking
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      size="lg" 
                      onClick={() => window.open('mailto:saikatbahadur918@gmail.com', '_blank')}
                      className="w-full bg-gradient-hero hover:opacity-90 text-white border-0"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send me an Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
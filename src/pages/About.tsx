
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Shield } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Kelvin Mukaria",
      role: "Founder & Lead Security Consultant",
      bio: "A cybersecurity professional with over 8 years of experience in penetration testing, security architecture, and incident response. Kelvin founded SecurityPlus with the mission to demystify cybersecurity for everyone.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Content Director",
      bio: "With a background in technical writing and cybersecurity education, Sarah ensures all SecurityPlus content is both technically accurate and accessible to readers of all knowledge levels.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "David Rodriguez",
      role: "Security Researcher",
      bio: "David specializes in emerging threat detection and analysis. His research into new vulnerabilities and attack methodologies helps keep SecurityPlus content at the cutting edge of cybersecurity.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];
  
  const certifications = [
    "Certified Information Systems Security Professional (CISSP)",
    "Certified Ethical Hacker (CEH)",
    "Offensive Security Certified Professional (OSCP)",
    "Certified Information Security Manager (CISM)",
    "CompTIA Security+"
  ];
  
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="About SecurityPlus" 
            centered
          />
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Our Story</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                SecurityPlus was founded in 2023 with a simple but powerful mission: 
                to make cybersecurity accessible to everyone. We recognized that in today's 
                increasingly digital world, security knowledge shouldn't be confined to 
                specialists and experts.
              </p>
              <p>
                What began as a small blog has grown into a comprehensive cybersecurity 
                resource hub, offering educational content, customized articles, and consulting 
                services. Throughout our growth, we've maintained our core commitment to explaining 
                complex security concepts in ways that anyone can understand and implement.
              </p>
              <p>
                We believe that security shouldn't be an afterthought or something that feels 
                overwhelming. With the right information and guidance, everyone can take meaningful 
                steps to protect themselves online.
              </p>
            </div>
          </div>
          
          {/* Mission & Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  We translate technical jargon into clear, actionable advice that everyone can understand and implement.
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Accuracy</h3>
                <p className="text-muted-foreground">
                  All our content is thoroughly researched and regularly updated to reflect the latest developments in cybersecurity.
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Empowerment</h3>
                <p className="text-muted-foreground">
                  We don't just highlight problems—we provide practical solutions that empower individuals and organizations.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 font-heading">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 font-heading">Our Certifications</h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

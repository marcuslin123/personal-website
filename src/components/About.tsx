import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket } from "lucide-react"

export function About() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "TailwindCSS", "Next.js", "Express", "Docker", "AWS", "Git"
  ]

  const experiences = [
    {
      icon: <Code className="h-8 w-8 text-accent-blue" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and best practices."
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent-purple" />,
      title: "Backend Systems",
      description: "Building scalable APIs and databases that power seamless user experiences."
    },
    {
      icon: <Palette className="h-8 w-8 text-accent-blue" />,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that balance aesthetics with functionality."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a keen eye for detail and a love for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi! I'm Marcus, a full-stack developer based in San Francisco. I've been building web applications 
              for over 5 years, working with startups and established companies to bring their digital visions to life.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in writing clean, efficient code and creating user experiences that are both beautiful 
              and functional. When I'm not coding, you can find me exploring the latest design trends, 
              contributing to open source projects, or hiking the beautiful trails around the Bay Area.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
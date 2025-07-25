import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development and modern design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden border-border/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-accent-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
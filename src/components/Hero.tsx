import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent-blue/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-30 animate-glow" />
              <img
                src="/lovable-uploads/cd444da2-e91e-4dc1-9b45-cce3f6c28700.png"
                alt="Marcus Lin - Full Stack Developer"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-elegant hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Marcus Lin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delay">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
              Passionate about creating beautiful, functional web experiences that make a difference.
              Specializing in modern React applications and user-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay">
              <Button variant="hero" size="lg" className="group">
                <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="elegant" size="lg" className="group">
                <Download className="mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6 animate-fade-in-delay">
              <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow transition-all">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow transition-all">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow transition-all">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Marcus Lin
            </h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow transition-all">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow transition-all">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow transition-all">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2024 Marcus Lin. Made with <Heart className="h-4 w-4 text-red-500" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
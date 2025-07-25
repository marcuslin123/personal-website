import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-elegant border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            ML
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent-blue transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative"
            >
              <Menu className={`h-6 w-6 transition-all ${isMobileMenuOpen ? "rotate-90 opacity-0" : ""}`} />
              <X className={`h-6 w-6 absolute transition-all ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-accent-blue transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
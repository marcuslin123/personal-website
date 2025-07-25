import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "marcus.lin@email.com",
      link: "mailto:marcus.lin@email.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Collaboration" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a conversation about technology and design.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                      <div className="flex-shrink-0 p-3 bg-gradient-accent rounded-lg text-white group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-accent-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Quick Response</h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via phone or LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
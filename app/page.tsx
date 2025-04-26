import Link from "next/link"

import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Education from "./components/education"
import AnimatedHero from "./components/animated-hero"
import { ThemeToggle } from "@/components/theme-toggle"
import ScrollToTopButton from "./components/scroll-to-top"
import AnimatedSection from "./components/animated-section"
import ParticleBackground from "./components/particle-background"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Menu, Phone, MapPin } from "lucide-react"
import { Instagram, Mail } from "lucide-react";


export default function Page() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle background */}
      <ParticleBackground />

      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Faizal.dev
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center ml-auto space-x-4">
  <ThemeToggle />
  <a
    href="/Patel_Faizal_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
  >
    <Button variant="outline" className="group relative overflow-hidden">
      <span className="relative z-10">Resume</span>
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </Button>
  </a>
</div>

        </div>
      </header>

      <main className="container px-4 md:px-6 relative z-10">
        <AnimatedHero />

        <AnimatedSection id="about" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                  Web Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building responsive and interactive web applications with modern technologies. Passionate about
                  creating elegant solutions to complex problems.
                </p>
              </div>
              <div className="space-x-4 mt-6">
  {/* Instagram Personal */}
  <Link href="https://instagram.com/patel_7_2" target="_blank">
    <Button
      variant="outline"
      size="icon"
      className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300 relative overflow-hidden group"
    >
      <Instagram className="h-4 w-4 relative z-10" />
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full" />
      <span className="sr-only">Instagram</span>
    </Button>
  </Link>

  {/* Instagram Channel */}
  <Link href="https://instagram.com/patel_bros_tech" target="_blank">
    <Button
      variant="outline"
      size="icon"
      className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300 relative overflow-hidden group"
    >
      <Instagram className="h-4 w-4 relative z-10" />
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full" />
      <span className="sr-only">Instagram Channel</span>
    </Button>
  </Link>

  {/* Email */}
  <Link href="mailto:patelfaizal380@gmail.com">
    <Button
      variant="outline"
      size="icon"
      className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300 relative overflow-hidden group"
    >
      <Mail className="h-4 w-4 relative z-10" />
      <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full" />
      <span className="sr-only">Email</span>
    </Button>
  </Link>
</div>

            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                Tech Stack
              </span>
            </h2>
            <TechStack />
          </div>
        </AnimatedSection>

        <AnimatedSection id="education" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                Education
              </span>
            </h2>
            <Education />
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                Projects
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Room Renovation 3D Module"
                description="An interactive 3D module for visualizing room renovations with customizable furniture and decor options."
                image="/room.jpg?height=400&width=600"
                tags={["react", "framer", "node.js", "mongoDB"]}
              />
              <ProjectCard
                title="Mobile Shop Website"
                description="A responsive e-commerce website for a mobile phone shop with product catalog and shopping cart functionality."
                image="/mobile.jpg?height=400&width=600"
                tags={["html", "CSS", "js", "php"]}
              />
              <ProjectCard
                title="Bakery Shop Website"
                description="A modern website for a bakery featuring product showcase, online ordering, and customer testimonials."
                image="/bakery.jpg?height=400&width=600"
                tags={["HTML", "CSS", "JavaScript", "PHP"]}
              />
              <ProjectCard
                title="CRM for Travel System"
                description="A comprehensive customer relationship management system for travel agencies to manage bookings and client information."
                image="/crm.jpg?height=400&width=600"
                tags={["React", "Node.js", "Express", "MongoDB"]}
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                  Get in Touch
                </span>
              </h2>
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t bg-muted/40 relative z-10">
        <div className="container py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Patel Faizal</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Web developer specializing in creating responsive and interactive web applications.
              </p>
              <div className="flex space-x-3">
                <Link href="https://github.com" target="_blank">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>patelfaizal380@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 7265821645</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <span>bharuch, Gujarat, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#education" className="hover:text-primary transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Patel Faizal. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground" href="#">
                Privacy Policy
              </Link>
              <span className="mx-2 text-muted-foreground">•</span>
              <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground" href="#">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  )
}

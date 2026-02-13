import { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Database, 
  Users, 
  Search, 
  Globe, 
  ChevronDown,
  Linkedin,
  Facebook,
  Twitter,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    { icon: Database, title: 'Data Entry', description: 'Accurate and efficient data entry with attention to detail' },
    { icon: Users, title: 'Lead Generation', description: 'Strategic lead generation to grow your business' },
    { icon: Search, title: 'Data Collection', description: 'Comprehensive research and data gathering services' },
    { icon: Globe, title: 'Web Development', description: 'Modern and responsive website development' },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
    { value: '99%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-gradient">Ali Raza</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Work</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-gradient">Ali Raza</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
                Data Entry Specialist
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Transforming raw data into valuable insights. I specialize in data entry, 
                lead generation, data collection, and web development to help businesses grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-amber-sm"
                >
                  Get in Touch
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('skills')}
                  className="border-border/50 hover:bg-secondary"
                >
                  View Skills
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/10 rounded-3xl blur-2xl" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-amber-500/30 glow-amber">
                  <img 
                    src="/ali-raza.png" 
                    alt="Ali Raza" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border/50 rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Data Expert</p>
                      <p className="text-xs text-muted-foreground">3+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-card border border-border/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
                <ul className="space-y-4">
                  {[
                    'Fast and accurate data entry services',
                    'Proven track record in lead generation',
                    'Attention to detail and quality assurance',
                    'Timely delivery of all projects',
                    'Excellent communication skills',
                    'Affordable and competitive rates'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                Dedicated to Delivering <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                I am a passionate Data Entry Specialist with over 3 years of experience helping 
                businesses streamline their data management processes. My expertise spans across 
                various domains including data entry, lead generation, data collection, and web development.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                I believe in delivering high-quality work with precision and efficiency. Whether 
                you need help with organizing your data, generating leads for your business, or 
                building a professional website, I'm here to help you achieve your goals.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">My Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              What I <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I provide a comprehensive range of services to help your business succeed 
              in today's competitive market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Microsoft Excel', 'Google Sheets', 'MS Office', 'Data Mining', 
                'Web Scraping', 'CRM Tools', 'HTML/CSS', 'JavaScript', 
                'React', 'Node.js', 'SQL', 'Python'
              ].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Send me a message 
              and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:itsali327442@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  itsali327442@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:+923054496134" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +92 305 4496134
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Noor wah Nala, Punjab, Pakistan
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground">Let's discuss how I can help you achieve your goals.</p>
              </div>
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
                onClick={() => window.location.href = 'mailto:itsali327442@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gradient">Ali Raza</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Ali Raza. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

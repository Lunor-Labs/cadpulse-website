import React, { useState, useEffect } from 'react';
import { Settings, CheckCircle, Truck, Users, Cuboid as Cube, Zap, BarChart3, Wrench, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Engineering Manager at TechCorp",
      quote: "Cadpulse delivered exceptional CAD models that exceeded our expectations. Their attention to detail and quick turnaround made our product launch a success.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Product Designer at InnovateLab",
      quote: "Working with Cadpulse has been a game-changer for our design process. Their expertise in SolidWorks and precision engineering is unmatched.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Manufacturing Director at ProBuild",
      quote: "The simulation and stress analysis provided by Cadpulse saved us months of development time and prevented costly manufacturing errors.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const teamMembers = [
    {
      name: "David Thompson",
      role: "Lead CAD Engineer",
      bio: "15+ years in mechanical design and SolidWorks expertise",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Lisa Park",
      role: "Simulation Specialist",
      bio: "Expert in FEA analysis and stress testing methodologies",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      bio: "Ensuring seamless delivery and client satisfaction",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const clientLogos = [
    "TechCorp", "InnovateLab", "ProBuild", "DesignFlow", "MechSolutions", "EngiPro"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-ubuntu">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/cadpulse-website/cadpulse-logo.png" alt="Cadpulse" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Cadpulse</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#c1ff72] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#c1ff72] transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#c1ff72] transition-colors">Services</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[#c1ff72] transition-colors">Team</button>
              <button onClick={() => scrollToSection('contact')} className="bg-[#c1ff72] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#b3ff5c] transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700">Services</button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left py-2 text-gray-700">Team</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 bg-[#c1ff72] text-gray-900 rounded-lg px-4 mt-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/cadpulse-website/scooter.306.png)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Precision CAD Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay">
            Innovative Engineering, Designed with Precision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in-delay-2">
              <div className="text-3xl md:text-4xl font-bold text-[#c1ff72]">500+</div>
              <div className="text-lg">Projects</div>
            </div>
            <div className="animate-fade-in-delay-3">
              <div className="text-3xl md:text-4xl font-bold text-[#c1ff72]">50+</div>
              <div className="text-lg">Clients</div>
            </div>
            <div className="animate-fade-in-delay-4">
              <div className="text-3xl md:text-4xl font-bold text-[#c1ff72]">5+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-[#c1ff72] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b3ff5c] transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-5"
          >
            Explore Our Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Cadpulse</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a leading SolidWorks design company specializing in precision engineering and CAD modeling. 
              Our team combines technical expertise with innovative thinking to deliver exceptional design solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Deliver cutting-edge design solutions with efficiency and precision, helping our clients 
                bring their innovative ideas to life through expert CAD modeling and engineering analysis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted engineering design partner worldwide, setting new standards 
                in precision, quality, and innovation in the CAD modeling industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Cadpulse</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-[#c1ff72] rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Focus</h3>
              <p className="text-gray-600">Every design meets exact specifications with meticulous attention to detail.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-[#c1ff72] rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control processes ensure exceptional results every time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-[#c1ff72] rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround without compromise on quality or precision.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-[#c1ff72] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals dedicated to excellence in engineering design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering design solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#c1ff72] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cube className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3D CAD Modeling</h3>
              <p className="text-gray-600">Precise 3D models using SolidWorks for all your design needs</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#c1ff72] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Prototyping</h3>
              <p className="text-gray-600">Fast iteration and testing of your design concepts</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#c1ff72] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Simulation & Analysis</h3>
              <p className="text-gray-600">Comprehensive stress analysis and performance testing</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#c1ff72] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Support</h3>
              <p className="text-gray-600">Design optimization for efficient manufacturing processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-2xl font-bold text-gray-400 hover:text-[#c1ff72] transition-colors cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Clients Say</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-gray-600 mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-[#c1ff72] font-medium">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#c1ff72] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#c1ff72] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#c1ff72]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind our precision engineering solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#c1ff72]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#c1ff72] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how we can bring your engineering vision to life with precision and expertise.
            </p>
            <button className="bg-[#c1ff72] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b3ff5c] transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">hello@cadpulse.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/cadpulse-website/cadpulse-logo.png" alt="Cadpulse" className="h-8 w-8" />
              <span className="text-xl font-bold">Cadpulse</span>
            </div>
            <p className="text-gray-400">© 2025 Cadpulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
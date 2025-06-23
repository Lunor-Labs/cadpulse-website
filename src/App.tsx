import React, { useState, useEffect } from 'react';
import { Settings, CheckCircle, Truck, Users, Cuboid as Cube, Zap, BarChart3, Wrench, ChevronLeft, ChevronRight, Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';

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
      name: "Piyal Ranjith",
      role: "Co-Founder, Director",
      bio: "",
      image: "/cadpulse-website/piyal.jpeg"
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
    { name: "1", logo: "/cadpulse-website/1.png" },
    { name: "2", logo: "/cadpulse-website/2.png" },
    { name: "3", logo: "/cadpulse-website/3.png" },
    { name: "4", logo: "/cadpulse-website/4.png" },
    { name: "5", logo: "/cadpulse-website/5.png" },
    { name: "6", logo: "/cadpulse-website/6.png" }
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

  const openWhatsApp = () => {
    window.open('https://wa.me/15551234567?text=Hello%20Cadpulse,%20I%20would%20like%20to%20discuss%20my%20project', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-ubuntu">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/cadpulse-website/cadpulse-logo.png" alt="Cadpulse" className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">Cadpulse</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-accent transition-colors">Team</button>
              <button onClick={() => scrollToSection('contact')} className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">Contact</button>
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
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 bg-accent text-white rounded-lg px-4 mt-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        {/* Background Image - Black and White, Flipped */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(/cadpulse-website/scooter.305.png)',
            transform: 'scaleX(-1)',
            filter: 'grayscale(100%)',
            backgroundSize: '100%',
            backgroundPosition: '90% center'  // Moves image more to the right
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary animate-fade-in">
                Let the Pulse of Your Idea Become a Reality
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-700 animate-fade-in-delay">
                Innovative Engineering, Designed with Precision
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="animate-fade-in-delay-2">
                  <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
                  <div className="text-lg text-gray-600">Projects</div>
                </div>
                <div className="animate-fade-in-delay-3">
                  <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
                  <div className="text-lg text-gray-600">Clients</div>
                </div>
                <div className="animate-fade-in-delay-4">
                  <div className="text-3xl md:text-4xl font-bold text-accent">5+</div>
                  <div className="text-lg text-gray-600">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right Image - Larger Size, Zoomed, Faded & Responsive */}
            <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
              <img 
                src="/cadpulse-website/scooter.305.png" 
                alt="Off-road Standing Scooter" 
                className="w-full max-w-[900px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] object-contain opacity-20 animate-fade-in-delay-2 transform scale-125 md:scale-150"
              />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Cadpulse</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are a leading SolidWorks design company specializing in precision engineering and CAD modeling. 
                Our team combines technical expertise with innovative thinking to deliver exceptional design solutions 
                that meet the highest industry standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience and 500+ successful projects, we've established ourselves as 
                trusted partners for companies seeking cutting-edge engineering solutions.
              </p>
            </div>

            {/* Right Content - Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver cutting-edge design solutions with efficiency and precision, helping our clients 
                  bring their innovative ideas to life through expert CAD modeling and engineering analysis.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-secondary">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted engineering design partner worldwide, setting new standards 
                  in precision, quality, and innovation in the CAD modeling industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Cadpulse</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Precision Focus</h3>
              <p className="text-gray-600">Every design meets exact specifications with meticulous attention to detail.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control processes ensure exceptional results every time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround without compromise on quality or precision.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals dedicated to excellence in engineering design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern & Attractive */}
      <section id="services" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Optional Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.svg')] bg-repeat z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored engineering design solutions to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "3D CAD Modeling",
                icon: <Cube className="w-8 h-8 text-white" />,
                color: "from-indigo-500 to-purple-500",
                border: "border-indigo-500",
                desc: "SolidWorks-based 3D models with exceptional precision and visual accuracy.",
              },
              {
                title: "Rapid Prototyping",
                icon: <Zap className="w-8 h-8 text-white" />,
                color: "from-pink-500 to-red-500",
                border: "border-pink-500",
                desc: "Speed up your innovation process with quick and functional design iterations.",
              },
              {
                title: "Simulation & Analysis",
                icon: <BarChart3 className="w-8 h-8 text-white" />,
                color: "from-blue-500 to-cyan-500",
                border: "border-blue-500",
                desc: "Stress testing and performance analysis to ensure robust product behavior.",
              },
              {
                title: "Manufacturing Support",
                icon: <Wrench className="w-8 h-8 text-white" />,
                color: "from-green-500 to-emerald-500",
                border: "border-green-500",
                desc: "Optimization support for manufacturability, reducing cost and complexity.",
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-white border-t-4 ${service.border} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What Clients Say</h2>
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
                    <h4 className="text-xl font-bold text-primary">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-accent font-medium">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
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
                  index === currentTestimonial ? 'bg-accent' : 'bg-gray-300'
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Team</h2>
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
                    className="w-32 h-32 rounded-full object-cover mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-32 h-32 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Minimalist & Modern */}
      <section id="contact" className="py-24 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Let's bring your engineering vision to life with precision and expertise.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-block bg-black text-white px-10 py-3 rounded-md text-lg font-semibold transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/30"
          >
            Get In Touch via WhatsApp
          </button>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
            {/* WhatsApp */}
            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium">WhatsApp</h3>
              <button
                onClick={openWhatsApp}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                +1 (555) 123-4567
              </button>
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-sm text-gray-500">hello@cadpulse.com</p>
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
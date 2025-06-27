import React, { useState, useEffect } from 'react';
import { Facebook,Twitter, Instagram, Linkedin, MapPin, Calendar,Sparkles,ExternalLink,Star,TrendingUp,Clock,Award ,Target,Settings, CheckCircle, Truck, Users, Cuboid as Cube, Zap, BarChart3, Wrench, ChevronLeft, ChevronRight, Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';


function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Off-road Standing Scooter",
      description: "A rugged, skateboard-style electric scooter with four hub motors and independent suspension. Delivers smooth, stable performance—handle optional.",
      image: "/cadpulse-website/projects/1.jpg"
    },
    {
      id: 2,
      title: "Turbocharger Gear Box",
      description: "High-performance gearbox built for demanding environments, featuring advanced gear geometry, heat-resistant alloys, and a compact design. Engineered for reliable and efficient turbocharger operation.",
      image: "/cadpulse-website/projects/2.jpg",
    },
    {
      id: 3,
      title: "Hydroponic Tray & Pot Cleaning Station",
      description: "Efficient, eco-friendly cleaning system for hydroponic trays and pots. Boosts productivity with minimal effort—ideal for modern, sustainable farming setups.",
      image: "/cadpulse-website/projects/3.jpg",
    },
    {
      id: 4,
      title: "Simulator Gaming Machine",
      description: "Designed to bridge the gap between virtual and real-world experiences. Simulates flying, racing, or farming using motors and electric linear actuators for immersive, lifelike motion feedback.",
      image: "/cadpulse-website/projects/4.jpg",
      
    },
    {
      id: 5,
      title: "Wet Tissue Packing Machine",
      description: "Automated solution for hygienic and efficient wet tissue packaging. Handles cutting, folding, moistening, and sealing with precision—ensuring uniform packs, high speed, and consistent quality.",
      image: "/cadpulse-website/projects/5.jpg",
      
    },
    {
      id: 6,
      title: "Bread Storage Vending Machine",
      description: "fresh and convenient access to fresh bread with optimal temperature and humidity control. Ideal for bakeries, supermarkets, and public spaces—combining convenience with quality and reduced waste.",
      image: "/cadpulse-website/projects/6.jpg",
      category: "Product Design",
     
    }
  ];

 
  const testimonials = [
    {
      name: "Stephen brook",
      role: "",
      quote: "CADPULSE team was always open to communicate. The physical project—based on their plans—was completed yesterday, and they were with us every step of the way. Their thorough planning and detailed drawings saved us both time and money. I’d be happy to work with CADPULSE again",
      image: "/cadpulse-website/stephen.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Leon Kaplun",
      role: "",
      quote: "I highly recommend CADPULSE! It’s rare to find such a professional mechanical engineering service on a remote basis. They quickly understood all my requirements, saving me valuable time. Extremely patient and attentive to every customer need. I’ve used their service multiple times and will definitely continue to do so. Thank you very much! ",
      image: "/cadpulse-website/Leon.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Christopher Scheiene",
      role: "CEO Movelio",
      quote: "CADPULSE did an exceptional job! Their attention to detail was remarkable, ensuring every aspect of the project met my expectations. The professionalism of their work stood out, reflecting true expertise and dedication to high-quality results. The team was polite, responsive, and easy to communicate with throughout the process, promptly addressing every question and revision. I was especially impressed by their ability to deliver on time without compromising quality. I highly recommend CADPULSE for anyone seeking a reliable and skilled design partner. Thank you for the excellent work!",
      image: "/cadpulse-website/Christopher.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const teamMembers = [
        {
      name: "Harith Konara",
      role: "",
      bio: "",
      image: "/cadpulse-website/harith.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dilshan Menaka",
      role: "",
      bio: "",
      image: "/cadpulse-website/dilshan.JPG?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
        {
      name: "Piyal Ranjith",
      role: "",
      bio: "",
      image: "/cadpulse-website/piyal.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
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
    window.open('https://wa.me/+94788638718?text=Hello%20Cadpulse,%20I%20would%20like%20to%20discuss%20my%20project', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-ubuntu">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/cadpulse-website/cad.png" alt="Cadpulse" className="h-20 w-100 object-contain" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-accent transition-colors">Team</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-accent transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="bg-iconcolor text-white px-4 py-2 rounded-lg hover:bg-iconcolor/90 transition-colors">Contact</button>
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
          className="absolute top-[-300px] bottom-0 right-0 w-1/2 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(/cadpulse-website/scooter.305.png)',
            transform: 'scaleX(-1)',
            filter: 'grayscale(100%)',
            backgroundSize: '200%'
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
                  <div className="text-3xl md:text-6xl font-bold text-iconcolor">500+</div>
                  <div className="text-lg text-gray-600">Projects</div>
                </div>
                <div className="animate-fade-in-delay-3">
                  <div className="text-3xl md:text-6xl font-bold text-iconcolor">50+</div>
                  <div className="text-lg text-gray-600">Clients</div>
                </div>
                <div className="animate-fade-in-delay-4">
                  <div className="text-3xl md:text-6xl font-bold text-iconcolor">5+</div>
                  <div className="text-lg text-gray-600">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right Image - Larger Size, Zoomed, Faded & Responsive */}
            <div className="absolute right-[-0px] flex justify-end items-center pointer-events-none">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 items-start">
            
            {/* Left Column - Full Height Image */}
            <div className="lg:row-span-2 h-full">
              <div className="w-full h-full">
                <img 
                  src="/cadpulse-website/about.jpeg" 
                  alt="About Cadpulse" 
                  className="rounded-xl shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Top Right - About Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About CADPULSE</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We are a leading SolidWorks design company specializing in precision engineering and CAD modeling. 
                Our team combines technical expertise with innovative thinking to deliver exceptional design solutions 
                that meet the highest industry standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience and 500+ successful projects, we've established ourselves as 
                trusted partners for companies seeking cutting-edge engineering solutions.
              </p>
            </div>

            {/* Bottom Right - Mission and Vision */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-iconcolor">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver cutting-edge design solutions with efficiency and precision, helping our clients 
                  bring their innovative ideas to life through expert CAD modeling and engineering analysis.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-iconcolor2">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            
            {/* Left: Large, Full-Height Title */}
            <div className="lg:col-span-2 flex items-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
                Why Choose<br />Cadpulse
              </h2>
            </div>

            {/* Right: Feature Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-iconcolor rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Precision Focus</h3>
                <p className="text-gray-600">Every design meets exact specifications with meticulous attention to detail.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-iconcolor2 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Quality Assured</h3>
                <p className="text-gray-600">Rigorous quality control processes ensure exceptional results every time.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-iconcolor rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround without compromise on quality or precision.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-iconcolor2 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Expert Team</h3>
                <p className="text-gray-600">Skilled professionals dedicated to excellence in engineering design.</p>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Services Section - Modern & Attractive */}
      <section id="services" className="relative py-24 bg-gradient-to-b from-gray-100 via-white to-gray-200 overflow-hidden">
        {/* Decorative Background Image */}
        <div className="absolute inset-0 bg-[url('/cadpulse-website/service-bg.jpg')] bg-cover bg-center opacity-100 pointer-events-none">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight">Our Services</h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Product Design & Development",
                icon: <Cube className="w-8 h-8 text-white" />,
                color: "bg-iconcolor",
                border: "",
                desc: "SolidWorks-based 3D models with exceptional precision and visual accuracy.",
              },
              {
                title: "Industrial Machinery & Automation",
                icon: <Zap className="w-8 h-8 text-white" />,
                color: "bg-iconcolor",
                border: "",
                desc: "Speed up your innovation process with quick and functional design iterations.",
              },
              {
                title: "Manufacturing Support Services",
                icon: <BarChart3 className="w-8 h-8 text-white" />,
                color: "bg-iconcolor",
                border: "",
                desc: "Stress testing and performance analysis to ensure robust product behavior.",
              },
              {
                title: "Design Validation and Technical Documentation",
                icon: <Wrench className="w-8 h-8 text-white" />,
                color: "bg-iconcolor",
                border: "",
                desc: "Optimization support for manufacturability, reducing cost and complexity.",
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group border ${service.border} p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-3`}
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl lg:text-5xl font-extrabold text-primary leading-tight">Projects We've Delivered</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card cursor-pointer bg-white shadow-lg hover:shadow-2xl overflow-hidden group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      




      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-5xl font-extrabold text-primary leading-tight">Trusted by Industry Leaders</h2>
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

      {/* Testamonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
              {/* Image absolutely positioned, vertically centered */}
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all absolute left-8 top-1/2 -translate-y-1/2"
              />
              
              {/* Text content with left padding so it doesn’t overlap image */}
              <div className="pl-32 text-center md:text-left">
                <p className="text-lg text-gray-600 italic mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-primary">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-accent font-medium">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-accent' : 'bg-gray-300'
                }`}
                aria-label={`Select testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


       {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Title */}
            <div className="lg:w-1/3">
              <h2 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Meet Our<br />
                <span className="text-primary">Founders</span>
              </h2>
            </div>
            
            {/* Right Side - Team Members */}
            <div className="lg:w-2/3">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16">
                {/* Team Member 1 */}
                <div className="text-center group">
                  <div className="relative mb-4">
                    <img 
                      src="/cadpulse-website/harith.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                      alt="Harith Konara" 
                      className="w-28 h-28 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 border-4 border-gray-200 group-hover:border-[#06006e]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Harith Konara</h3>
                </div>

                {/* Team Member 2 */}
                <div className="text-center group">
                  <div className="relative mb-4">
                    <img 
                      src="/cadpulse-website/dilshan.JPG?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                      alt="Dilshan Menaka" 
                      className="w-28 h-28 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 border-4 border-gray-200 group-hover:border-[#5e17eb]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Dilshan Menaka</h3>
                </div>

                {/* Team Member 3 */}
                <div className="text-center group">
                  <div className="relative mb-4">
                    <img 
                      src="/cadpulse-website/piyal.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                      alt="Piyal Ranjith" 
                      className="w-28 h-28 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 border-4 border-gray-200 group-hover:border-[#00c2cb]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Piyal Ranjith</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Contact Section */}
      <footer id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-x-20 gap-y-6 items-start">
            
            {/* Brand (Left Side) */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4 mt-[-20px]">
                <img 
                  src="/cadpulse-website/footer logo.png" 
                  alt="cadpulse Logo" 
                  className="h-20 w-auto object-contain"
                />
              </div>
              <p className="text-neutral-300 leading-relaxed mb-4 text-sm">
                CADPULSE is a mechanical design and engineering studio specializing in product development, machinery design. Operating under Pulseway Solutions (Pvt) Ltd., we support businesses worldwide with reliable, practical, and well-crafted engineering solutions.
              </p>
              <div className="flex items-center space-x-3">
                {/* Email */}
                <a
                  href="mailto:hello@cadpulse.lk"
                  className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {/* Facebook */}
                <a
                  href="https://web.facebook.com/cadpulsefb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                {/* Twitter */}
                <a
                  href="https://x.com/CADPULSE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/77887485/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/cadpulse?igsh=b2k4N2I4M2NnY2Q2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side: Quick Links, Legal, Contact */}
            <div className="md:col-span-1 lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Quick Links */}
                <div>
                  <h4 className="text-base font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#therapists" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        Our Therapists
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-base font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">
                        Disclaimer
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-base font-semibold mb-4">Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Mail className="w-4 h-4 text-primary-500 mt-0.5" />
                      <p className="text-neutral-300 text-sm">hello@cadpulse.com</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Phone className="w-4 h-4 text-primary-500 mt-0.5" />
                      <p className="text-neutral-300 text-sm">+94 77 123 4567</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-primary-500 mt-0.5" />
                      <p className="text-neutral-300 text-sm">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import { Facebook,Twitter, Instagram, Linkedin, MapPin, Calendar,Sparkles,ExternalLink,Star,TrendingUp,Clock,Award ,Target,Settings, CheckCircle, Truck, Users, Cuboid as Cube, Zap, BarChart3, Wrench, ChevronLeft, ChevronRight, Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';
import FloatingConsultationButton from "./components/FloatingConsultationButton";


function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentService, setCurrentService] = useState(0);

  const serviceNames = [
  "Product Design & Development",
  "Industrial Machinery & Automation",
  "Manufacturing Support Services",
  "Design Validation & Technical Documentation",
];


  const projects = [
    {
      id: 1,
      title: "Off-road Standing Scooter",
      description: "A rugged, skateboard-style electric scooter with four hub motors and independent suspension. Delivers smooth, stable performance—handle optional.",
      image: "projects/1.jpg"
    },
    {
      id: 2,
      title: "Turbocharger Gear Box",
      description: "High-performance gearbox built for demanding environments, featuring advanced gear geometry, heat-resistant alloys, and a compact design. Engineered for reliable and efficient turbocharger operation.",
      image: "projects/2.jpg",
    },
    {
      id: 3,
      title: "Hydroponic Tray & Pot Cleaning Station",
      description: "Efficient, eco-friendly cleaning system for hydroponic trays and pots. Boosts productivity with minimal effort—ideal for modern, sustainable farming setups.",
      image: "projects/3.jpg",
    },
    {
      id: 4,
      title: "Simulator Gaming Machine",
      description: "Designed to bridge the gap between virtual and real-world experiences. Simulates flying, racing, or farming using motors and electric linear actuators for immersive, lifelike motion feedback.",
      image: "projects/4.jpg",
      
    },
    {
      id: 5,
      title: "Wet Tissue Packing Machine",
      description: "Automated solution for hygienic and efficient wet tissue packaging. Handles cutting, folding, moistening, and sealing with precision—ensuring uniform packs, high speed, and consistent quality.",
      image: "projects/5.jpg",
      
    },
    {
      id: 6,
      title: "Bread Storage Vending Machine",
      description: "fresh and convenient access to fresh bread with optimal temperature and humidity control. Ideal for bakeries, supermarkets, and public spaces—combining convenience with quality and reduced waste.",
      image: "projects/6.jpg",
      category: "Product Design",
     
    }
  ];

 
  const testimonials = [
    {
      name: "Stephen brook",
      role: "",
      quote: "CADPULSE team was always open to communicate. The physical project—based on their plans—was completed yesterday, and they were with us every step of the way. Their thorough planning and detailed drawings saved us both time and money. I’d be happy to work with CADPULSE again",
      image: "stephen.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Leon Kaplun",
      role: "",
      quote: "I highly recommend CADPULSE! It’s rare to find such a professional mechanical engineering service on a remote basis. They quickly understood all my requirements, saving me valuable time. Extremely patient and attentive to every customer need. I’ve used their service multiple times and will definitely continue to do so. Thank you very much! ",
      image: "Leon.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Christopher Scheiene",
      role: "CEO Movelio",
      quote: "CADPULSE did an exceptional job! Their attention to detail was remarkable, ensuring every aspect of the project met my expectations. The professionalism of their work stood out, reflecting true expertise and dedication to high-quality results. The team was polite, responsive, and easy to communicate with throughout the process, promptly addressing every question and revision. I was especially impressed by their ability to deliver on time without compromising quality. I highly recommend CADPULSE for anyone seeking a reliable and skilled design partner. Thank you for the excellent work!",
      image: "Christopher.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const teamMembers = [
        {
      name: "Harith Konara",
      role: "",
      bio: "",
      image: "harith.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dilshan Menaka",
      role: "",
      bio: "",
      image: "dilshan.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
        {
      name: "Piyal Ranjith",
      role: "",
      bio: "",
      image: "piyal.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const clientLogos = [
    { name: "1", logo: "1.png" },
    { name: "2", logo: "2.png" },
    { name: "3", logo: "3.png" },
    { name: "4", logo: "4.png" },
    { name: "5", logo: "5.png" },
    { name: "6", logo: "6.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % serviceNames.length);
    }, 2000); // Change every 2 seconds
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
              <img src="cad.png" alt="Cadpulse" className="h-20 w-100 object-contain" />
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
     {/* <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>
      */}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        {/* Background Image - Black and White, Flipped (hidden on mobile) */}
        <div 
          className="hidden lg:block absolute top-[-300px] bottom-0 right-0 w-1/2 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(scooter.305.png)',
            transform: 'scaleX(-1)',
            filter: 'grayscale(100%)',
            backgroundSize: '200%'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8 w-full">
          {/* Mobile/Tablet Image */}
          <div className="block lg:hidden w-full flex justify-center mb-0">
              <img 
                src="hero.png" 
                alt="Off-road Standing Scooter" 
                className="w-full max-w-none object-cover opacity-90"
                style={{ width: "100vw" }}
              />
          </div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-primary animate-fade-in">
                Let the Pulse of Your Idea Become a Reality
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-700 animate-fade-in-delay transition-all duration-500">
                {serviceNames[currentService]}
              </p>
              {/* Stats */}
              <div className="order-2 lg:order-none grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 w-full max-w-xs sm:max-w-none">
                <div className="animate-fade-in-delay-2">
                  <div className="text-xl sm:text-2xl md:text-4xl font-bold text-iconcolor">500+</div>
                  <div className="text-base sm:text-lg text-gray-600">Projects</div>
                </div>
                <div className="animate-fade-in-delay-3">
                  <div className="text-xl sm:text-2xl md:text-4xl font-bold text-iconcolor">50+</div>
                  <div className="text-base sm:text-lg text-gray-600">Clients</div>
                </div>
                <div className="animate-fade-in-delay-4">
                  <div className="text-xl sm:text-2xl md:text-4xl font-bold text-iconcolor">5+</div>
                  <div className="text-base sm:text-lg text-gray-600">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right Image - Larger Size, Zoomed, Faded & Responsive (Laptop/Desktop only) */}
            <div className="hidden lg:absolute lg:right-0 lg:flex lg:justify-end lg:items-center lg:pointer-events-none">
              <img 
                src="scooter.305.png" 
                alt="Off-road Standing Scooter" 
                className="w-full max-w-[900px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] object-contain opacity-20 animate-fade-in-delay-2 transform scale-125 md:scale-150"
              />
            </div>
          </div>
        </div>

        <FloatingConsultationButton />


      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 items-start">
            
            {/* Left Column - Full Height Image */}
            <div className="lg:row-span-2 h-full">
              <div className="w-full h-full">
                <img 
                  src="about.jpeg" 
                  alt="About Cadpulse" 
                  className="rounded-xl shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Top Right - About Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About CADPULSE</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We are a Industrial machinery and product design company specializing in precision engineering and CAD modeling. Our team combines technical expertise with innovative thinking to deliver exceptional design solutions that meet the highest industry standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience and 500+ successful projects, we've established ourselves as trusted partners for companies and individuals seeking cutting-edge engineering solutions.
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
      <section id="services" className="py-8 lg:py-12 bg-neutral-900 relative">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3Ccircle cx=%2227%22 cy=%227%22 r=%221%22/%3E%3Ccircle cx=%2247%22 cy=%227%22 r=%221%22/%3E%3Ccircle cx=%227%22 cy=%2227%22 r=%221%22/%3E%3Ccircle cx=%2227%22 cy=%2227%22 r=%221%22/%3E%3Ccircle cx=%2247%22 cy=%2227%22 r=%221%22/%3E%3Ccircle cx=%227%22 cy=%2247%22 r=%221%22/%3E%3Ccircle cx=%2227%22 cy=%2247%22 r=%221%22/%3E%3Ccircle cx=%2247%22 cy=%2247%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Key Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Product Design & Development",
                image: "1.jpg",
                imageAlt: "Product Design",
                color: "",
                description: "Transforming innovative concepts into manufacturable products with precision engineering and user-focused design.",
                category: "product-design"
              },
              {
                title: "Industrial Machinery & Automation",
                image: "2.jpg",
                imageAlt: "Machinery & Automation",
                color: "",
                description: "Custom machinery and automation solutions to enhance efficiency, precision, and productivity in industrial processes.",
                category: "machinery-automation"
              },
              {
                title: "Manufacturing Support Services",
                image: "3.jpg",
                imageAlt: "Manufacturing Support",
                color: "",
                description: "End-to-end manufacturing support: design validation, prototyping, technical documentation, and production design assistance.",
                category: "manufacturing-support"
              },
              {
                title: "Design Validation & Documentation",
                image: "4.jpg",
                imageAlt: "Design Validation",
                color: "",
                description: "Detailed validation through simulations and precise technical documentation for seamless execution and certification.",
                category: "validation-documentation"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-800 flex flex-col"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-50`}
                  ></div>
                </div>

                {/* Service Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-primary-500 hover:text-primary-400 transition-colors text-sm font-semibold"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-extrabold text-primary leading-tight">Featured Projects</h2>
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
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative flex flex-col md:block items-center">
              {/* Image: Centered above text on mobile, left on desktop */}
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all mb-4 md:mb-0 md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2"
              />

              {/* Text content: Centered on mobile, left with padding on desktop */}
              <div className="md:pl-32 text-center md:text-left flex-1">
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
              className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-accent hover:text-white transition-colors"
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
                  index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
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
                      src="harith.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
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
                      src="dilshan.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
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
                      src="piyal.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
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
    <footer id="contact" className="bg-primary text-white relative">
      {/* Grain texture overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Mobile: Center everything, Desktop: Keep original layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[4fr_1fr_2fr_2fr_2fr] gap-8">
          {/* Brand - Mobile: centered, Desktop: original */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4 mt-[-20px]">
              <img 
                src="footer logo.png" 
                alt="cadpulse Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6 text-sm">
              CADPULSE is a mechanical design and engineering company specializing in product development, machinery design. Operating under Pulseway Solutions (Pvt) Ltd., we support businesses worldwide with reliable, practical, and well-crafted engineering solutions.
            </p>
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <a
                href="https://x.com/CADPULSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/cadpulsefb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/cadpulse?igsh=b2k4N2I4M2NnY2Q2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/77887485/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@cadpulse.lk"
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer column for larger gap - hidden on mobile */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Quick Links - Mobile: centered, Desktop: original */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Our Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Legal - Mobile: centered, Desktop: original */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact - Mobile: centered, Desktop: original */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-400 text-sm">hello@cadpulse.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-400 text-sm">+94 78 863 8718</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-400 text-sm">Tangalle, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Mobile: centered, Desktop: original */}
        <div className="border-t border-neutral-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-neutral-500 text-xs">
              © 2025 Cadpulse.com All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs mt-2 md:mt-0">
              Designed with precision and care in Sri Lanka
            </p>
            <p className="text-neutral-500 text-xs mt-2 md:mt-0">
              Developed by <a href="https://www.lunorlabs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-700">Lunor Labs</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    <FloatingConsultationButton />
    </div>
  );
}

export default App;
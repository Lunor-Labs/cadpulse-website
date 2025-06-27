import React, { useState, useEffect } from 'react';
import { Calendar,Sparkles,ExternalLink,Star,TrendingUp,Clock,Award ,Target,Settings, CheckCircle, Truck, Users, Cuboid as Cube, Zap, BarChart3, Wrench, ChevronLeft, ChevronRight, Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';


function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Scooter",
      description: "Scooter Design",
      image: "/cadpulse-website/projects/1.jpg",
      category: "Industrial Machinery",
      duration: "8 weeks",
      rating: 5,
      details: "Complete redesign of industrial mixing equipment with automated controls, resulting in 35% productivity increase and 20% reduction in energy consumption. The project involved advanced 3D modeling, stress analysis, and integration of smart control systems.",
      metrics: [
        { label: "Productivity Increase", value: "35%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Energy Reduction", value: "20%", icon: <Zap className="w-5 h-5" /> },
        { label: "Project Duration", value: "8 weeks", icon: <Clock className="w-5 h-5" /> }
      ],
      technologies: ["SolidWorks", "AutoCAD", "ANSYS", "PLC Programming"],
      client: "Manufacturing Corp"
    },
    {
      id: 2,
      title: "Precision Manufacturing Jig",
      description: "Reduced assembly time by 50% with custom tooling",
      image: "/cadpulse-website/projects/2.jpg",
      category: "Manufacturing Support",
      duration: "6 weeks",
      rating: 5,
      details: "Custom-designed manufacturing jig for precision assembly operations, dramatically improving efficiency and consistency in production. Features modular design for multiple product variants.",
      metrics: [
        { label: "Assembly Time Reduction", value: "50%", icon: <Clock className="w-5 h-5" /> },
        { label: "Quality Improvement", value: "99.8%", icon: <Award className="w-5 h-5" /> },
        { label: "ROI Achievement", value: "6 months", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      technologies: ["Fusion 360", "CNC Programming", "Quality Control"],
      client: "Precision Industries"
    },
    {
      id: 3,
      title: "Consumer Electronics Housing",
      description: "Optimized design for mass production scalability",
      image: "/cadpulse-website/projects/3.jpg",
      category: "Product Design",
      duration: "10 weeks",
      rating: 5,
      details: "Innovative housing design for consumer electronics with focus on manufacturability, cost optimization, and aesthetic appeal. Includes thermal management and EMI shielding considerations.",
      metrics: [
        { label: "Cost Reduction", value: "25%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Production Speed", value: "+40%", icon: <Zap className="w-5 h-5" /> },
        { label: "Material Efficiency", value: "30%", icon: <Target className="w-5 h-5" /> }
      ],
      technologies: ["Rhino 3D", "KeyShot", "Injection Molding Analysis"],
      client: "Tech Innovations Ltd"
    },
    {
      id: 4,
      title: "Automotive Component Reverse Engineering",
      description: "Recreated legacy parts with improved materials",
      image: "/cadpulse-website/projects/4.jpg",
      category: "Reverse Engineering",
      duration: "12 weeks",
      rating: 5,
      details: "Reverse engineered discontinued automotive components with material upgrades and performance enhancements for extended service life. Included comprehensive testing and validation.",
      metrics: [
        { label: "Durability Increase", value: "60%", icon: <Award className="w-5 h-5" /> },
        { label: "Weight Reduction", value: "15%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Cost Savings", value: "40%", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      technologies: ["3D Scanning", "Material Analysis", "FEA Simulation"],
      client: "Auto Parts Solutions"
    },
    {
      id: 5,
      title: "Packaging Machinery Upgrade",
      description: "Modernized controls for Industry 4.0 compliance",
      image: "/cadpulse-website/projects/5.jpg",
      category: "Industrial Machinery",
      duration: "14 weeks",
      rating: 5,
      details: "Complete modernization of packaging machinery with smart controls, IoT integration, and predictive maintenance capabilities. Achieved Industry 4.0 compliance with real-time monitoring.",
      metrics: [
        { label: "Efficiency Gain", value: "45%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Downtime Reduction", value: "70%", icon: <Clock className="w-5 h-5" /> },
        { label: "Maintenance Savings", value: "55%", icon: <Wrench className="w-5 h-5" /> }
      ],
      technologies: ["Industrial IoT", "HMI Design", "Predictive Analytics"],
      client: "PackTech Systems"
    },
    {
      id: 6,
      title: "Medical Device Prototype",
      description: "FDA-compliant design with enhanced ergonomics",
      image: "/cadpulse-website/projects/6.jpg",
      category: "Product Design",
      duration: "16 weeks",
      rating: 5,
      details: "Precision medical device design meeting FDA compliance standards with focus on user ergonomics and manufacturing efficiency. Includes biocompatible material selection and sterilization considerations.",
      metrics: [
        { label: "Compliance Rating", value: "100%", icon: <CheckCircle className="w-5 h-5" /> },
        { label: "User Satisfaction", value: "95%", icon: <Users className="w-5 h-5" /> },
        { label: "Time to Market", value: "-30%", icon: <Clock className="w-5 h-5" /> }
      ],
      technologies: ["Medical CAD", "Biocompatible Materials", "FDA Validation"],
      client: "MedTech Innovations"
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto modal-enter">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-80 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
              <div className="flex items-center space-x-4 text-sm opacity-90">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.client}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.details}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {project.metrics.map((metric: any, index: number) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-3 text-blue-600">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2 metric-value">{metric.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Discuss Similar Project
                <MessageCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-accent transition-colors">Projects</button>
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
            <div className="absolute right-[-100px] flex justify-end items-center pointer-events-none">
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Cadpulse</h2>
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
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver cutting-edge design solutions with efficiency and precision, helping our clients 
                  bring their innovative ideas to life through expert CAD modeling and engineering analysis.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
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
        </div>
      </section>



      {/* Services Section - Modern & Attractive */}
      <section id="services" className="relative py-24 bg-gradient-to-b from-gray-100 via-white to-gray-200 overflow-hidden">
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
                title: "Product Design & Development",
                icon: <Cube className="w-8 h-8 text-white" />,
                color: "from-indigo-500 to-purple-500",
                border: "border-indigo-500",
                desc: "SolidWorks-based 3D models with exceptional precision and visual accuracy.",
              },
              {
                title: "Industrial Machinery & Automation",
                icon: <Zap className="w-8 h-8 text-white" />,
                color: "from-pink-500 to-red-500",
                border: "border-pink-500",
                desc: "Speed up your innovation process with quick and functional design iterations.",
              },
              {
                title: "Manufacturing Support Services",
                icon: <BarChart3 className="w-8 h-8 text-white" />,
                color: "from-blue-500 to-cyan-500",
                border: "border-blue-500",
                desc: "Stress testing and performance analysis to ensure robust product behavior.",
              },
              {
                title: "Design Validation and Technical Documentation",
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



      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects We've Delivered</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped clients achieve remarkable results through innovative CAD solutions and engineering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {project.category}
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">High Impact</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <Sparkles className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center mx-auto group shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Discuss Your Project
              <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />




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
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Title */}
            <div className="lg:w-1/3">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#06006e] leading-tight">
                Meet Our<br />
                <span className="text-[#5e17eb]">Founders</span>
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
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Contact us today for a consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Discuss Your Project</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need product design, industrial machinery development, or technical drafting, 
                our team is ready to help. Reach out to us via WhatsApp for immediate assistance or 
                to schedule a detailed consultation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span>+94 788 638 718</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span>info@cadpulse.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Quick Contact</h3>
              <p className="text-gray-300 mb-6">
                Click the button below to start a WhatsApp conversation with our team. 
                We'll respond quickly to discuss your project requirements.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </button>
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
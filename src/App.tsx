import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Settings, 
  Cpu, 
  Zap, 
  Target, 
  Users, 
  CheckCircle,
  MessageCircle,
  Layers,
  Cog,
  RotateCcw,
  Wrench,
  PenTool,
  ExternalLink,
  TrendingUp,
  Award,
  Clock,
  Star,
  Calendar,
  BarChart3,
  Sparkles,
  Eye,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'team', 'clients', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
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
    window.open('https://wa.me/94788638718?text=Hello, I would like to inquire about your CAD services.', '_blank');
  };

  const services = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Product Design",
      description: "Complete product development from concept to manufacturing-ready designs using advanced CAD software.",
      features: ["3D Modeling", "Prototyping", "Design Optimization"]
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Industrial Machinery Design",
      description: "Custom industrial machinery and equipment design for manufacturing processes and automation.",
      features: ["Automation Systems", "Custom Equipment", "Process Optimization"]
    },
    {
      icon: <RotateCcw className="w-12 h-12" />,
      title: "Reverse Engineering",
      description: "Recreate existing products through precise measurement, analysis, and digital modeling.",
      features: ["3D Scanning", "Legacy Parts", "Design Recreation"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Manufacturing Support",
      description: "Technical support services including design optimization and manufacturing consultation.",
      features: ["Process Planning", "Quality Control", "Cost Optimization"]
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "2D Drafting",
      description: "Professional technical drawings, blueprints, and documentation for engineering projects.",
      features: ["Technical Drawings", "Assembly Plans", "Documentation"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Industrial Mixer Redesign",
      description: "Enhanced productivity by 35% through automation",
      image: "/project-industrial-mixer.jpg",
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
      image: "/project-manufacturing-jig.jpg",
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
      image: "/project-electronics-housing.jpg",
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
      image: "/project-automotive-component.jpg",
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
      image: "/project-packaging-machinery.jpg",
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
      image: "/project-medical-device.jpg",
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

  // Real company logos with proper URLs
  const clientBrands = [
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
    },
    { 
      name: "Amazon AWS", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png"
    },
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png"
    },
    { 
      name: "Tesla", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/240px-Tesla_T_symbol.svg.png"
    },
    { 
      name: "IBM", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png"
    },
    { 
      name: "Intel", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/320px-Intel_logo_%282006-2020%29.svg.png"
    },
    { 
      name: "Samsung", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Manufacturing Corp",
      message: "CADPULSE transformed our production line with their innovative machinery design. The 35% productivity increase exceeded our expectations, and their attention to detail was remarkable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Tech Innovations Ltd",
      message: "The product housing design they created was not only aesthetically pleasing but also optimized for manufacturing. We saved 25% on production costs while improving quality.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      company: "Precision Industries",
      message: "Their custom manufacturing jig reduced our assembly time by half. The precision and quality of their work is unmatched. Highly recommend CADPULSE for any engineering project.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      company: "MedTech Innovations",
      message: "Working with CADPULSE on our medical device was exceptional. They understood FDA requirements perfectly and delivered a design that exceeded all compliance standards.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      company: "Auto Parts Solutions",
      message: "The reverse engineering project was completed flawlessly. They recreated our legacy parts with improved materials and performance. Outstanding technical expertise.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Team members with professional photos
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Lead CAD Engineer",
      description: "10+ years experience in mechanical design and 3D modeling",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      expertise: ["SolidWorks", "AutoCAD", "Product Design"]
    },
    {
      name: "Sarah Mitchell",
      role: "Industrial Design Specialist",
      description: "Expert in industrial machinery and automation systems",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      expertise: ["Industrial Design", "Automation", "Manufacturing"]
    },
    {
      name: "David Kumar",
      role: "Reverse Engineering Expert",
      description: "Specialized in 3D scanning and legacy part recreation",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      expertise: ["3D Scanning", "Reverse Engineering", "Analysis"]
    },
    {
      name: "Maria Rodriguez",
      role: "Project Manager",
      description: "Ensures quality delivery and client satisfaction",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      expertise: ["Project Management", "Quality Assurance", "Client Relations"]
    },
    {
      name: "John Anderson",
      role: "2D Drafting Specialist",
      description: "Technical drawings and documentation expert",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      expertise: ["Technical Drawing", "Documentation", "CAD Drafting"]
    },
    {
      name: "Lisa Chen",
      role: "Quality Control Engineer",
      description: "Ensures precision and accuracy in all deliverables",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face",
      expertise: ["Quality Control", "Testing", "Validation"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  return (
    <div className="min-h-screen bg-white font-ubuntu">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/cadpulse-logo.png" 
                alt="CADPULSE Logo" 
                className="w-10 h-10 mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">CADPULSE</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Clients', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Clients', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Precision CAD
                <span className="block text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your ideas into reality with our professional CAD design services. 
                From product development to industrial machinery, we deliver precision engineering solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>
            
            {/* Bike CAD Design Illustration */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 gap-2 h-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="bg-white rounded-sm animate-pulse-slow" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>
                
                {/* CAD Interface Mockup - Bike Design */}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-xl">
                  {/* Toolbar */}
                  <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-sm font-medium text-gray-600">Bike Design - CAD Workspace</div>
                  </div>
                  
                  {/* 3D Viewport with Bike */}
                  <div className="bg-gray-900 rounded-lg p-6 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                    <div className="relative z-10 flex items-center justify-center h-40">
                      {/* Bike Frame Design */}
                      <div className="relative bike-frame">
                        {/* Main Frame */}
                        <div className="relative">
                          {/* Frame Triangle */}
                          <div className="w-20 h-12 border-3 border-blue-400 rounded-lg transform rotate-12 relative">
                            {/* Seat Post */}
                            <div className="absolute -top-4 right-2 w-1 h-6 bg-blue-400 rounded-full"></div>
                            {/* Seat */}
                            <div className="absolute -top-6 right-1 w-3 h-1 bg-blue-500 rounded-full"></div>
                            {/* Handle Bar Post */}
                            <div className="absolute -top-2 -left-2 w-1 h-4 bg-blue-400 rounded-full transform -rotate-45"></div>
                            {/* Handle Bars */}
                            <div className="absolute -top-4 -left-4 w-6 h-1 bg-blue-500 rounded-full"></div>
                          </div>
                          
                          {/* Front Wheel */}
                          <div className="absolute -left-6 top-8 w-8 h-8 border-2 border-blue-400 rounded-full bike-wheel">
                            <div className="absolute inset-1 border border-blue-300 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                          
                          {/* Rear Wheel */}
                          <div className="absolute right-2 top-8 w-8 h-8 border-2 border-blue-400 rounded-full bike-wheel" style={{animationDelay: '0.5s'}}>
                            <div className="absolute inset-1 border border-blue-300 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                          
                          {/* Pedals */}
                          <div className="absolute left-4 top-10 w-2 h-1 bg-blue-500 rounded-full animate-spin-slow"></div>
                          
                          {/* Chain */}
                          <div className="absolute left-4 top-10 w-6 h-0.5 bg-blue-300 rounded-full opacity-60"></div>
                        </div>
                        
                        {/* Technical Annotations */}
                        <div className="absolute -right-8 -top-2 text-xs text-blue-300">
                          <div className="bg-blue-900/50 px-2 py-1 rounded text-white">
                            Frame: Al 6061
                          </div>
                        </div>
                        <div className="absolute -left-8 top-12 text-xs text-blue-300">
                          <div className="bg-blue-900/50 px-2 py-1 rounded text-white">
                            Weight: 12.5kg
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="grid grid-cols-8 grid-rows-6 h-full">
                        {[...Array(48)].map((_, i) => (
                          <div key={i} className="border border-blue-300"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tool Palette */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Layers className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Cog className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <PenTool className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Cpu className="w-4 h-4" />
                      <span>Rendering...</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Zap className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Target className="w-6 h-6 text-white animate-pulse" style={{animationDelay: '1s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Combined with Mission & Vision */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CADPULSE</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading provider of comprehensive CAD design and engineering services, transforming innovative concepts into precise, manufacturable solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CADPULSE combines technical expertise with creative problem-solving to deliver exceptional results. 
                Our team of experienced engineers and designers serves clients across various sectors, from product 
                development startups to established manufacturing companies.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of industry experience and a commitment to excellence, we accelerate your project 
                timelines while maintaining the highest standards of quality and precision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Precision Focus</h3>
                  <p className="text-sm text-gray-600">Every design meets exact specifications</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-sm text-gray-600">Rigorous quality control processes</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Zap className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Quick turnaround without compromise</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">Skilled professionals dedicated to excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To empower businesses and innovators by providing exceptional CAD design services that transform 
                ideas into precise, manufacturable solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering quality, reliability, and innovation in every project, ensuring 
                every design meets the highest standards of technical excellence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 p-3 rounded-xl mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be the leading CAD design service provider, recognized for our technical expertise, 
                innovative solutions, and commitment to client success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision contributing to groundbreaking products and technologies while continuously 
                evolving our capabilities to stay at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CAD solutions tailored to your specific needs, from initial concept to final production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={openWhatsApp}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center mx-auto group-hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Lightbulb className="mr-2 w-4 h-4" />
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated professionals bring expertise, creativity, and commitment to every project
            </p>
          </div>

          {/* Team Members Slider */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={index} className="flex-shrink-0 mx-4 w-80">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-blue-200 font-medium">{member.role}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Combined Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">CAD Software Expertise</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Brands Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working with world-class companies across various industries
            </p>
          </div>

          {/* Client Logos Carousel */}
          <div className="relative overflow-hidden bg-gray-50 rounded-2xl py-12">
            <div className="flex animate-scroll">
              {[...clientBrands, ...clientBrands].map((client, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="w-40 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 hover:shadow-xl transition-shadow hover-lift">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Become Our Next Success Story</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of satisfied clients who have transformed their ideas into reality with our expert CAD services.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center mx-auto group shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Users className="mr-2 w-5 h-5" />
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients about their experience working with CADPULSE
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="testimonial-card bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Client Avatar Section */}
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <img 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                        <Quote className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-blue-200 font-medium text-lg">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <div className="flex items-center justify-center space-x-1 mt-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-8 lg:p-12 flex items-center">
                  <div>
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                      "{testimonials[currentTestimonial].message}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Verified Client</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Award className="w-5 h-5 text-blue-500" />
                        <span>5-Star Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-2xl rounded-full p-4 hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-2xl rounded-full p-4 hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Client Satisfaction Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Repeat Clients</div>
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
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span>Sri Lanka</span>
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
      <footer className="bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/cadpulse-logo.png" 
                alt="CADPULSE Logo" 
                className="w-6 h-6 mr-2"
              />
              <span className="text-xl font-bold">CADPULSE</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 CADPULSE. All rights reserved. | Professional CAD Solutions
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-bounce-slow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
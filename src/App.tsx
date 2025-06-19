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
  Sparkles
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'mission', 'team', 'clients', 'contact'];
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
      icon: <Cog className="w-8 h-8" />,
      title: "INDUSTRIAL MACHINERY DESIGN",
      description: "From heavy-duty machinery to automated production lines, CADPULSE specializes in creating robust and efficient industrial machinery designs. Trust us to optimize performance and drive your operations forward."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "PRODUCT DESIGN",
      description: "Transform your concepts into market-ready solutions with CADPULSE's expert product design services. Our team merges creativity with technology to craft innovative designs that captivate audiences and drive success."
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "REVERSE ENGINEERING",
      description: "We reimagine your products and stay ahead of the curve by being updated and meticulously analyze and recreate products, enhancing design, efficiency, and functionality."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "MANUFACTURING SUPPORTIVE SERVICES",
      description: "From concept to production, we offer comprehensive assistance to streamline your manufacturing processes. Our expert team provides tailored solutions, ensuring efficiency, quality, and cost-effectiveness every step of the way"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "2D DRAFTING",
      description: "We ensure precision and clarity in your engineering projects with 2D drafting services. Our skilled drafters produce clear and concise technical drawings, ready for seamless integration into your projects."
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

  const teamMembers = [
    {
      name: "Engineering Team",
      role: "CAD Specialists & Design Engineers",
      description: "Our experienced team combines technical expertise with creative problem-solving to deliver exceptional CAD solutions."
    },
    {
      name: "Project Management",
      role: "Quality Assurance & Client Relations",
      description: "Dedicated professionals ensuring project timelines, quality standards, and seamless communication throughout the process."
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
              {['Home', 'About', 'Services', 'Projects', 'Mission', 'Team', 'Clients', 'Contact'].map((item) => (
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
              {['Home', 'About', 'Services', 'Projects', 'Mission', 'Team', 'Clients', 'Contact'].map((item) => (
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
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
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
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl animate-float">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-4 bg-blue-200 rounded animate-pulse-slow"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-blue-100 rounded animate-pulse-slow"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-blue-300 rounded w-1/2"></div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <img src="/cadpulse-logo.png" alt="CAD" className="w-12 h-12" />
                  <Cpu className="w-10 h-10 text-gray-400" />
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CADPULSE</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CADPULSE stands at the forefront of design innovation, seamlessly merging cutting-edge technology with
                creative expertise. Our mission is simple, to redefine product and machinery design through a relentless
                pursuit of excellence. Operating under The Pulseway Solutions (PVT) Ltd, we ensure our solutions are not
                only innovative but also backed by a solid foundation of industry experience and expertise
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a team of seasoned professionals skilled in Engineering, creative designing, CAD (Computer-Aided
              Design), CAM (Computer-Aided Manufacturing), and CAE (Computer-Aided Engineering), we bring ideas to
              life precisly and efficiently. From conceptualization to prototyping and beyond, our holistic approach
              ensures seamless integration and optimal performance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our expertise in Industrial Machinery, Consumer Products, Automotive, Robotics, and Automation allows us
              to confidently address complex challenges. Adhering to rigorous quality standards, we employ advanced
              tools and methodologies to ensure reliability, durability, and compliance with industry regulations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're a startup with a bold vision or an established enterprise seeking to stay ahead of the curve,
              CADPULSE is your trusted partner. Let's collaborate and unlock the full potential of your ideas, together.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Precision Focus</h3>
                  <p className="text-sm text-gray-600">Every design meets exact specifications</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-sm text-gray-600">Rigorous quality control processes</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Zap className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Quick turnaround without compromise</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">Skilled professionals dedicated to excellence</p>
                </div>
              </div>
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button 
                  onClick={openWhatsApp}
                  className="mt-6 text-blue-600 font-medium hover:text-blue-700 flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Driven by innovation and fueled by passion, our mission is to redefine the boundaries of design and
              engineering. We strive to empower businesses with unparalleled solutions that enhance efficiency,
              reliability, and sustainability.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Revolutionizing industries through cutting-edge product and machinery design, driving innovation
              forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated professionals who bring expertise, creativity, and commitment to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Projects Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Clients & Industries</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working with diverse clients across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <Layers className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Development</h3>
              <p className="text-gray-600">Consumer electronics, automotive parts, and industrial components</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <Cog className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Custom machinery, automation systems, and production tools</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <PenTool className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engineering</h3>
              <p className="text-gray-600">Technical drawings, blueprints, and documentation services</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Join our satisfied clients and experience the CADPULSE difference
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Quote Today
            </button>
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
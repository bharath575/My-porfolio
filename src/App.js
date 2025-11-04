import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Server, ChevronDown, Terminal, Briefcase, Award, Download, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          if (isInView) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Redux', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Responsive Design'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'REST APIs', 'GraphQL', 'Microservices'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase', 'Prisma'],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Linux', 'Nginx', 'Postman']
  };

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: ['Reduced API response time by 60%', 'Implemented CI/CD pipeline', 'Built real-time features using WebSockets']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Solutions',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams.',
      achievements: ['Delivered 15+ projects on time', 'Improved code coverage to 85%', 'Optimized database queries by 40%']
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Built responsive websites and web applications. Gained experience in full development lifecycle.',
      achievements: ['Created 20+ landing pages', 'Learned modern frameworks', 'Contributed to open source']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, real-time notifications, and comprehensive admin dashboard with analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      features: ['Payment Gateway', 'Real-time Inventory', 'Admin Dashboard', 'Email Notifications'],
      link: '#',
      github: '#'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'WebSocket-based collaborative workspace with real-time document editing, video conferencing, and team chat functionality.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'WebRTC'],
      features: ['Live Collaboration', 'Video Calls', 'File Sharing', 'Role Management'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Business intelligence platform with AI-driven insights, predictive analytics, and customizable data visualizations.',
      tech: ['React', 'Python', 'FastAPI', 'TensorFlow', 'D3.js'],
      features: ['ML Predictions', 'Custom Reports', 'Data Visualization', 'API Integration'],
      link: '#',
      github: '#'
    },
    {
      title: 'Social Media Management Suite',
      description: 'Comprehensive tool for managing multiple social media accounts with post scheduling, analytics, and engagement tracking.',
      tech: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
      features: ['Multi-platform', 'Auto-scheduling', 'Analytics', 'Team Collaboration'],
      link: '#',
      github: '#'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'MongoDB Certified Developer', issuer: 'MongoDB University', year: '2022' },
    { name: 'React Advanced Patterns', issuer: 'Frontend Masters', year: '2022' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation - Mobile First */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {'<YourName />'}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6 xl:gap-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors relative text-sm xl:text-base ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fadeIn">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize hover:text-purple-400 hover:bg-purple-500/10 transition-all py-2 px-4 rounded-lg ${activeSection === section ? 'text-purple-400 bg-purple-500/10' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-10">
        <div className="max-w-4xl text-center w-full">
          <div className="mb-4 sm:mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 mb-4 sm:mb-6 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code2 size={window.innerWidth < 640 ? 48 : 56} className="text-purple-400" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/20 rounded-full text-purple-300 text-xs sm:text-sm border border-purple-500/30 inline-block">
              Available for Opportunities
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Full Stack Developer
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-2 sm:mb-4 font-semibold px-4">
            Building Digital Excellence
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Specialized in creating robust, scalable web applications using modern technologies.
            Passionate about clean architecture, optimal performance, and delivering exceptional user experiences.
          </p>

          {/* Stats - Mobile Optimized */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Exp.</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">50+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-xs sm:text-sm text-gray-400">Clients</div>
            </div>
          </div>

          {/* CTA Buttons - Mobile Stacked */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button onClick={() => scrollToSection('projects')} className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 font-semibold text-sm sm:text-base">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/10 transition-all font-semibold text-sm sm:text-base">
              Get In Touch
            </button>
            <a href="#resume" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 justify-center px-4">
            <a href="https://github.com" className="hover:text-purple-400 transition-all transform hover:scale-110 p-2 rounded-full hover:bg-purple-500/10" aria-label="GitHub">
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-all transform hover:scale-110 p-2 rounded-full hover:bg-purple-500/10" aria-label="LinkedIn">
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="mailto:your@email.com" className="hover:text-purple-400 transition-all transform hover:scale-110 p-2 rounded-full hover:bg-purple-500/10" aria-label="Email">
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>
          <div className="mt-12 sm:mt-16 animate-bounce hidden sm:block">
            <ChevronDown size={32} className="mx-auto text-purple-400 cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section - Mobile First */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-400">Get to know me better</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-300">My Journey</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience building end-to-end web applications.
                My expertise spans across modern frontend frameworks, robust backend systems, and cloud infrastructure.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I thrive on solving complex problems and transforming ideas into elegant, efficient solutions.
                Whether it's optimizing database queries, architecting scalable systems, or crafting intuitive user interfaces,
                I approach every challenge with dedication and precision.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-pink-300">What I Do</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-purple-300 text-sm sm:text-base">Full Stack Development</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Building complete web applications from concept to deployment</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-pink-300 text-sm sm:text-base">System Architecture</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Designing scalable and maintainable application structures</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-purple-300 text-sm sm:text-base">Performance Optimization</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Enhancing speed, efficiency, and user experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-pink-300 text-sm sm:text-base">Team Leadership</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Mentoring developers and leading technical initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications - Mobile Optimized */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-purple-300 flex items-center justify-center gap-2">
              <Award size={24} className="sm:w-7 sm:h-7 text-pink-400" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-purple-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <p className="font-semibold text-purple-300 mb-1 text-sm sm:text-base">{cert.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Mobile First */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-400">My professional journey</p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2 flex items-start gap-2">
                      <Briefcase size={20} className="sm:w-6 sm:h-6 text-pink-400 flex-shrink-0 mt-1" />
                      <span>{exp.title}</span>
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-300 mb-2">{exp.company}</p>
                  </div>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 rounded-full text-purple-300 text-xs sm:text-sm border border-purple-500/30 self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-pink-300">Key Achievements:</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5 sm:mt-1 flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Mobile First */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-400">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Palette className="text-purple-400" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm hover:bg-purple-500/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Server className="text-pink-400" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold text-pink-300">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-pink-500/20 rounded-full text-xs sm:text-sm hover:bg-pink-500/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Database className="text-purple-400" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm hover:bg-purple-500/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Terminal className="text-pink-400" size={28} />
                <h3 className="text-lg sm:text-xl font-semibold text-pink-300">DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-pink-500/20 rounded-full text-xs sm:text-sm hover:bg-pink-500/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile First */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-400">Some things I've built</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-300 group-hover:text-pink-300 transition-colors">{project.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <a href={project.github} className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="GitHub">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Live Demo">
                      <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-pink-300 mb-2">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                        <span className="text-purple-400 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm text-purple-300 border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a href="https://github.com" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800/50 border border-purple-500/30 rounded-full hover:bg-gray-800 transition-all text-sm sm:text-base">
              <Github size={18} className="sm:w-5 sm:h-5" />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile First */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-400">Have a project in mind? Let's talk!</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center leading-relaxed">
              I'm always excited to discuss new projects, innovative ideas, or opportunities to contribute
              to your vision. Whether you need a full-stack developer for your team or want to collaborate
              on something amazing, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <a href="mailto:your@email.com" className="flex flex-col items-center p-5 sm:p-6 bg-purple-500/10 rounded-lg sm:rounded-xl hover:bg-purple-500/20 transition-all transform hover:scale-105 group">
                <Mail className="text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-purple-300 font-semibold mb-1 text-sm sm:text-base">Email Me</span>
                <span className="text-xs sm:text-sm text-gray-400 text-center break-all">your@email.com</span>
              </a>

              <a href="https://linkedin.com" className="flex flex-col items-center p-5 sm:p-6 bg-purple-500/10 rounded-lg sm:rounded-xl hover:bg-purple-500/20 transition-all transform hover:scale-105 group">
                <Linkedin className="text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-purple-300 font-semibold mb-1 text-sm sm:text-base">LinkedIn</span>
                <span className="text-xs sm:text-sm text-gray-400">Connect with me</span>
              </a>

              <a href="https://github.com" className="flex flex-col items-center p-5 sm:p-6 bg-purple-500/10 rounded-lg sm:rounded-xl hover:bg-purple-500/20 transition-all transform hover:scale-105 group">
                <Github className="text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-purple-300 font-semibold mb-1 text-sm sm:text-base">GitHub</span>
                <span className="text-xs sm:text-sm text-gray-400">Check my code</span>
              </a>
            </div>

            <div className="text-center space-y-4">
              <a href="your-resume.pdf" className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 font-semibold text-sm sm:text-base">
                Download My Resume
              </a>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
            <div className="bg-gray-800/30 rounded-lg sm:rounded-xl p-4 border border-purple-500/10">
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:your@email.com" className="text-sm sm:text-base text-purple-300 hover:text-pink-300 transition-colors break-all">your@email.com</a>
            </div>
            <div className="bg-gray-800/30 rounded-lg sm:rounded-xl p-4 border border-purple-500/10">
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Location</p>
              <p className="text-sm sm:text-base text-purple-300">Open to Remote Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="py-6 sm:py-8 text-center text-gray-400 border-t border-purple-500/20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            <a href="https://github.com" className="hover:text-purple-400 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your@email.com" className="hover:text-purple-400 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-xs sm:text-sm">© 2024 Full Stack Developer. Built with React & Tailwind CSS</p>
          <p className="text-xs text-gray-500 mt-2">Designed for optimal performance across all devices</p>
        </div>
      </footer>
    </div>
  );
}
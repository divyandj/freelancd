import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, MessageCircle, ShieldCheck, Zap, Database, FileText, Users, Globe, Briefcase, Building2, HardHat, Droplets, Utensils, HeartPulse, Truck, Cpu, Home as HomeIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 flex items-center justify-center rounded-sm transition-colors duration-300",
            isScrolled ? "bg-navy text-gold" : "bg-white text-navy"
          )}>
            <span className="font-serif font-bold text-xl">NI</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-extrabold leading-none text-xl tracking-tight transition-colors duration-300",
              isScrolled ? "text-navy" : "text-white"
            )}>NAIF</span>
            <span className="font-sans text-[10px] text-gold font-semibold tracking-[0.2em] uppercase leading-none mt-1">International</span>
          </div>
        </div>

        <div className={cn(
          "hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300",
          isScrolled ? "text-navy" : "text-white/90"
        )}>
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Industries", href: "#industries" },
            { name: "Employers", href: "#employers" },
            { name: "Apply", href: "#jobseekers" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative py-1 group"
            >
              <span className="relative z-10 group-hover:text-gold transition-colors duration-300">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#jobseekers" className={cn(
            "px-6 py-2.5 rounded-none transition-all text-xs font-bold uppercase tracking-widest border border-transparent",
            isScrolled 
              ? "bg-navy text-white hover:bg-gold hover:text-navy hover:shadow-lg" 
              : "bg-white text-navy hover:bg-gold hover:text-navy hover:shadow-lg"
          )}>
            Apply Now
          </a>
        </div>

        <button className={cn("md:hidden transition-colors", isScrolled ? "text-navy" : "text-white")} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-gray-100"
        >
          <a href="#home" className="text-lg font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="text-lg font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#industries" className="text-lg font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Industries</a>
          <a href="#employers" className="text-lg font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Employers</a>
          <a href="#jobseekers" className="text-lg font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Apply</a>
          <a href="#contact" className="text-lg font-serif text-navy hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,#C5A059_0%,transparent_70%)] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold font-sans">Global Manpower Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
            Global Recruitment Partner for <span className="italic text-gold">Reliable</span> Overseas Staffing
          </h1>
          <p className="text-lg text-white/70 font-sans max-w-lg mb-10 leading-relaxed">
            Connecting Indian talent with global opportunities. Trusted manpower solutions for Gulf, Europe, and worldwide hiring. Bridging the gap between skill and world-class organizations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#employers" className="bg-gold text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center gap-2 group">
              Hire Talent <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#jobseekers" className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-navy transition-all">
              Apply for Jobs
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-white text-2xl font-serif font-bold">15+</span>
              <span className="text-white/50 text-xs uppercase tracking-tighter">Years Experience</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white text-2xl font-serif font-bold">10k+</span>
              <span className="text-white/50 text-xs uppercase tracking-tighter">Placed Globally</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white text-2xl font-serif font-bold">20+</span>
              <span className="text-white/50 text-xs uppercase tracking-tighter">Countries Served</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
              alt="Professional workforce" 
              className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-semibold">Bulk Staffing Experts</h4>
                    <p className="text-white/60 text-xs">Serving Logistics, Construction, Healthcare & more.</p>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/4 -right-8 bg-navy p-4 rounded-lg shadow-xl border border-gold/30 hidden lg:block">
            <span className="text-white font-bold text-xl block">100%</span>
            <span className="text-gold text-[10px] uppercase font-bold tracking-widest">Compliance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Office meeting" 
              className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" 
            />
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-navy font-serif text-3xl font-bold leading-tight">Trusted for <br/>Decades</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">About the Company</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">
              A Legacy of <span className="italic">Excellence</span> in International Recruitment
            </h2>
            <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
              <p>
                NAIF INTERNATIONAL is a premier Mumbai-based manpower recruitment agency. We specialize in identifying, screening, and deploying top Indian talent to employers across the globe.
              </p>
              <p>
                Our mission is to empower businesses with the right person for every role, ensuring seamless transitions and long-term success for both employers and job seekers. From skilled engineers to specialized industrial workers, we handle it all with absolute professional integrity.
              </p>
              <div className="pt-4 flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" />
                <div>
                   <h4 className="font-serif font-bold text-navy">Our Headquarters</h4>
                   <p className="text-sm">Office No.207, 2nd Floor, New Laxmi Industrial Estate, Mira Road East, Mumbai, India.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const industries = [
  { icon: HardHat, title: "Construction", desc: "Skilled masons, site engineers, and project managers." },
  { icon: Droplets, title: "Oil & Gas", desc: "Specialized rig operators and safety experts." },
  { icon: Utensils, title: "Hospitality", desc: "Waitstaff, chefs, and housekeeping for global chains." },
  { icon: HeartPulse, title: "Healthcare", desc: "Registered nurses, technicians, and doctors." },
  { icon: Truck, title: "Logistics", desc: "Commercial drivers and warehouse management staff." },
  { icon: Cpu, title: "Engineering", desc: "Civil, mechanical, and electrical professionals." },
  { icon: HomeIcon, title: "Domestic Helpers", desc: "Verified and trained household assistance." },
  { icon: Building2, title: "Corporate Staffing", desc: "IT professionals, HR, and administrative talent." },
];

function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Industries We Serve Globally</h2>
          <p className="text-navy/60">We provide specialized recruitment solutions across a wide spectrum of sectors, ensuring niche talent meets specific operational needs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gold/20 group"
            >
              <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-sm text-navy/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    { icon: Zap, title: "Fast Hiring Turnaround", desc: "Efficient sourcing to meet tight deadlines." },
    { icon: Database, title: "Vast Candidate Pool", desc: "Access to thousands of verified professionals." },
    { icon: FileText, title: "Visa & Documentation", desc: "Complete end-to-end processing support." },
    { icon: ShieldCheck, title: "Ethical Recruitment", desc: "Transparent processes with 100% compliance." },
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Why Corporate Giants <span className="italic text-gold italic">Trust</span> Naif International
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-gold"><benefit.icon size={32} /></div>
                  <h4 className="text-xl font-serif font-bold">{benefit.title}</h4>
                  <p className="text-sm text-white/50">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573161586313-2d2f2fe12c9a?q=80&w=2069&auto=format&fit=crop" 
              alt="Professional partnership" 
              className="w-full h-full object-cover grayscale opacity-60" 
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="text-center bg-navy/80 backdrop-blur-md p-10 rounded-2xl border border-white/10">
                  <p className="text-2xl font-serif mb-6 italic text-gold">"Exceptional turnaround time and quality of candidates. Highly recommended."</p>
                  <div className="font-bold text-sm tracking-widest uppercase text-white">— HR Director, Gulf Logistics Group</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Requirement", desc: "We understand your specific talent needs." },
    { title: "Sourcing", desc: "Finding candidates from our vast database." },
    { title: "Screening", desc: "Rigorous technical and soft-skill reviews." },
    { title: "Selection", desc: "Interviewing and final choice by employer." },
    { title: "Processing", desc: "Visa, medical, and document verification." },
    { title: "Deployment", desc: "Travel arrangements and on-site placement." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy">Our 6-Step Recruitment Flow</h2>
        </div>
        <div className="relative">
          <div className="absolute top-[39px] left-0 right-0 h-[2px] bg-gray-100 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-gold rounded-full flex items-center justify-center text-navy font-serif font-bold text-2xl mb-6 shadow-xl">
                  {idx + 1}
                </div>
                <h4 className="font-serif font-bold text-lg text-navy mb-2">{step.title}</h4>
                <p className="text-xs text-navy/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JobSeekerSection() {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section id="jobseekers" className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">For Job Seekers</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Build Your Career Overseas</h2>
          <p className="text-white/60 mb-8 max-w-md">
            Join thousands of professionals already working in Saudi Arabia, UAE, Qatar, and Europe. Register with us for verified high-paying job opportunities.
          </p>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3">
              <Globe className="text-gold" size={20} />
              <span>Jobs in Gulf, UK & Europe</span>
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-gold" size={20} />
              <span>Verified Employer Licenses</span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-gold" size={20} />
              <span>Complete Visa Assistance</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <ShieldCheck className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-serif text-navy mb-2">Registration Complete!</h3>
              <p className="text-navy/60">Our consultants will contact you shortly regarding matching profiles.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-gold font-bold uppercase tracking-widest text-xs"
              >
                Apply Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2 uppercase">Full Name</label>
                <input {...register("name", { required: true })} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md outline-none focus:border-gold transition-all" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2 uppercase">Phone Number</label>
                  <input {...register("phone", { required: true })} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md outline-none focus:border-gold transition-all" placeholder="+91" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2 uppercase">Trade / Skill</label>
                  <input {...register("trade", { required: true })} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md outline-none focus:border-gold transition-all" placeholder="Electrician, HR..." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2 uppercase">Experience (Years)</label>
                <select {...register("experience")} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md outline-none focus:border-gold transition-all">
                  <option>0-2 Years</option>
                  <option>2-5 Years</option>
                  <option>5-10 Years</option>
                  <option>10+ Years</option>
                </select>
              </div>
              <div className="flex items-center gap-4 py-2">
                <input type="checkbox" {...register("passport")} id="passport" className="w-5 h-5 accent-gold" />
                <label htmlFor="passport" className="text-sm font-medium text-navy/70">I have a valid Indian Passport</label>
              </div>
              <button className="w-full bg-gold text-navy py-4 font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-xl shadow-gold/20">
                Register Profile
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Farsi",
      role: "Operations Manager, Qatar Energy",
      content: "NAIF International has been our go-to partner for technical staffing for over 5 years. Their candidates are well-screened and highly professional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sandeep Kumar",
      role: "Civil Engineer, placed in UAE",
      content: "The entire process from interview to visa stamping was smooth. They are very transparent and didn't charge any hidden fees. Best agency in Mumbai.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Jean-Pierre",
      role: "HR Lead, Euro-Constructions",
      content: "Sourcing specialized workers from India was a challenge until we found NAIF. Their understanding of European compliance is exceptional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy italic mb-2">Voice of Success</h2>
          <p className="text-navy/50">Trusted by global leaders and thousands of professionals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-navy text-sm">{t.name}</h4>
                  <p className="text-xs text-gold font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-navy/70 text-sm leading-relaxed italic">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Countries() {
  const regions = [
    "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Bahrain", "United Kingdom", "Germany", "Poland", "Singapore"
  ];
  
  return (
    <section className="py-20 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
               <h3 className="text-3xl font-serif text-navy mb-4">Our Global Footprint</h3>
               <p className="text-navy/50 text-sm">Actively placing talent across the most dynamic economies in the world.</p>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-3">
               {regions.map((region, idx) => (
                 <span key={idx} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-gold transition-colors cursor-default">
                   {region}
                 </span>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Ready to Expand Your <span className="italic">Workforce</span>?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy mb-1">Call Us</h4>
                  <p className="text-navy/60">+91 9892536367 / +91 7304061408</p>
                  <p className="text-navy/60">+91 9819511920</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy mb-1">Email Inquiry</h4>
                  <p className="text-navy/60">info@naifinternational.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy mb-1">Main Office</h4>
                  <p className="text-navy/60">Office No.207, 2nd Floor, New Laxmi Industrial Estate, Mira Road East, Mumbai.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] border border-gray-100">
            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-12 text-center">
               <MapPin className="text-gold mb-4" size={48} />
               <h4 className="font-serif text-xl text-navy mb-2">Our Mumbai Office</h4>
               <p className="text-navy/50 text-sm mb-6">New Laxmi Industrial Estate, Mira Road East</p>
               <a 
                href="https://maps.google.com/?q=New+Laxmi+Industrial+Estate+Mira+Road+East+Mumbai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy text-white px-8 py-3 font-bold uppercase tracking-widest text-xs"
               >
                 View on Google Maps
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
                <span className="text-navy font-serif font-bold text-lg">NI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-white leading-none text-lg">NAIF</span>
                <span className="font-sans text-[8px] text-gold font-semibold tracking-[0.2em] uppercase leading-none mt-1">International</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Leading the way in global manpower solutions. Bridging talent and opportunity across borders since decades.
            </p>
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                  <Globe size={14} />
               </div>
               <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                  <Mail size={14} />
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#industries" className="hover:text-gold transition-colors">Industries</a></li>
              <li><a href="#jobseekers" className="hover:text-gold transition-colors">Apply for Jobs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li>Bulk Manpower Supply</li>
              <li>Skilled Labor Sourcing</li>
              <li>Corporate Hiring</li>
              <li>Visa Processing</li>
              <li>Deployment Logistics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Mumbai Office</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Office No.207, 2nd Floor, New Laxmi Industrial Estate, Mira Road East, Mumbai - 401107.
            </p>
            <p className="text-white/50 text-sm">
              T: +91 9892536367<br/>
              E: info@naifinternational.com
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 Naif International. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative selection:bg-gold selection:text-navy">
      <Navbar />
      <Hero />
      
      <About />
      <Industries />
      
      <section id="employers" className="py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif text-navy mb-8">Need 10 to 1000 workers quickly?</h2>
            <p className="text-navy/70 mb-10 max-w-2xl mx-auto font-medium">We source, screen and deploy manpower efficiently across the globe. Professional recruitment at scale.</p>
            <a href="#contact" className="bg-navy text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:translate-y-[-4px] transition-all inline-block shadow-2xl hover:bg-navy/90 active:scale-95">
              Book Business Consultation
            </a>
        </div>
      </section>

      <Benefits />
      <Process />
      <JobSeekerSection />

      <Testimonials />
      <Countries />
      <Contact />
      <Footer />
      
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <a 
          href="tel:+919892536367" 
          className="bg-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          title="Call Now"
        >
          <Phone size={24} />
        </a>
        <a 
          href="https://wa.me/919892536367" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          title="WhatsApp Now"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}

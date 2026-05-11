import React from "react";
import { motion } from "framer-motion";
import { Camera, Megaphone, Palette, BarChart3, HeartPulse, ArrowRight, Mail, Phone, Linkedin, Instagram, CheckCircle } from "lucide-react";

export default function HealthcareMarketingWebsite() {
  const services = [
    {
      icon: <HeartPulse className="w-7 h-7" />,
      title: "Healthcare Marketing",
      description: "Patient-centered campaigns designed to build trust, improve visibility, and grow healthcare brands."
    },
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: "Brand Strategy",
      description: "Clear positioning, messaging, and brand systems that make your healthcare business memorable."
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Art Direction",
      description: "Creative direction for digital campaigns, visual identities, advertising, and brand storytelling."
    },
    {
      icon: <Camera className="w-7 h-7" />,
      title: "Professional Photography",
      description: "High-quality healthcare, corporate, lifestyle, branding, and campaign photography."
    }
  ];

  const projects = [
    {
      title: "Healthcare Awareness Campaign",
      category: "Marketing Strategy + Creative Direction",
      description: "Developed a multi-channel awareness campaign focused on patient education and community engagement.",
      result: "Improved engagement and strengthened public trust."
    },
    {
      title: "Clinic Brand Refresh",
      category: "Brand Strategy + Visual Identity",
      description: "Created a modern identity system, brand guidelines, and campaign visuals for a healthcare provider.",
      result: "Improved brand consistency across digital and print platforms."
    },
    {
      title: "Executive Healthcare Photography",
      category: "Professional Photography",
      description: "Produced leadership portraits, team photography, and facility images for website and social media use.",
      result: "Elevated the professional image of the healthcare team."
    }
  ];

  const stats = [
    { value: "45%", label: "Patient engagement growth" },
    { value: "120%", label: "Social media reach increase" },
    { value: "360°", label: "Strategy + creative execution" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">Healthcare Brand Studio</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#photography" className="hover:text-white">Photography</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition">
            Work With Me
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-cyan-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-300" /> Healthcare Marketing • Branding • Photography
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
              Building healthcare brands people trust.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              Healthcare Marketing Manager, Brand Strategist, Art Director, and Professional Photographer creating strategic campaigns, strong visual identities, and powerful brand storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 px-7 py-4 rounded-full font-bold hover:bg-cyan-300 transition">
                View Portfolio <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 rounded-full font-bold hover:bg-white/10 transition">
                Start a Project
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] bg-white/10 border border-white/10 p-4 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-cyan-300 via-teal-300 to-slate-100 h-[520px] p-8 flex flex-col justify-between text-slate-950">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="bg-white/70 backdrop-blur px-4 py-2 rounded-full font-semibold">Brand Strategy</div>
                    <Camera className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black leading-tight mb-4">Creative direction for modern healthcare brands.</h2>
                  <p className="text-slate-700 text-lg">Marketing visuals, patient-focused campaigns, corporate photography, and brand systems.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/70 backdrop-blur rounded-2xl p-5">
                    <BarChart3 className="w-7 h-7 mb-4" />
                    <p className="font-bold">Growth-Focused</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur rounded-2xl p-5">
                    <Palette className="w-7 h-7 mb-4" />
                    <p className="font-bold">Design-Led</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl font-black text-cyan-300 mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-cyan-300 font-bold mb-3">SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">Strategy, creativity, and visuals in one place.</h2>
            <p className="text-slate-300 text-lg">Helping healthcare organizations communicate clearly, look professional, and connect with patients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -8 }} className="bg-white/10 border border-white/10 rounded-3xl p-7 hover:bg-white/[0.14] transition">
                <div className="text-cyan-300 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-300 font-bold mb-3">ABOUT</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">A marketing leader with a creative eye.</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I combine healthcare marketing strategy, brand positioning, art direction, and professional photography to create campaigns that feel human, trustworthy, and visually strong.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              From awareness campaigns to brand refreshes and photography production, I help healthcare brands communicate with confidence and consistency.
            </p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            {[
              "Healthcare campaign strategy",
              "Brand identity and positioning",
              "Creative direction for digital and print",
              "Professional healthcare photography",
              "Social media and content marketing",
              "Patient-centered visual storytelling"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-4 border-b border-white/10 last:border-b-0">
                <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-cyan-300 font-bold mb-3">FEATURED PROJECTS</p>
              <h2 className="text-4xl md:text-5xl font-black">Selected portfolio work.</h2>
            </div>
            <p className="text-slate-300 max-w-md">A sample of marketing, branding, creative direction, and photography projects.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} whileHover={{ y: -8 }} className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                <div className="h-56 bg-gradient-to-br from-cyan-300/80 via-teal-300/80 to-white/80 flex items-center justify-center text-slate-950">
                  <div className="text-center px-6">
                    <Camera className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-black text-xl">Project Visual</p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-cyan-300 text-sm font-bold mb-3">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-5">{project.description}</p>
                  <div className="bg-white/10 rounded-2xl p-4 text-sm text-slate-200">
                    <strong>Result:</strong> {project.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="photography" className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-cyan-300 font-bold mb-3">PHOTOGRAPHY</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">Professional visuals for healthcare and brands.</h2>
            <p className="text-slate-300 text-lg">Photography built for websites, campaigns, social media, executive branding, and corporate communication.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Healthcare & Medical", "Corporate Branding", "Lifestyle Campaigns"].map((item, index) => (
              <div key={index} className="rounded-3xl overflow-hidden bg-white/10 border border-white/10">
                <div className="h-72 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-cyan-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-300 to-teal-300 text-slate-950 rounded-[2rem] p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Let’s create a healthcare brand that stands out.</h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Whether you need a marketing campaign, brand refresh, art direction, or professional photography, I can help you turn ideas into a polished brand experience.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition">
            Contact Me <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer id="contact" className="py-16 px-6 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-black mb-4">Healthcare Brand Studio</h2>
            <p className="text-slate-300 max-w-lg mb-6">
              Healthcare Marketing Manager | Brand Strategist | Art Director | Professional Photographer
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-4"><Mail className="w-5 h-5 text-cyan-300" /> your@email.com</div>
              <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-cyan-300" /> +971 00 000 0000</div>
            </div>
            <a href="mailto:your@email.com" className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-white text-slate-950 px-6 py-4 rounded-full font-bold hover:bg-slate-200 transition">
              Send Email <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  Building2, 
  LandPlot, 
  Bed, 
  Bath, 
  Square, 
  ArrowRight, 
  CheckCircle2, 
  Headset, 
  ShieldCheck, 
  Quote, 
  Star, 
  Phone, 
  Mail, 
  Globe, 
  Share2, 
  Send,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">DreamHome Realty</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Buy', 'Rent', 'Sell', 'Projects', 'About'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-primary transition-colors">{item}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4">
          <nav className="flex flex-col gap-4">
            {['Buy', 'Rent', 'Sell', 'Projects', 'About'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-primary transition-colors">{item}</a>
            ))}
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold w-full">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-xBoaD_OvJDP5bQgEKu_FnJqRywZ9FUDsCbnxQJVjKwT4g0G-37ESSO2l0mZGOqFPU9c7HVfbsshNCYtsGl6nCPf7gtR48Fl3laAKLSTCyFENG6nYTALJfsvmRobaikh4an3DPFLzwAC0cjwv6TWbBfah8TUR_dtOeXG4-ETy3N_vHOTrQDb3kmVroqQWUe4h8x_FJ1KkfoBPntk-ltsaGCjkG3VNvg3DOL61dJtMuRbewykGm4_zIyJ7ZRs9uuLNWsZOtddn2s4')` 
        }}
      ></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          Find Your Dream Home
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-lg md:text-xl mb-10 font-normal"
        >
          Discover exclusive luxury properties in the world's most desirable locations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-2 rounded-xl shadow-2xl max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 border-r border-slate-100 last:border-0">
              <MapPin className="w-5 h-5 text-slate-400 mr-2" />
              <input className="w-full border-0 focus:ring-0 text-slate-900 placeholder:text-slate-400 py-4" placeholder="Location" type="text"/>
            </div>
            <div className="flex-1 flex items-center px-4 border-r border-slate-100 last:border-0">
              <Building2 className="w-5 h-5 text-slate-400 mr-2" />
              <select className="w-full border-0 focus:ring-0 text-slate-900 appearance-none bg-transparent py-4">
                <option>Price Range</option>
                <option>$500k - $1M</option>
                <option>$1M - $2M</option>
                <option>$2M+</option>
              </select>
            </div>
            <div className="flex-1 flex items-center px-4 border-r border-slate-100 last:border-0">
              <Home className="w-5 h-5 text-slate-400 mr-2" />
              <select className="w-full border-0 focus:ring-0 text-slate-900 appearance-none bg-transparent py-4">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
            <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: 'Apartments', icon: <Building2 className="w-8 h-8" /> },
    { name: 'Villas', icon: <Home className="w-8 h-8" /> },
    { name: 'Commercial', icon: <Building2 className="w-8 h-8" /> },
    { name: 'Land', icon: <LandPlot className="w-8 h-8" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a key={cat.name} className="group flex flex-col items-center p-6 rounded-2xl bg-background-light hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20" href="#">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <span className="font-bold text-slate-900">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ image, price, location, beds, baths, sqft, tag }: any) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={location} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      {tag && (
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">
          {tag}
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-1">{price}</h3>
      <p className="text-slate-500 text-sm mb-4">{location}</p>
      <div className="flex items-center gap-4 text-slate-600 text-sm">
        <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {beds} beds</span>
        <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {baths} baths</span>
        <span className="flex items-center gap-1"><Square className="w-4 h-4" /> {sqft} sqft</span>
      </div>
    </div>
  </div>
);

const FeaturedProperties = () => {
  const properties = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt_H4QgT-QTOMTNI4gPz145uhLXUjFjd3Ka4BAgY4i-Cp1PLOhd28Idc4ZUrHmI1tQa-C2wLHvLf4EaF0ViBlAn6lAIlb_zA3w0BuridokDxWK-FGpCFYouA4i-ex2QOfVnjHJhBvbGifYW0_UHpXxjIku8SFPprI8ffVyvQx6kMlxHkESFFHfGfvDeejAUwz1g5I_9USO1xvEX9XjWnGo4w9V6RnaqwdZL4_hTfDwdLfVe34jQwlfwuIv4kiIl6jRpBj0aQREeQk',
      price: '$1,250,000',
      location: 'Malibu, California',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      tag: 'FEATURED'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANwvtH7M5Tgz0eEG3JQMoIQX-ohdII4iSrwAA5L9qVS4TlBfSTKhfTo9hPpBiL0x3tjIOmwBBFzT_iqPTJTkLIITRhQtYkj9cyZsHjKVtbUBkLjC95ACYF3eWXdbka98ba8WZ1bmVVz5VnfcLx9AGtHICrLCQDjmKIdU2hzm5wcPdJVpvZ8Q3HvQk2sao-dVLvlYMyAKbGKd8xfexXx9CcsTG2NWQ4iOlUaB5KYeK5vcN-mgIMT-qWRxD9LoQQF1Jqwo4gxWjPxZ8',
      price: '$850,000',
      location: 'Miami, Florida',
      beds: 3,
      baths: 2,
      sqft: '2,100',
      tag: 'NEW'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTLu8SR32TvEVZdSCu7xDHfgzlnF93PXPVcJF3RZ5hHkZewC2--pnrMCvN4z6XK757rbQZHiEffo_eDZvi0AEjjxjEFj6jGw0SaJ5j1pogKi1tBgdqmbVTcz3wPhiYKNsyw-Bh-YI0dIenIpLx37BM-oZSbjAgfDi0k2iAJiq9W7i6c7fikbod_oYY-KjdaYzB5VSDRFFagkrFyi3UkBTo8yraTgXyBhiJgpFHN3XYKn01QFwvZ7Yvs28w390XqXCMQScj99fQlgI',
      price: '$2,100,000',
      location: 'Austin, Texas',
      beds: 5,
      baths: 4,
      sqft: '5,400'
    }
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
            <p className="text-slate-600">Handpicked selections of the best listings today.</p>
          </div>
          <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <PropertyCard key={idx} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: '20+ Years Experience',
      desc: 'Trusted by thousands of families to find their perfect home since 2004.',
      icon: <CheckCircle2 className="w-10 h-10" />
    },
    {
      title: 'Trusted Agents',
      desc: 'Our certified experts guide you through every step of the buying process.',
      icon: <Headset className="w-10 h-10" />
    },
    {
      title: 'Secure Transactions',
      desc: 'Advanced legal support ensures your investments are always safe and verified.',
      icon: <ShieldCheck className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose DreamHome?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide a seamless and secure real estate experience backed by decades of industry expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewDevelopments = () => {
  return (
    <section className="py-20 bg-background-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">New Developments</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcCsj43oWiL7u2SLJ6S-WPQONXWw8VrauZWq1HbsmdiDqL6WLUkTJrgLTg6MkN0J_COqa0hvTDuYHY6tz3sS1tPsP211k2LJKEdZ5QnjqSdXxJEzFQr1EppHd7LEu88bs4NzzD50_bYWaEeFByg_07wOk5R7P2v2Kp3O7FVdbNNyn3cORRDEu37QqZyRWnc3O3fuza1mkWDw7tG6Rt9nhoBaTNeh8u2mlwThDJMDiz8Kfeg7UDRxTugpW-A9Vdep05gZprlfWKku8" 
                alt="The Azure Residences" 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Luxury Living</span>
              <h3 className="text-2xl font-bold mb-4">The Azure Residences</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">Sustainable urban living with panoramic city views and world-class amenities.</p>
              <button className="w-fit border-2 border-primary text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
                View Project
              </button>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUL3Dsdhr_Fdd_3jdbmkPg2rtuSOxbRhN5cyvAtEik6Rbo_OMZHhqrbDx9CmQG6HilXeb0YDZkxKk_QZ20M5-34qAABwzhpJnwi8y29ZIkm-0bTZe8fsKQtX2W-Ap60zrJ2vmSJaqaLtl973DZJ9Gtn8JAKmlvlmMg8G8vrxqtyY3fDGcLgfPHRygU9PM-C-7WdEwJ_42EMDYpoxTQQ1LsyY19sv7qFF_QzMC0lWATb_uQozCMus2O3X2t64bAscB-Kz-tUB_EzJ8" 
                alt="Coastal Heights" 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Investment Opportunity</span>
              <h3 className="text-2xl font-bold mb-4">Coastal Heights</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">Experience beachfront elegance in our newest premium development project.</p>
              <button className="w-fit border-2 border-primary text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "DreamHome made the process of buying our first house incredibly easy. Their agents were patient and truly understood what we were looking for.",
      author: "Sarah Jenkins",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzokETACToLHyVW-4RIhblS0v2yT40Ef6-1z8gfn5lu0KSJcRU6haP2CYIy5GoU7lWRFmDoomu9gJSDvSVsqkDZxGtegiXIA8Oa0K4Kcw8icFZ6yD7zPRjatvafVjyBSqkfBe8Zq1f-hKU3v5Zvo14GigHqBbhKSf_jN5PROvDWZV8xFooK_1vjsC69gCLDQ34h8VeECdb-Eu7hMEIuHFw_CVqJzUlMIPhpW353pswYJmQYmEaTfTHkVUea1G6ZMjYKglU8unTv4w"
    },
    {
      text: "Professionalism and integrity are the two words I'd use. They helped us secure a fantastic commercial space for our new office downtown.",
      author: "Michael Chen",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUU4UWZkQEFW-QjIAVw2f8lLcT8iN1_Q8Nkl656OLuA-zf1G_1cvvKpLQnrRubqN4RjUq39-ZG5cl7LiRzyd8xDuwiZb3gxY21c_5xfXubUukRnl1Q3-IXhaXohBehEwBsLH9LnMGPoSEEw4Df2hBhCEcto-4P0Io965f7yicEpjb_qU7Mk7NrfB1ih_rSR91MwrGpUxQ08jXCgR04XV0cmFj1vK2vCeiNG8tNQwzuGn0CId9CbtXDNQ2OgwsttelNcFeWBtOVsLg"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-background-light p-10 rounded-2xl relative">
              <div className="text-primary mb-4">
                <Quote className="w-10 h-10" />
              </div>
              <p className="text-slate-700 text-lg italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold">{t.author}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Schedule a Viewing</h2>
            <p className="text-white/80 text-lg mb-8">Found a property you love? Or need more information? Fill out the form and our expert agents will get back to you within 24 hours.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@dreamhome.realty</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-slate-700 text-sm font-bold ml-1">Full Name</label>
                  <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-slate-900" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 text-sm font-bold ml-1">Phone Number</label>
                  <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-slate-900" placeholder="+1..." type="tel"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 text-sm font-bold ml-1">Interested In</label>
                <select className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-slate-900">
                  <option>Buy a property</option>
                  <option>Rent a property</option>
                  <option>Investment project</option>
                  <option>Other inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 text-sm font-bold ml-1">Message (Optional)</label>
                <textarea className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-slate-900" placeholder="How can we help you?" rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25" type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background-dark text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-lg font-bold">DreamHome Realty</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">Redefining the real estate experience through innovation, trust, and exceptional service. Your dream home awaits.</p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><Globe className="w-4 h-4" /></a>
              <a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><Share2 className="w-4 h-4" /></a>
              <a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Properties For Sale</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Properties For Rent</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">New Developments</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sell Your Home</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">FAQs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive the latest market updates and listings.</p>
            <div className="flex">
              <input className="w-full rounded-l-lg bg-slate-800 border-0 focus:ring-1 focus:ring-primary text-white text-sm px-4" placeholder="Email" type="email"/>
              <button className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary/90 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 text-center text-xs">
          <p>© 2024 DreamHome Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProperties />
        <WhyChooseUs />
        <NewDevelopments />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

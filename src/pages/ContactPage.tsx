import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

interface SiteConfig {
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  mapLink: string;
  hours: string[];
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [siteInfo, setSiteInfo] = useState<SiteConfig | null>(null);

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => setSiteInfo(data.siteInfo))
      .catch((err) => console.error('Failed to load config:', err));
  }, []);

  const services = [
    'Hardscapes & Retaining Walls',
    'Driveway Hardscaping',
    'Boulders & Stone Hardscaping',
    'Arbor & Trellis Hardscaping',
    'Water Features Landscaping',
    'Artificial Turf Installation',
    'Sod Installation & Lawn Renovation',
    'Flower Bed Installation',
    'Fall & Spring Property Maintenance',
    'Professional Mulch Installation'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (!siteInfo) return <div className="p-10 text-center text-gray-600">Loading...</div>;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/1.png)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)' }}>
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)' }}>
              Get in touch for a free consultation and quote for your property
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-10 sm:py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-brand-primary text-white p-6 sm:p-8 rounded-2xl shadow-xl lg:sticky lg:top-40">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                      <a href={`tel:${siteInfo.phone}`} className="hover:text-brand-accent transition-colors">
                        {siteInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${siteInfo.email}`}
                        className="hover:text-brand-accent transition-colors break-all"
                      >
                        {siteInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p>{siteInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      {siteInfo.hours?.map((line, i) => (
                        <p key={i} className="text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Request a Free Quote</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                    <p className="font-semibold text-sm sm:text-base">Thank you for contacting us!</p>
                    <p className="text-xs sm:text-sm mt-1">We'll be in touch soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm sm:text-base ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={18} className="sm:w-5 sm:h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

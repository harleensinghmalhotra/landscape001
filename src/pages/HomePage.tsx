import { ArrowRight, Square, Home, Mountain, Fence, Droplets, Sparkles, CheckCircle, Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
     {
    icon: Square,
    title: 'Hardscapes & Retaining Walls',
    description: 'Durable hardscapes and retaining walls designed to elevate your outdoor living.'
  },
  {
    icon: Home,
    title: 'Driveway Hardscaping',
    description: 'Create stunning, durable driveways that elevate curb appeal and functionality.'
  },
  {
    icon: Mountain,
    title: 'Boulders & Stone Hardscaping',
    description: 'Add natural beauty and strength to your landscape with custom boulder and stone features.'
  },
  {
    icon: Fence,
    title: 'Arbor & Trellis Hardscaping',
    description: 'Add charm and structure to your garden with beautifully crafted arbors and trellises.'
  },
  {
    icon: Droplets,
    title: 'Water Features Landscaping',
    description: 'Enhance your outdoor space with elegant water features that bring peace and movement to your landscape.'
  },
  {
    icon: Sparkles,
    title: 'Artificial Turf Installation',
    description: 'Premium artificial turf installation crafted to fit your property perfectly.'
  }
  ];

  // First four before/after transformations from Gallery page
  const transformations = [
    {
      before: '/After 1.png',
      after: '/Before 1.jpg',
      title: 'Backyard Retreat Transformation',
      description: 'Rear lawn converted into entertainment space with custom pergola, jacuzzi tub, stone fire pit, and grilling pad'
    },
    {
      before: '/After 2.jpg',
      after: '/Before 2.png',
      title: 'Front Yard Renovation',
      description: 'Front yard transformed into instant curb appeal with custom retaining wall, sod installation, decorative paver walkway with landscape lighting'
    },
    {
      before: '/After 3.jpg',
      after: '/Before 3.jpg',
      title: 'Driveway Paver Installation',
      description: 'Collapsed asphalt replaced with newly reinforced paver base and herringbone brick pavers for functional parking and enhanced curb appeal.'
    },
    {
      before: '/After 4.jpg',
      after: '/Before 4.jpg',
      title: 'Lakefront Mulch Installation',
      description: 'Eroded lakefront slope restored with leveled bed of cedar mulch; expanding walkway to enjoy Lake Michigan views.'
    }
  ];

  const testimonials = [
    {
      text: 'Responded quickly and completed the job right away. Gave great advice on work needed to be done and was a pleasure to work with. Highly recommend!',
      author: 'Ryan B.',
      position: 'Landscape Maintenance Client',
      company: ''
    },
    {
      text: 'I can\'t say enough good things about working with Marcus. … He was fun to work with and I would recommend his services, especially when you need help on the creative side.',
      author: 'Alana D.',
      position: 'Garden Design Client',
      company: ''
    },
    {
      text: 'I\'ve never worked with someone who is as professional and responsive as Marcus … you have found the perfect person for whatever task it may be!',
      author: 'Abenazer M.',
      position: 'Residential Landscaping Client',
      company: ''
    },
    {
      text: 'Highly responsive and great followup and communicating. I needed significant overgrowth removed to start fresh next spring.',
      author: 'Sabrina K.',
      position: 'Property Cleanup Client',
      company: ''
    },
    {
      text: 'Marcus was great! Immediately responsive. … I really appreciated his reliability, professionalism, and passion for his work.',
      author: 'Nicole R.',
      position: 'Backyard Renovation Client',
      company: ''
    },
    {
      text: 'It was such a pleasure working with Marcus. I hired MD landscaping to renovate my backyard. The outcome is better than I imagined.',
      author: 'Brittany B.',
      position: 'Backyard Renovation Client',
      company: ''
    },
    {
      text: 'MD Landscaping did an amazing job with our front lawn. Marcus was very knowledgeable … this is the best it\'s ever looked.',
      author: 'Derrick R.',
      position: 'Front Lawn Transformation Client',
      company: ''
    },
    {
      text: 'After seeing Marcus do such quality work on my neighbor\'s house I asked if he could help with some projects at mine. … extremely thorough and professional.',
      author: 'Julie C.',
      position: 'Residential Landscaping Client',
      company: ''
    },
    {
      text: 'We asked Marcus to complete some odds and ends around the house. He quickly responded and scheduled the appt quickly. It was great.',
      author: 'Kari B.',
      position: 'Property Maintenance Client',
      company: ''
    },
    {
      text: 'Amazing quality and service.',
      author: 'Melissa S.',
      position: 'Landscaping Client',
      company: ''
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner2.jpg')"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)' }}>
              Professional Landscape Transformation for Chicagoland Properties
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)' }}>
              Trusted by homeowners, businesses, and property managers across the Greater Chicago Area
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-bold text-base sm:text-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-base sm:text-lg shadow-2xl hover:scale-105 border-2 border-white"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center max-w-4xl mx-auto">
            <div className="py-2 sm:py-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">10+</div>
              <div className="text-xs sm:text-sm md:text-base leading-tight">Years<br className="sm:hidden" /> Experience</div>
            </div>
            <div className="py-2 sm:py-3 border-l border-r border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">100+</div>
              <div className="text-xs sm:text-sm md:text-base leading-tight">Residential & Commercial<br className="sm:hidden" /> Projects</div>
            </div>
            <div className="py-2 sm:py-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">$2M</div>
              <div className="text-xs sm:text-sm md:text-base leading-tight">Fully<br className="sm:hidden" /> Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional landscaping solutions tailored to Chicago's unique
climate and your property's specific needs — serving both residential and
commercial clients throughout the Greater Chicago Area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="text-brand-primary" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-brand-primary font-semibold hover:gap-3 flex items-center gap-2 transition-all text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Why Choose M. Dailey Landscaping & Design?
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            'Fully insured for your protection',
            'Expertise in landscape design, installation, and maintenance',
            'Personalized service with direct owner communication',
            'Quality craftsmanship and attention to detail on every project',
            "Deep understanding of Chicago's climate and soil conditions",
            'Flexible scheduling to meet residential and commercial needs'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
              <p className="text-base sm:text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => onNavigate('about')}
          className="mt-6 sm:mt-8 bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg"
        >
          Learn About Us
        </button>
      </div>
      <div className="order-first lg:order-last">
        <img
          src="/whychooseus-new.jpg"
          alt="Professional landscaping"
          className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* Recent Transformations */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Recent Transformations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              See the dramatic difference professional landscaping makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {transformations.map((transformation, index) => (
              <BeforeAfterSlider
                key={index}
                before={transformation.before}
                after={transformation.after}
                title={transformation.title}
                description={transformation.description}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Trusted by homeowners across the Greater Chicago Area
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-8 sm:px-12">
            <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-8 italic text-center leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-brand-primary font-semibold text-sm sm:text-base">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-all"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-all"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-brand-primary w-6 sm:w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Serving the Greater Chicago Metro Area
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-accent">
              Professional landscaping services for residential and commercial properties throughout Chicagoland.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {['Chicago', 'Evanston', 'Glen Ellyn', 'Oak Park', 'Glenview', 'Northbrook', 'Oakbrook', 'Arlington Heights', 'Des Plaines', 'Orland Park'].map((city, index) => (
              <div key={index} className="text-center p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm sm:text-base md:text-lg font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote from Chicago's trusted landscaping professionals.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-xl"
            >
              Get Free Quote
            </button>
            <a
              href="tel:7735621366"
              className="bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              (773) 562-1366
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

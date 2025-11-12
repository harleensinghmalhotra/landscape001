import { Leaf, Mountain, Droplets, Fence, Flower2, Shovel, CheckCircle, ArrowRight, Square, Home, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
   const services = [
    // ---------- 🧱 HARDSCAPING ----------
    {
      icon: Square,
      title: 'Hardscapes & Retaining Walls',
      image: '/1 Hardscapes and Retaining Wall copy copy.png',
      description: 'Durable hardscapes and retaining walls designed to elevate your outdoor living.',
      benefits: [
        'Custom patios, walkways, and walls',
        'Stone, paver, and brick options',
        'Erosion control and grade support'
      ],
      process: ['Site evaluation and measurements', 'Design + materials selection', 'Professional installation']
    },
    {
      icon: Home,
      title: 'Driveway Hardscaping',
      image: '/2 Driveway Hardscapes copy.jpg',
      description: 'Create stunning, durable driveways that elevate curb appeal and functionality.',
      benefits: ['Concrete, paver, or stone finishes', 'Proper grading and compaction', 'Edge detailing and repairs'],
      process: ['Layout planning and estimate', 'Base prep and leveling', 'Install and finishing']
    },
    {
      icon: Mountain,
      title: 'Boulders & Stone Hardscaping',
      image: '/3 Boulders and Stone Hardscaping copy.JPG',
      description: 'Add natural beauty and strength to your landscape with custom boulder and stone features.',
      benefits: ['Decorative boulder placement', 'Natural stone accents and seating', 'Low-maintenance, long-lasting'],
      process: ['Design consultation', 'Selection and placement', 'Final adjustments']
    },
    {
      icon: Fence,
      title: 'Arbor & Trellis Hardscaping',
      image: '/4 Arbor and Trellis Hardscaping copy.jpg',
      description: 'Add charm and structure to your garden with beautifully crafted arbors and trellises.',
      benefits: ['Custom designs and materials', 'Climbing plant support', 'Weather-resistant finishes'],
      process: ['Concept + measurements', 'Fabrication and install', 'Quality check']
    },
    {
      icon: Droplets,
      title: 'Water Features Landscaping',
      image: '/5 Water Feature Landscaping.png',
      description: 'Enhance your outdoor space with elegant water features that bring peace and movement to your landscape.',
      benefits: ['Ponds, waterfalls, fountains', 'Efficient pumps and filtration', 'Lighting integration'],
      process: ['Feature selection + design', 'Excavation and install', 'Testing and detailing']
    },

    // ---------- 🌿 SOFTSCAPING ----------
    {
      icon: Sparkles,
      title: 'Artificial Turf Installation',
      image: '/6 Artificial Turf copy.png',
      description: 'Premium artificial turf installation crafted to fit your property perfectly.',
      benefits: ['Low-maintenance, water-saving', 'Kid- and pet-friendly options', 'Clean, year-round look'],
      process: ['Site prep and base work', 'Cut, seam, and secure', 'Infill and grooming']
    },
    {
      icon: Leaf,
      title: 'Sod Installation & Lawn Renovation',
      image: '/7 Sod and Mulch Installation copy.png',
      description: 'Transform bare or damaged areas with professional sod installation for an instant, lush green lawn.',
      benefits: [
        'Complete soil preparation and grading',
        'Premium sod selection for Chicago climate',
        'Proper installation and seam detailing',
        'Initial watering and care instructions'
      ],
      process: ['Site assessment and soil testing', 'Ground prep, grading, and amendments', 'Sod installation and finishing']
    },
    {
      icon: Flower2,
      title: 'Flower Bed Installation',
      image: '/8 Flower Bed Installation copy.jpg',
      description: 'Beautiful flower bed installations with fresh mulch for lasting appeal.',
      benefits: ['Custom design and plant selection', 'Mulching and edging', 'Ongoing maintenance available'],
      process: ['Design consultation', 'Soil prep and planting', 'Finishing and cleanup']
    },

    // ---------- ⚙️ SYSTEMS & MAINTENANCE ----------
    {
      icon: Shovel,
      title: 'Fall & Spring Property Maintenance',
      image: '/9 Fall and Spring Cleanup copy.jpg',
      description: 'Comprehensive seasonal cleanup and preparation to keep your property healthy and beautiful year-round.',
      benefits: [
        'Leaf removal and disposal',
        'Perennial cutback and pruning',
        'Bed cleanup and edging',
        'Gutter and drain clearing',
        'Spring bed preparation and mulching'
      ],
      process: ['Property walkthrough and assessment', 'Complete seasonal cleanup', 'Final inspection and haul-away']
    },
    {
      icon: Shovel,
      title: 'Professional Mulch Installation',
      image: '/10 Mulch Installation_ copy.jpg',
      description:
        'Fresh mulch installation that enhances curb appeal, retains moisture, and suppresses weeds throughout your landscape beds.',
      benefits: [
        'Premium hardwood mulch delivery',
        'Bed edging and weed removal',
        'Professional spreading at proper depth',
        'Clean borders and uniform coverage'
      ],
      process: ['Bed preparation and cleanup', 'Mulch delivery and spreading', 'Final edging and inspection']
    }
  ];

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
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)' }}>
              Comprehensive landscaping solutions tailored to Chicago's unique environment
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`mb-12 sm:mb-16 md:mb-20 last:mb-0 ${index !== 0 ? 'pt-10 sm:pt-12 md:pt-16 border-t border-gray-200' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-brand-primary" size={24} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{service.title}</h2>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6">{service.description}</p>

                    {/* Benefits */}
                    <div className="mb-5 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">What's Included</h3>
                      <div className="space-y-2 sm:space-y-2.5">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={18} />
                            <p className="text-sm sm:text-base text-gray-600">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Our Process</h3>
                      <div className="space-y-2 sm:space-y-2.5">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                              {idx + 1}
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose M. Dailey Landscaping & Design?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver the expertise, reliability, and results that Chicago property owners demand — whether residential or commercial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Professional Excellence
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Fully insured for your complete protection and peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Personalized Service
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Direct communication with decision-makers and customized solutions for every project.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Quality Craftsmanship
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Attention to detail and precision execution on every installation and maintenance service.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Local Expertise
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Deep understanding of Chicago's climate, soil conditions, and seasonal landscaping needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-brand-accent mb-6 sm:mb-8">
              Contact us today for a free consultation and custom quote for your project.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-primary px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-xl inline-flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

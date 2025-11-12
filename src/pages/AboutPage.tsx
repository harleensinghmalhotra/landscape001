import { Users, Award, Target, Heart, Shield, Zap, TrendingUp, CheckCircle, ShieldCheck, Briefcase, BadgeCheck, Receipt } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Marcus',
      position: 'President & Founder',
      image: '/marcus.png',
      bio: 'Over 25 years of commercial landscaping experience in Illinois'
    },
    {
      name: 'Jennifer Chen',
      position: 'VP of Operations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified landscape architect with expertise in Illinois environments'
    },
    {
      name: 'David Martinez',
      position: 'Director of Maintenance',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'ISA Certified Arborist and horticulture specialist'
    },
    {
      name: 'Sarah Thompson',
      position: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to ensuring client satisfaction and project success'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We show up on time, every time. Our clients depend on us, and we take that responsibility seriously.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in every project, from routine maintenance to complete renovations.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent pricing, and doing what we say we\'ll do - that\'s our promise.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new technologies and sustainable practices to deliver better results for our clients.'
    }
  ];

  const certifications = [
    { name: 'Licensed Landscape Contractor', badge: 'ROC #123456' },
    { name: 'ISA Certified Arborists', badge: 'On Staff' },
    { name: 'NALP Member', badge: 'Since 2000' },
    { name: 'BBB A+ Rating', badge: 'Accredited' },
    { name: 'Illinois Nursery Association', badge: 'Member' },
    { name: 'EPA WaterSense Partner', badge: 'Certified' }
  ];

  const whyChoose = [
  'Direct owner communication and project oversight',
  'Fully insured with $2M coverage',
  "Expertise in Chicago's unique climate and soil conditions",
  'Flexible scheduling for residential and commercial clients',
  'Quality materials and professional-grade equipment',
  '12-month workmanship warranty on all installations'
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
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)' }}>
              Chicago's trusted landscaping partner, delivering professional design, installation, and maintenance services for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
<section className="py-12 sm:py-16 md:py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          About Us
        </h2>
        <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg">
          <p>
            I'm a skilled craftsman with over a decade of experience in landscaping, hardscaping, and outdoor design — bringing expertise, precision, and creativity to every project I take on.
          </p>
          <p>
            My philosophy is simple: I treat every property as if it were my own. Whether it's installing custom pavers, renovating landscape beds, or maintaining commercial properties, I take pride in creating results that stand the test of time.
          </p>
          <p>
            What truly sets me apart is my versatility and attention to detail. Instead of hiring multiple contractors, you get one dedicated professional who can manage everything — from seasonal maintenance to complete landscape transformations.
          </p>
          <p>
            I use high-quality materials, honor my commitments, and never consider a job complete until my clients are fully satisfied. My goal isn't just to finish your project — it's to exceed expectations and earn lasting trust.
          </p>
        </div>
      </div>
      <div className="order-first lg:order-last">
        <img
          src="/3.png"
          alt="MD Landscape & Design Logo"
          className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="text-brand-primary" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  To deliver exceptional landscaping services that enhance property value, create beautiful outdoor spaces, and exceed client expectations through professionalism, expertise, and unwavering commitment to quality.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <TrendingUp className="text-brand-primary" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  To be Chicago's most trusted landscaping partner, known for quality craftsmanship, reliable service, and the lasting relationships we build with every client.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality */}
<section className="py-12 sm:py-16 md:py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
        Our Commitment to Quality
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600">
        Dedicated to delivering exceptional craftsmanship, reliability, and lasting results on every project.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {/* Box 1 */}
      <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
          <ShieldCheck className="text-brand-primary" size={24} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Fully Insured</h3>
        <p className="text-brand-primary font-semibold text-sm">$2M Liability Coverage</p>
      </div>

      {/* Box 2 */}
      <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
          <Briefcase className="text-brand-primary" size={24} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Workers' Compensation</h3>
        <p className="text-brand-primary font-semibold text-sm">Comprehensive employee coverage</p>
      </div>

      {/* Box 3 */}
      <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
          <BadgeCheck className="text-brand-primary" size={24} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">12-Month Warranty</h3>
        <p className="text-brand-primary font-semibold text-sm">On all workmanship</p>
      </div>

      {/* Box 4 */}
      <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
          <Receipt className="text-brand-primary" size={24} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Transparent Pricing</h3>
        <p className="text-brand-primary font-semibold text-sm">No hidden fees or surprises</p>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose M. Dailey Landscaping & Design?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-accent">
              Professional expertise, personalized service, and quality results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                <p className="text-base sm:text-lg">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-primary px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-xl"
            >
              Work With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
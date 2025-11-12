import { useState } from 'react';
import { Send, CheckCircle, Briefcase, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  position: string;
  yearsExperience: string;
  driversLicense: string;
  weekendAvailability: string;
  workAuthorized: string;
  reliableTransportation: string;
  skills: string[];
  experienceDescription: string;
  resumeFile: File | null;
  availableStartDate: string;
  referralSource: string;
}

export default function CareersPage({ onNavigate }: CareersPageProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    yearsExperience: '',
    driversLicense: '',
    weekendAvailability: '',
    workAuthorized: '',
    reliableTransportation: '',
    skills: [],
    experienceDescription: '',
    resumeFile: null,
    availableStartDate: '',
    referralSource: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = [
    'Landscape Laborer',
    'Hardscape Installer',
    'Maintenance Crew Member',
    'Equipment Operator',
    'Other'
  ];

  const experienceLevels = [
    'No experience',
    'Less than 1 year',
    '1–2 years',
    '3–5 years',
    '5+ years'
  ];

  const skillsList = [
    'Paver installation',
    'Landscape maintenance',
    'Equipment operation',
    'Irrigation systems',
    'Tree/shrub care',
    'Commercial property experience',
    'CDL license',
    'Other'
  ];

  const referralSources = [
    'Indeed / Job Board',
    'Google Search',
    'Facebook / Social Media',
    'Friend / Referral',
    'Saw your crew working',
    'Other'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.position) {
      newErrors.position = 'Please select a position';
    }

    if (!formData.yearsExperience) {
      newErrors.yearsExperience = 'Please select your experience level';
    }

    if (!formData.driversLicense) {
      newErrors.driversLicense = 'Please select if you have a valid driver\'s license';
    }

    if (!formData.weekendAvailability) {
      newErrors.weekendAvailability = 'Please indicate your weekend availability';
    }

    if (!formData.workAuthorized) {
      newErrors.workAuthorized = 'Please confirm work authorization status';
    }

    if (!formData.reliableTransportation) {
      newErrors.reliableTransportation = 'Please indicate if you have reliable transportation';
    }

    if (formData.skills.length === 0) {
      newErrors.skills = 'Please select at least one skill or certification';
    }

    if (!formData.experienceDescription.trim()) {
      newErrors.experienceDescription = 'Please describe your experience';
    }

    if (!formData.resumeFile) {
      newErrors.resumeFile = 'Resume upload is required';
    }

    if (!formData.availableStartDate.trim()) {
      newErrors.availableStartDate = 'Please indicate when you can start';
    }

    if (!formData.referralSource) {
      newErrors.referralSource = 'Please select how you heard about us';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const applicationData = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        position: formData.position,
        years_experience: formData.yearsExperience,
        drivers_license: formData.driversLicense === 'yes',
        weekend_availability: formData.weekendAvailability === 'yes',
        work_authorized: formData.workAuthorized === 'yes',
        reliable_transportation: formData.reliableTransportation === 'yes',
        skills: formData.skills,
        experience_description: formData.experienceDescription,
        resume_url: null,
        available_start_date: formData.availableStartDate,
        referral_source: formData.referralSource
      };

      const { error: dbError } = await supabase
        .from('job_applications')
        .insert([applicationData]);

      if (dbError) {
        console.error('Database error:', dbError);
        alert('There was an error submitting your application. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const emailPayload = {
        ...applicationData,
        resume_file_name: formData.resumeFile?.name || 'No resume uploaded'
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-application-email`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify(emailPayload)
          }
        );

        if (!response.ok) {
          console.error('Email notification failed');
        }
      } catch (emailError) {
        console.error('Email error:', emailError);
      }

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        position: '',
        yearsExperience: '',
        driversLicense: '',
        weekendAvailability: '',
        workAuthorized: '',
        reliableTransportation: '',
        skills: [],
        experienceDescription: '',
        resumeFile: null,
        availableStartDate: '',
        referralSource: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024;

      if (!validTypes.includes(file.type)) {
        alert('Please upload a PDF or DOC/DOCX file');
        e.target.value = '';
        return;
      }

      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setFormData(prev => ({ ...prev, resumeFile: file }));
    }
  };

  return (
    <div className="bg-white">
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
              Join Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)' }}>
              We're Growing! Join Chicago's Premier Landscaping Team. We're looking for skilled, hardworking individuals who take pride in their work and want to be part of a professional team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-8 sm:mb-10">
                <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-brand-primary" size={28} />
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="text-brand-primary" size={28} />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">We're Hiring!</h2>
                <p className="text-base sm:text-lg text-gray-700">
                  We're looking for skilled, hardworking individuals who take pride in their work and want to be part of a professional team.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 sm:mb-8 bg-green-50 border-2 border-green-200 text-green-900 px-4 sm:px-6 py-4 sm:py-6 rounded-lg">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-base sm:text-lg mb-2">Application Submitted Successfully!</p>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Thank you for your interest in joining M. Dailey Landscaping & Design! We've received your application and will review it carefully. If your qualifications match our current needs, we'll contact you within 5-7 business days to schedule an interview. In the meantime, feel free to reach out at (773) 562-1366 if you have any questions.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm sm:text-base ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="position" className="block text-gray-700 font-semibold mb-2">
                      Position Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.position ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a position...</option>
                      {positions.map((pos, index) => (
                        <option key={index} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                    {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                  </div>

                  <div>
                    <label htmlFor="yearsExperience" className="block text-gray-700 font-semibold mb-2">
                      Years of Landscaping Experience *
                    </label>
                    <select
                      id="yearsExperience"
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                        errors.yearsExperience ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select experience level...</option>
                      {experienceLevels.map((level, index) => (
                        <option key={index} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.yearsExperience && <p className="text-red-500 text-sm mt-1">{errors.yearsExperience}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Valid Driver's License? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="driversLicense"
                        value="yes"
                        checked={formData.driversLicense === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="driversLicense"
                        value="no"
                        checked={formData.driversLicense === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                  {errors.driversLicense && <p className="text-red-500 text-sm mt-1">{errors.driversLicense}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Available for weekend work during peak season (April–Nov)? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="weekendAvailability"
                        value="yes"
                        checked={formData.weekendAvailability === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="weekendAvailability"
                        value="no"
                        checked={formData.weekendAvailability === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                  {errors.weekendAvailability && <p className="text-red-500 text-sm mt-1">{errors.weekendAvailability}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Authorized to work in the United States? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workAuthorized"
                        value="yes"
                        checked={formData.workAuthorized === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workAuthorized"
                        value="no"
                        checked={formData.workAuthorized === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                  {errors.workAuthorized && <p className="text-red-500 text-sm mt-1">{errors.workAuthorized}</p>}
                </div>


                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Reliable Transportation? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="reliableTransportation"
                        value="yes"
                        checked={formData.reliableTransportation === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="reliableTransportation"
                        value="no"
                        checked={formData.reliableTransportation === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                  {errors.reliableTransportation && <p className="text-red-500 text-sm mt-1">{errors.reliableTransportation}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    Relevant Skills/Certifications *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                    {skillsList.map((skill, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => handleSkillToggle(skill)}
                          className="w-4 h-4 text-brand-primary focus:ring-brand-primary rounded"
                        />
                        <span className="text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                  {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
                </div>

                <div>
                  <label htmlFor="experienceDescription" className="block text-gray-700 font-semibold mb-2">
                    Tell us about your experience *
                  </label>
                  <textarea
                    id="experienceDescription"
                    name="experienceDescription"
                    value={formData.experienceDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                    placeholder="Describe your relevant experience, skills, and what makes you a great fit for our team..."
                  />
                  {errors.experienceDescription && <p className="text-red-500 text-sm mt-1">{errors.experienceDescription}</p>}
                </div>

                <div>
                  <label htmlFor="resumeFile" className="block text-gray-700 font-semibold mb-2">
                    Resume Upload *
                  </label>
                  <input
                    type="file"
                    id="resumeFile"
                    name="resumeFile"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                  <p className="text-sm text-gray-500 mt-1">PDF or DOC/DOCX, max 5MB</p>
                  {formData.resumeFile && (
                    <p className="text-sm text-brand-primary mt-2">
                      Selected: {formData.resumeFile.name}
                    </p>
                  )}
                  {errors.resumeFile && <p className="text-red-500 text-sm mt-1">{errors.resumeFile}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="availableStartDate" className="block text-gray-700 font-semibold mb-2">
                      When are you available to start? *
                    </label>
                    <input
                      type="text"
                      id="availableStartDate"
                      name="availableStartDate"
                      value={formData.availableStartDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Immediately, 2 weeks, etc."
                    />
                    {errors.availableStartDate && <p className="text-red-500 text-sm mt-1">{errors.availableStartDate}</p>}
                  </div>

                  <div>
                    <label htmlFor="referralSource" className="block text-gray-700 font-semibold mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="">Select one...</option>
                      {referralSources.map((source, index) => (
                        <option key={index} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                    {errors.referralSource && <p className="text-red-500 text-sm mt-1">{errors.referralSource}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

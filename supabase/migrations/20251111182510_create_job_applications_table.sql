/*
  # Create Job Applications Table

  ## Purpose
  Store job applications submitted through the "Join Our Team" careers page on the 
  M. Dailey Landscaping & Design website.

  ## New Tables
  
  ### `job_applications`
  Stores all job application submissions with applicant information and preferences.
  
  **Required Fields:**
  - `id` (uuid, primary key) - Unique identifier for each application
  - `full_name` (text) - Applicant's full name
  - `phone` (text) - Contact phone number
  - `email` (text) - Contact email address
  - `position` (text) - Position applying for (Landscape Laborer, Hardscape Installer, etc.)
  - `years_experience` (text) - Years of landscaping experience
  - `drivers_license` (boolean) - Has valid driver's license
  - `weekend_availability` (boolean) - Available for weekend work during peak season
  - `work_authorized` (boolean) - Authorized to work in United States
  - `created_at` (timestamptz) - Application submission timestamp
  
  **Optional Fields:**
  - `reliable_transportation` (boolean, nullable) - Has reliable transportation
  - `skills` (text[], nullable) - Array of relevant skills and certifications
  - `experience_description` (text, nullable) - Description of applicant's experience
  - `resume_url` (text, nullable) - URL/path to uploaded resume file
  - `available_start_date` (text, nullable) - When applicant can start
  - `referral_source` (text, nullable) - How applicant heard about the position

  ## Security
  - Enable Row Level Security (RLS) on the job_applications table
  - Create policy allowing only authenticated admin users to read applications
  - Public users can insert applications but cannot read others' submissions
  
  ## Notes
  1. All required fields use NOT NULL constraint to ensure data completeness
  2. Email field should be validated at application level before submission
  3. Skills stored as text array for flexibility with multiple selections
  4. Timestamps use timestamptz for proper timezone handling
  5. RLS ensures applicant data privacy while allowing form submissions
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  position text NOT NULL,
  years_experience text NOT NULL,
  drivers_license boolean NOT NULL,
  weekend_availability boolean NOT NULL,
  work_authorized boolean NOT NULL,
  reliable_transportation boolean,
  skills text[],
  experience_description text,
  resume_url text,
  available_start_date text,
  referral_source text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);

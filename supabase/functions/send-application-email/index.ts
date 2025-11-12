import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ApplicationData {
  full_name: string;
  phone: string;
  email: string;
  position: string;
  years_experience: string;
  drivers_license: boolean;
  weekend_availability: boolean;
  work_authorized: boolean;
  reliable_transportation: boolean | null;
  skills: string[] | null;
  experience_description: string | null;
  resume_url: string | null;
  available_start_date: string | null;
  referral_source: string | null;
  resume_file_name?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const applicationData: ApplicationData = await req.json();

    const emailBody = `
New Job Application Received
========================================

APPLICANT INFORMATION
--------------------
Name: ${applicationData.full_name}
Email: ${applicationData.email}
Phone: ${applicationData.phone}

POSITION DETAILS
--------------------
Position Applying For: ${applicationData.position}
Years of Experience: ${applicationData.years_experience}

QUALIFICATIONS
--------------------
Valid Driver's License: ${applicationData.drivers_license ? 'Yes' : 'No'}
Weekend Availability: ${applicationData.weekend_availability ? 'Yes' : 'No'}
Work Authorization: ${applicationData.work_authorized ? 'Yes' : 'No'}
Reliable Transportation: ${applicationData.reliable_transportation !== null ? (applicationData.reliable_transportation ? 'Yes' : 'No') : 'Not specified'}

SKILLS & EXPERIENCE
--------------------
${applicationData.skills && applicationData.skills.length > 0 ? 'Skills/Certifications:\n' + applicationData.skills.map(s => '- ' + s).join('\n') : 'No skills specified'}

${applicationData.experience_description ? 'Experience Description:\n' + applicationData.experience_description : 'No experience description provided'}

ADDITIONAL INFORMATION
--------------------
Available Start Date: ${applicationData.available_start_date || 'Not specified'}
How They Heard About Us: ${applicationData.referral_source || 'Not specified'}
Resume: ${applicationData.resume_file_name || 'No resume uploaded'}

========================================
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
    `.trim();

    console.log('Application received from:', applicationData.full_name);
    console.log('Email would be sent to: marcus@mdaileylandscaping.com');
    console.log('Email body:', emailBody);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Application processed successfully'
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to process application'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex justify-center items-center">
          <img src="path_to_header_svg.svg" alt="Decorative Icon" className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">About the Resume Analysis Agent</h1>
        </div>
        <h2 className="text-2xl text-gray-600">Your Personal Resume Improvement Companion</h2>
        <p className="mt-4 text-lg text-gray-700">
          Our Resume Analysis Agent leverages cutting-edge AI and NLP technologies to provide personalized resume feedback, helping you stand out in the competitive job market.
        </p>
      </header>

      {/* Current Features */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Current Features</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Upload */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <img src="path_to_upload_svg.svg" alt="Upload Icon" className="w-6 h-6 mr-2" />
              Resume Upload
            </h4>
            <p className="text-gray-700 mb-4">Users can upload PDF resumes for analysis.</p>
            <img src="path_to_upload_image.svg" alt="Resume Upload" className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* Resume Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <img src="path_to_analysis_svg.svg" alt="Analysis Icon" className="w-6 h-6 mr-2" />
              Resume Analysis
            </h4>
            <p className="text-gray-700 mb-4">The agent performs detailed analysis, identifying key areas for improvement.</p>
            <img src="path_to_analysis_image.svg" alt="Resume Analysis" className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* Resume Suggestions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <img src="path_to_suggestions_svg.svg" alt="Suggestions Icon" className="w-6 h-6 mr-2" />
              Resume Suggestions
            </h4>
            <p className="text-gray-700 mb-4">Automatic suggestions for improving resume content and formatting.</p>
            <img src="path_to_suggestions_image.svg" alt="Resume Suggestions" className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* Job Recommendations */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <img src="path_to_recommendations_svg.svg" alt="Recommendations Icon" className="w-6 h-6 mr-2" />
              Job Recommendations
            </h4>
            <p className="text-gray-700 mb-4">Offers job recommendations based on resume content and user preferences.</p>
            <img src="path_to_recommendations_image.svg" alt="Job Recommendations" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Features</h3>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          {/* Enhanced NLP Capabilities */}
          <li>
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              <img src="path_to_nlp_svg.svg" alt="NLP Icon" className="w-6 h-6 mr-2" />
              Enhanced NLP Capabilities
            </h4>
            <p>Improved natural language processing for more accurate and insightful feedback.</p>
            <p className="text-gray-500">Expected Release: [Month/Year]</p>
          </li>
          {/* Advanced ATS Analysis */}
          <li>
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              <img src="path_to_ats_svg.svg" alt="ATS Icon" className="w-6 h-6 mr-2" />
              Advanced ATS Analysis
            </h4>
            <p>More in-depth analysis of ATS compatibility, including industry-specific recommendations.</p>
            <p className="text-gray-500">Expected Release: [Month/Year]</p>
          </li>
          {/* Interactive Resume Builder */}
          <li>
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              <img src="path_to_builder_svg.svg" alt="Builder Icon" className="w-6 h-6 mr-2" />
              Interactive Resume Builder
            </h4>
            <p>An interactive tool for building and optimizing resumes in real-time.</p>
            <p className="text-gray-500">Expected Release: [Month/Year]</p>
          </li>
          {/* Personalized Career Coaching */}
          <li>
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              <img src="path_to_coaching_svg.svg" alt="Coaching Icon" className="w-6 h-6 mr-2" />
              Personalized Career Coaching
            </h4>
            <p>Integration with career coaching features for tailored advice and guidance.</p>
            <p className="text-gray-500">Expected Release: [Month/Year]</p>
          </li>
          {/* Multilingual Support */}
          <li>
            <h4 className="text-xl font-semibold text-gray-800 flex items-center">
              <img src="path_to_multilingual_svg.svg" alt="Multilingual Icon" className="w-6 h-6 mr-2" />
              Multilingual Support
            </h4>
            <p>Support for multiple languages to cater to a global audience.</p>
            <p className="text-gray-500">Expected Release: [Month/Year]</p>
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <img src="path_to_guide_svg.svg" alt="Guide Icon" className="w-6 h-6 mr-2" />
            Step-by-Step Guide
          </h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Upload your resume.</li>
            <li>Receive detailed analysis and feedback.</li>
            <li>Implement suggestions and track improvements.</li>
          </ol>
          <img src="path_to_flowchart_image.svg" alt="How It Works" className="w-full h-48 object-cover rounded-lg mt-4" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

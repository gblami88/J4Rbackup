import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const AnalysisSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('business_analysis_requests')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            business_type: formData.businessType.trim(),
            message: formData.message.trim() || null
          }
        ]);

      if (supabaseError) {
        throw supabaseError;
      }

      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', businessType: '', message: '' });
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="analysis-section" className="bg-black text-white py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Want to See What This Could Do for Your Business?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            We'll analyze your current workflows for <strong>FREE</strong> and show you exactly where automation 
            can give you hours back every week and improve your revenue.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
            👉 GET MY FREE BUSINESS ANALYSIS
          </h3>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-black mb-2">Thank You!</h4>
              <p className="text-gray-600">We'll be in touch within 24 hours to schedule your free analysis.</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="e.g., Restaurant, Salon, Consulting, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your biggest time-consuming tasks..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Free Analysis
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-navy text-white">
      <div className="section-container">
        <h2 className="section-title text-white after:bg-teal">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-8 text-gray-300">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              If you have a request or question, don't hesitate to use the form or contact me via 
              email or phone.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-teal mr-4" size={20} />
                <span>yourname@example.com</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-teal mr-4" size={20} />
                <span>(123) 456-7890</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-teal mr-4" size={20} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal text-white"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal hover:bg-teal-light text-navy font-semibold px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="bg-green-900/30 border border-green-500 text-green-300 px-4 py-3 rounded">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

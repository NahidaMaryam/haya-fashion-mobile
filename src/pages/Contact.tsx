
import React, { useState } from 'react';
import Header from '../components/Header';
import { Mail, Phone, Linkedin, MapPin, Send, Clock } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => {}} />
      
      <main className="mh-container py-8">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-playfair font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-lavender"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full bg-mh-lavender hover:bg-mh-lavender/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-playfair font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Mail className="w-5 h-5 text-mh-lavender" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email Us</h3>
                      <a href="mailto:contact@maryamhaya.com" className="text-gray-600 hover:text-mh-lavender">
                        contact@maryamhaya.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">For customer service inquiries</p>
                      
                      <a href="mailto:wholesale@maryamhaya.com" className="block text-gray-600 hover:text-mh-lavender mt-2">
                        wholesale@maryamhaya.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">For wholesale & business opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Phone className="w-5 h-5 text-mh-lavender" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Call Us</h3>
                      <a href="tel:+971123456789" className="text-gray-600 hover:text-mh-lavender">
                        +971 12 345 6789
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Sunday - Thursday, 9am - 5pm (GST)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Linkedin className="w-5 h-5 text-mh-lavender" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Connect on LinkedIn</h3>
                      <a href="https://linkedin.com/company/maryam-haya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-mh-lavender">
                        Maryam Haya Fashion
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Follow us for company updates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5 text-mh-lavender" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Visit Our Showroom</h3>
                      <p className="text-gray-600">
                        Fashion District, Level 3<br />
                        Dubai Design District (d3)<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-playfair font-semibold mb-4">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock size={16} className="text-mh-lavender mr-2" />
                    <span className="text-gray-700 font-medium w-36">Sunday - Thursday:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-mh-lavender mr-2" />
                    <span className="text-gray-700 font-medium w-36">Friday:</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-mh-lavender mr-2" />
                    <span className="text-gray-700 font-medium w-36">Saturday:</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-playfair font-semibold mb-6">Our Location</h2>
            <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component in a real application */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                <span>Interactive Map Would Be Displayed Here</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;

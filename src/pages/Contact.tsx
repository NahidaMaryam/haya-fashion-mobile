
import React from 'react';
import Header from '../components/Header';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => {}} />
      
      <main className="mh-container py-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-playfair font-semibold mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <a href="mailto:contact@maryamhaya.com" className="text-gray-600 hover:text-gray-900">
                    contact@maryamhaya.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
                    +1 (234) 567-890
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                  <a href="https://linkedin.com/company/maryam-haya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    Maryam Haya
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-playfair font-semibold mb-4">Business Hours</h2>
              <p className="text-gray-600 mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mb-4">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;

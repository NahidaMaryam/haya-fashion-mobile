
import React from 'react';
import Header from '../components/Header';
import { Mail, Phone, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => {}} />
      
      <main className="mh-container py-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6">About Maryam Haya</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Founded in 2023, Maryam Haya is a premium modest fashion brand dedicated to empowering women with elegant, contemporary clothing that honors traditional values while embracing modern style.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our collections feature carefully curated pieces that combine luxurious fabrics with thoughtful designs, ensuring that every woman feels confident and beautiful while maintaining her modesty.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-playfair font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide high-quality, fashionable modest wear that celebrates the beauty of modesty while meeting the needs of the modern woman.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-playfair font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To become the leading global destination for contemporary modest fashion, inspiring confidence through elegant design and exceptional quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

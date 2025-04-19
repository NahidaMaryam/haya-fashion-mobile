
import React from 'react';
import Header from '../components/Header';
import { Mail, Phone, Linkedin, Award, Users, Heart, Flower, Clock } from 'lucide-react';

const AboutEnhanced: React.FC = () => {
  const teamMembers = [
    {
      name: "Maryam Haya",
      role: "Founder & Designer",
      bio: "With 10+ years in modest fashion design, Maryam founded the brand with a vision to blend tradition with contemporary style.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"
    },
    {
      name: "Aisha Rahman",
      role: "Creative Director",
      bio: "Aisha brings her international experience from Paris and Dubai to create collections that resonate with women globally.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000"
    },
    {
      name: "Yusuf Khan",
      role: "Head of Operations",
      bio: "Managing our supply chain with commitment to ethical production and sustainable practices.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000"
    }
  ];

  const values = [
    {
      title: "Quality",
      description: "Premium fabrics and meticulous craftsmanship",
      icon: Award
    },
    {
      title: "Inclusivity",
      description: "Designs for diverse body types, ages, and preferences",
      icon: Users
    },
    {
      title: "Elegance",
      description: "Timeless pieces that transcend fast fashion trends",
      icon: Heart
    },
    {
      title: "Sustainability",
      description: "Ethical production and eco-friendly practices",
      icon: Flower
    },
    {
      title: "Heritage",
      description: "Honoring traditional modest wear while embracing modernity",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => {}} />
      
      <main className="mh-container py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl font-playfair font-bold mb-6">Our Story</h1>
          
          <div className="prose max-w-none">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <p className="text-gray-600 mb-4">
                Founded in 2023 by designer Maryam Haya, our brand was born from a passion to create modest fashion that never compromises on style or quality. What began as a small collection of handcrafted hijabs has blossomed into a comprehensive modest fashion house serving women worldwide.
              </p>
              
              <p className="text-gray-600 mb-4">
                Our journey started in a small studio in Dubai, where Maryam combined her background in textile design with her commitment to modest principles. The first collection received overwhelming response from the local community, encouraging us to expand our vision.
              </p>
              
              <p className="text-gray-600">
                Today, Maryam Haya is recognized for our signature blend of traditional modesty with contemporary aesthetics. Each piece in our collection tells a story of heritage, craftsmanship, and modern elegance.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-playfair font-bold mb-6">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-mh-lavender/20 mr-3">
                    <value.icon className="h-5 w-5 text-mh-lavender" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-playfair font-bold mb-6">Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-playfair font-semibold">{member.name}</h3>
                  <p className="text-mh-lavender mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-playfair font-bold mb-6">Our Commitment</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              At Maryam Haya, we believe that modest fashion should empower women, not restrict them. Every garment we create is designed with intention, combining functionality with beauty.
            </p>
            
            <p className="text-gray-600 mb-4">
              Our commitment extends beyond fashion to creating positive impact through ethical manufacturing practices, sustainable material sourcing, and supporting women artisans globally.
            </p>
            
            <p className="text-gray-600">
              We invite you to join us on this journey of redefining modest fashion for the modern woman.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutEnhanced;

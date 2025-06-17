import React from 'react';
import { Calendar, Music, Users, Award, CheckCircle, Headphones, Globe, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">About RAW MEDIA</h1>
          <p className="text-xl text-neutral-300">
            We Represent Sound Vision and Culture
          </p>
        </div>
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="mb-6">About RAW MEDIA</h2>
            <p className="text-neutral-300 mb-4">
              Based in Poland and operating across Europe and beyond, RAW MEDIA is a multidisciplinary talent agency representing artists who don't just perform — they define the visual and sonic aesthetics of the underground.
            </p>
            <p className="text-neutral-300 mb-4">
              We book DJs and producers, manage visual artists and VJs, and deliver full scale documentation through cinematic photography and video. We act as both an agency and a cultural engine, curating talent, producing content and building moments that last beyond the night.
            </p>
            <p className="text-neutral-300 mb-4">
              From underground warehouses in Warsaw to international stages, we represent the artists shaping tomorrow's culture. Our approach combines strategic artist development with deep cultural understanding, ensuring our talents thrive in an ever-evolving creative landscape.
            </p>
            <p className="text-neutral-300">
              We connect visionary talents with promoters, festivals and cultural institutions worldwide, fostering authentic connections that transcend boundaries and create lasting impact in the global underground scene.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Artist performing" 
              className="rounded-2xl w-full relative z-10"
            />
          </div>
        </div>
        
        {/* Stats Section - Updated for new starter */}
        <div className="bg-background-light rounded-2xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Growing Impact</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Building meaningful connections across the global underground scene
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-primary text-4xl font-bold mb-2">5+</div>
              <div className="text-neutral-300">Represented Artists</div>
            </div>
            <div className="p-6">
              <div className="text-secondary text-4xl font-bold mb-2">25+</div>
              <div className="text-neutral-300">Events Completed</div>
            </div>
            <div className="p-6">
              <div className="text-accent text-4xl font-bold mb-2">500+</div>
              <div className="text-neutral-300">Cultural Connections</div>
            </div>
            <div className="p-6">
              <div className="text-success text-4xl font-bold mb-2">100%</div>
              <div className="text-neutral-300">Underground Authenticity</div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              These core principles guide everything we do at RAW MEDIA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Music className="h-10 w-10" />,
                title: "Cultural Vision",
                description: "We represent artists who define the visual and sonic aesthetics of tomorrow's underground culture."
              },
              {
                icon: <CheckCircle className="h-10 w-10" />,
                title: "Authentic Connections",
                description: "Building genuine relationships between visionary talents and cultural institutions worldwide."
              },
              {
                icon: <Headphones className="h-10 w-10" />,
                title: "Sound & Vision",
                description: "Curating multidisciplinary talent across music, visual arts, and media creation."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Underground Integrity",
                description: "Preserving the authentic spirit of underground culture while expanding global reach."
              }
            ].map((value, index) => (
              <div key={index} className="bg-background-light p-8 rounded-xl">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-background-light rounded-2xl p-12">
          <h2 className="mb-6">Ready to Connect with Underground Culture?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Discover artists who define tomorrow's sound, vision and culture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary glow">
              Explore Artists
            </button>
            <button className="btn-outline">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { Calendar, Music, Users, Award, CheckCircle, Headphones, Globe, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">About BeatBooker</h1>
          <p className="text-xl text-neutral-300">
            We connect exceptional musical talent with unforgettable events, making the process of finding and booking your perfect DJ simple and stress-free.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="text-neutral-300 mb-4">
              Founded in 2020 by a team of music industry professionals and tech innovators, BeatBooker was born from a simple observation: finding and booking quality musical talent was unnecessarily complicated.
            </p>
            <p className="text-neutral-300 mb-4">
              We set out to create a platform that would streamline the booking process while ensuring top-tier talent for events of all sizes. From intimate gatherings to festival main stages, our mission is to make world-class musical experiences accessible to everyone.
            </p>
            <p className="text-neutral-300">
              Today, BeatBooker is the leading platform for DJ and artist bookings, trusted by clients around the world to deliver unforgettable musical moments for their special events.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="DJ performing" 
              className="rounded-2xl w-full relative z-10"
            />
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-background-light rounded-2xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Impact</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Since our launch, we've helped create countless memories through the power of music
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-primary text-4xl font-bold mb-2">500+</div>
              <div className="text-neutral-300">Professional Artists</div>
            </div>
            <div className="p-6">
              <div className="text-secondary text-4xl font-bold mb-2">10,000+</div>
              <div className="text-neutral-300">Events Completed</div>
            </div>
            <div className="p-6">
              <div className="text-accent text-4xl font-bold mb-2">250,000+</div>
              <div className="text-neutral-300">Happy Guests</div>
            </div>
            <div className="p-6">
              <div className="text-success text-4xl font-bold mb-2">98%</div>
              <div className="text-neutral-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              These core principles guide everything we do at BeatBooker
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Music className="h-10 w-10" />,
                title: "Musical Excellence",
                description: "We curate only the highest quality talent, ensuring exceptional performances for every event."
              },
              {
                icon: <CheckCircle className="h-10 w-10" />,
                title: "Reliability",
                description: "From booking to performance, we ensure a seamless, stress-free experience you can count on."
              },
              {
                icon: <Headphones className="h-10 w-10" />,
                title: "Personal Touch",
                description: "We listen carefully to understand your unique needs and match you with the perfect artist."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Trust & Safety",
                description: "Our secure platform and vetted professionals ensure peace of mind for every booking."
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
        
        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              The passionate people behind BeatBooker
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Founder & CEO",
                image: "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Former DJ and music producer with 15 years in the industry."
              },
              {
                name: "David Chen",
                title: "Chief Technology Officer",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Tech visionary with experience at leading music platforms."
              },
              {
                name: "Maria Rodriguez",
                title: "Artist Relations",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Former talent agent with deep connections in the music scene."
              },
              {
                name: "James Wilson",
                title: "Head of Events",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Event planning expert who's managed major festivals worldwide."
              }
            ].map((member, index) => (
              <div key={index} className="bg-background-light rounded-xl overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.title}</p>
                  <p className="text-neutral-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-primary/20 via-background to-secondary/20 rounded-2xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="mb-4">What People Say</h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              Hear from our clients about their experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "BeatBooker made finding the perfect DJ for our wedding so easy. The talent was incredible and our guests couldn't stop talking about the music!",
                name: "Emma & Jason",
                event: "Wedding"
              },
              {
                quote: "As an event planner, I rely on BeatBooker for all my clients' music needs. Their artists are professional, reliable, and always deliver an amazing experience.",
                name: "Michael Torres",
                event: "Corporate Events Manager"
              },
              {
                quote: "The booking process was seamless and the DJ we hired through BeatBooker absolutely made our club night. We'll definitely be using them again for future events.",
                name: "Nightlife Entertainment",
                event: "Club Owner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background rounded-xl p-6">
                <div className="text-primary text-5xl font-serif mb-4">"</div>
                <p className="text-neutral-300 italic mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-neutral-400">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-background-light rounded-2xl p-12">
          <h2 className="mb-6">Ready to Find Your Perfect DJ?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Browse our curated selection of top musical talent and book with confidence.
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Star, Calendar, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://video.wixstatic.com/video/11062b_75a9ffa858bb41449c13df2e8a0ed9d3/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Experience the World's Most Unique Dining
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              360° panoramic views while you dine in our rotating restaurant
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Book Your Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard
              icon={<Compass className="w-8 h-8" />}
              title="360° Views"
              description="Complete rotation every 90 minutes offering panoramic city views"
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Fine Dining"
              description="Exquisite menu crafted by world-renowned chefs"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="Easy Booking"
              description="Simple online reservation system with instant confirmation"
            />
            <FeatureCard
              icon={<CreditCard className="w-8 h-8" />}
              title="Secure Payment"
              description="Safe and secure payment processing for your peace of mind"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience the Magic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryImage
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Restaurant interior"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Fine dining"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="City view"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
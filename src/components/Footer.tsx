import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Home className="w-8 h-8" />
              <span>RotatingRoom</span>
            </div>
            <p className="text-gray-400">
              Helping medical students find the perfect temporary housing for their rotations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Students</h4>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-gray-400 hover:text-white transition-colors">Find Housing</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/verify" className="text-gray-400 hover:text-white transition-colors">Student Verification</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Hosts</h4>
            <ul className="space-y-2">
              <li><Link to="/list-property" className="text-gray-400 hover:text-white transition-colors">List Your Property</Link></li>
              <li><Link to="/host-requirements" className="text-gray-400 hover:text-white transition-colors">Requirements</Link></li>
              <li><Link to="/host-support" className="text-gray-400 hover:text-white transition-colors">Host Support</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Mail size={20} />} />
            </div>
            <p className="text-gray-400">
              Contact Support:<br />
              support@rotatingroom.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RotatingRoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
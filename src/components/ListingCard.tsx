import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link to={`/listing/${listing.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
        <div className="relative aspect-video">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{listing.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-black/70 transition-colors">{listing.title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{listing.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">${listing.price.toLocaleString()}/month</p>
            <span className="text-gray-600">({listing.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
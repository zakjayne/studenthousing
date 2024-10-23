import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Wifi, Car, Home, Star } from 'lucide-react';
import { mockListings } from '../utils/mockData';

export default function ListingDetails() {
  const { id } = useParams();
  const listing = mockListings.find(l => l.id === id);

  if (!listing) {
    return <Navigate to="/search" replace />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              {listing.images.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${listing.title} ${index + 1}`}
                  className="w-full h-[190px] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  {listing.location}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">${listing.price.toLocaleString()}/month</p>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{listing.rating} ({listing.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                <span>{listing.type}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Up to {listing.maxGuests} guests</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Minimum stay: {listing.minStay} months</span>
              </div>
            </div>

            <div className="border-t border-b py-8 my-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{listing.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {listing.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  {amenity === 'Wifi' ? <Wifi className="w-5 h-5 mr-2" /> : 
                   amenity === 'Parking' ? <Car className="w-5 h-5 mr-2" /> : 
                   <div className="w-5 h-5 mr-2" />}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>

            <Link
              to={`/book/${listing.id}`}
              className="block w-full md:w-auto text-center bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
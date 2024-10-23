import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Calendar, DollarSign, Filter } from 'lucide-react';
import ListingCard from '../components/ListingCard';
import { mockListings } from '../utils/mockData';

export default function Search() {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [filters, setFilters] = useState({
    entirePlace: false,
    privateRoom: false,
    nearHospital: false,
    hasWifi: false,
    hasParking: false,
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Location or Hospital"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
              >
                <option value="">Price Range</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000+">$2,000+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>
              
              <div className="space-y-4">
                {Object.entries(filters).map(([key, value]) => (
                  <label key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => setFilters({ ...filters, [key]: !value })}
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-2 text-gray-700">
                      {key.split(/(?=[A-Z])/).join(' ')}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
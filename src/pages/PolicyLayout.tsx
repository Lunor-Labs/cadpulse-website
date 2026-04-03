import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PolicyLayout = () => {
  return (
    <div className="min-h-screen bg-white font-ubuntu flex flex-col">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img src="cad.png" alt="Cadpulse" className="h-20 w-100 object-contain" />
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12 prose prose-lg max-w-none text-gray-700">
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolicyLayout;

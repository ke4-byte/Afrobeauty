import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
      {/* Background Blobs (matching other pages) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-pink-600 font-medium tracking-wider uppercase text-sm mb-3 block">Reservations</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Book Your <span className="italic text-gray-400">Appointment</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Fill out the form below to schedule your beauty treatment.
            Our team will contact you to confirm your booking within 24 hours.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
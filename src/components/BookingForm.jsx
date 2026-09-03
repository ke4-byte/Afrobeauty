import React, { useState } from 'react';
import { Scissors, User, Smartphone, Mail, Calendar, Clock, CheckCircle, Info } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    { id: 1, name: 'Haircut & Styling', duration: '60 mins', price: 'KSh 2,500' },
    { id: 2, name: 'Hair Coloring', duration: '90 mins', price: 'KSh 4,500' },
    { id: 3, name: 'Braiding & Weaving', duration: '120 mins', price: 'KSh 3,500+' },
    { id: 4, name: 'Manicure & Pedicure', duration: '75 mins', price: 'KSh 2,800' },
    { id: 5, name: 'Facial Treatment', duration: '60 mins', price: 'KSh 3,200' },
    { id: 6, name: 'Professional Makeup', duration: '90 mins', price: 'KSh 3,500' },
    { id: 7, name: 'Relaxing Massage', duration: '60 mins', price: 'KSh 3,000' },
    { id: 8, name: 'Waxing & Threading', duration: '45 mins', price: 'KSh 1,500+' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully! We will contact you to confirm.');
    console.log('Booking data:', formData);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="md:flex">
          {/* Left Side - Form */}
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-pink-200">
                
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>Schedule Your Visit</h3>
                <p className="text-gray-500 text-sm mt-1">We'll confirm your booking within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-pink-500" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pl-11 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 font-medium text-gray-900"
                        placeholder="Enter your full name"
                      />
                      <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 group-focus-within:text-pink-500 transition-colors" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pl-11 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 font-medium text-gray-900"
                        placeholder="+254 7XX XXX XXX"
                      />
                      <Smartphone className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 group-focus-within:text-pink-500 transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 pl-11 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 font-medium text-gray-900"
                      placeholder="your.email@example.com"
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 group-focus-within:text-pink-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Scissors className="w-5 h-5 text-pink-500" />
                  Select Service
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`relative p-5 border rounded-2xl cursor-pointer transition-all duration-300 group ${formData.service === service.name
                        ? 'border-pink-500 bg-pink-50/50 shadow-md ring-1 ring-pink-500'
                        : 'border-gray-200 hover:border-pink-300 hover:shadow-md'
                        }`}
                      onClick={() => setFormData({ ...formData, service: service.name })}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className={`font-bold transition-colors ${formData.service === service.name ? 'text-pink-900' : 'text-gray-900'}`}>{service.name}</h5>
                          <div className="flex items-center mt-2 space-x-3 text-sm">
                            <span className="flex items-center text-gray-500">
                              <Clock className="w-3.5 h-3.5 mr-1" />
                              {service.duration}
                            </span>
                            <span className="font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full text-xs">{service.price}</span>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${formData.service === service.name ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                          }`}>
                          <CheckCircle className="w-6 h-6 text-pink-600 fill-current" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-pink-500" />
                  Select Date & Time
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferred Date *</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pl-11 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 font-medium text-gray-900"
                      />
                      <Calendar className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 group-focus-within:text-pink-500 transition-colors" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Time Slot *</label>
                    <div className="relative">
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pl-3 border border-gray-200 bg-gray-50 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 appearance-none font-medium text-gray-900"
                      >
                        <option value="">Select preferred time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                      <Clock className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 font-medium text-gray-900 resize-none"
                  placeholder="Any special requests, allergies, or requirements you'd like us to know about..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl shadow-pink-200 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                <span>Book Appointment Now</span>
                <CheckCircle className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right Side - Info Panel */}
          <div className="md:w-1/3 bg-gray-900 text-white p-8 md:p-12 relative overflow-hidden">
            {/* Background Gradient & Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

            <div className="sticky top-8 relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>Booking Summary</h3>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="font-semibold text-pink-300 mb-4 uppercase text-xs tracking-widest">What's Included</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">Professional consultation with expert stylists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">Premium international styling products</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">Complimentary refreshments during service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">Personalized follow-up care advice</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="font-semibold text-pink-300 mb-4 uppercase text-xs tracking-widest">Important Notes</h4>
                  <ul className="space-y-4 text-sm text-gray-300">
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Please arrive 10 minutes before your appointment</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cancellations must be made 24 hours in advance</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Free parking available at our Westlands location</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-pink-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl text-white shadow-lg">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="font-bold text-lg">Expert Team</span>
                  </div>
                  <p className="text-sm opacity-90 font-light">Join over 1,000 satisfied clients who trust us with their beauty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
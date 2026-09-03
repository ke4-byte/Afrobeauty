import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import { Scissors, Sparkles, Palette, Clock, Award, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const services = [
        {
            title: 'Hair Styling',
            icon: <Scissors className="w-8 h-8 text-pink-600" />,
            description: 'Expert cuts, coloring, and styling tailored to your unique look.',
            color: 'bg-pink-50',
            border: 'border-pink-100'
        },
        {
            title: 'Skin Care',
            icon: <Sparkles className="w-8 h-8 text-purple-600" />,
            description: 'Rejuvenating facials and treatments for glowing, healthy skin.',
            color: 'bg-purple-50',
            border: 'border-purple-100'
        },
        {
            title: 'Nail Art',
            icon: <Palette className="w-8 h-8 text-rose-600" />,
            description: 'Creative nail designs and premium manicures for every occasion.',
            color: 'bg-rose-50',
            border: 'border-rose-100'
        }
    ];

    return (
        <div className="overflow-hidden">
            <Hero />

            {/* Services Section */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-pink-600 font-medium tracking-wider uppercase text-sm mb-3 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                            Premium <span className="italic text-gray-400">Services</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                            Indulge in a wide range of beauty treatments designed to help you look and feel your absolute best.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-[2rem] border ${service.border} ${service.color} hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-pink-600 transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Features */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Salon Interior"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    </div>
                                    <p className="font-medium text-lg">"Best salon experience in Nakuru"</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-purple-600 font-medium tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Experience Excellence <br />
                                <span className="text-pink-600 italic">in Beauty</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                                We combine artistic expertise with premium products to deliver exceptional results. Your beauty journey is our passion.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 p-3 bg-pink-50 rounded-xl">
                                        <Clock className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>Flexible Scheduling</h3>
                                        <p className="text-gray-500">Online booking available 24/7. Find a time that works for you.</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 p-3 bg-purple-50 rounded-xl">
                                        <Award className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>Expert Stylists</h3>
                                        <p className="text-gray-500">Highly trained professionals dedicated to perfecting your look.</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 p-3 bg-rose-50 rounded-xl">
                                        <Star className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>Premium Products</h3>
                                        <p className="text-gray-500">We use only the finest international beauty brands.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery />
        </div>
    );
};

export default HomePage;
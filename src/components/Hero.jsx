import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like feel */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{
                    backgroundImage: `url('https://github.com/ke4-byte/Afrobeauty/blob/main/src/assets/hero-bg.png?raw=true')`
                }}
            />

            {/* Gradient Overlays for better text readability and mood */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

                {/* Decorative Element */}
                <div className="mb-6 animate-fade-in-down">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-300 text-sm font-medium tracking-wider uppercase">
                        Premium Beauty Experience
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight animate-fade-in-down animation-delay-200">
                    <span style={{ fontFamily: '"Playfair Display", serif' }}>
                        Luxury Beauty <br />
                        <span className="italic text-pink-400">Reimagined</span>
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-down animation-delay-400"
                    style={{ fontFamily: '"Inter", sans-serif' }}>
                    Elevate your style with Nakuru's premier salon.
                    Expert styling, premium products, and an atmosphere of pure elegance.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-down animation-delay-600">
                    <Link
                        to="/booking"
                        className="group relative px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] flex items-center gap-3 overflow-hidden"
                    >
                        <span className="relative z-10">Book Appointment</span>
                        <Calendar className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-12" />
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <Link
                        to="/gallery"
                        className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:border-pink-400/50"
                    >
                        <span>View Gallery</span>
                        <Sparkles className="w-5 h-5 text-pink-300 transition-transform group-hover:scale-110" />
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </div>
        </div>
    );
};

export default Hero;

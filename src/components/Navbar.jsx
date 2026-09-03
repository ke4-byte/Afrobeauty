import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/booking', label: 'Book' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/store', label: 'Shop' },
    ];

    const logoUrl = "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // Determine navbar style based on scroll and page
    const isScrolledOrNotHome = scrolled || !isHome;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolledOrNotHome
                ? 'bg-white/80 backdrop-blur-xl border-white/20 py-2 shadow-sm'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Brand / Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-white/50 shadow-lg group-hover:border-pink-400/50 transition-all duration-500">
                            <img
                                src={logoUrl}
                                alt="AfroBeauty Logo"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className={`flex flex-col transition-colors duration-300 ${isScrolledOrNotHome ? 'text-gray-900' : 'text-white'}`}>
                            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                                AfroBeauty Beauty
                            </span>
                            <span className={`text-[0.6rem] uppercase tracking-[0.25em] font-medium ${isScrolledOrNotHome ? 'text-pink-600' : 'text-pink-300'}`}>
                                Luxury Salon
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden lg:flex items-center rounded-full px-2 py-1.5 transition-all duration-300 ml-8 ${isScrolledOrNotHome ? 'bg-gray-100/50 border border-gray-200/50' : 'bg-white/5 backdrop-blur-sm border border-white/10'
                        }`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                    ? 'bg-white text-gray-900 shadow-md'
                                    : isScrolledOrNotHome ? 'text-gray-600 hover:text-pink-600' : 'text-gray-200 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className={`p-2 rounded-full transition-colors duration-300 ${isScrolledOrNotHome ? 'hover:bg-pink-50 text-gray-600' : 'hover:bg-white/10 text-white'}`}>
                            <Search className="w-5 h-5" />
                        </button>

                        <Link
                            to="/store"
                            className={`relative p-2 rounded-full transition-colors duration-300 group ${isScrolledOrNotHome ? 'hover:bg-pink-50 text-gray-600' : 'hover:bg-white/10 text-white'}`}
                        >
                            <ShoppingBag className="w-5 h-5 group-hover:text-pink-500 transition-colors" />
                            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink-500 text-white text-[10px] flex items-center justify-center rounded-full shadow-lg">
                                3
                            </span>
                        </Link>

                        <div className={`h-6 w-px mx-2 ${isScrolledOrNotHome ? 'bg-gray-200' : 'bg-white/20'}`}></div>

                        <Link
                            to="/booking"
                            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(219,39,119,0.4)] flex items-center gap-2 group"
                        >
                            <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            <span>Book Now</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolledOrNotHome ? 'text-gray-900' : 'text-white'}`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-pink-50 text-gray-900 font-medium transition-colors group"
                        >
                            <span style={{ fontFamily: '"Playfair Display", serif' }} className="text-lg">
                                {link.label}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-pink-500 transition-colors">
                                <span className="text-xl">→</span>
                            </div>
                        </Link>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <Link
                            to="/store"
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-pink-50 transition-colors text-gray-600 hover:text-pink-600"
                        >
                            <ShoppingBag className="w-6 h-6 mb-2" />
                            <span className="text-xs font-medium uppercase tracking-wide">Store</span>
                        </Link>
                        <Link
                            to="/booking"
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col items-center justify-center p-4 rounded-xl bg-pink-600 hover:bg-pink-700 transition-colors text-white shadow-lg shadow-pink-200"
                        >
                            <Calendar className="w-6 h-6 mb-2" />
                            <span className="text-xs font-medium uppercase tracking-wide">Book Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

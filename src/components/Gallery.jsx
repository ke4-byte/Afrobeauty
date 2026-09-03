import React, { useState } from 'react';
import { Star, Calendar, Quote, ArrowRight } from 'lucide-react';

// Mock gallery images with reviews and dates
const galleryImages = [
    {
        id: 1,
        category: 'hair',
        src: 'https://imgs.search.brave.com/VKyKNzHoTR5sculoUjNot_vX7qdAhwnajAuDJQK9vuA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYWly/c3R5bGVjYW1wLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMva2Vu/eWFuLWJyYWlkcy1o/YWlyc3R5bGUtNS5q/cGc',
        title: 'Intricate Braids',
        review: "Absolutely in love with my braids! The attention to detail is unmatched.",
        customer: "Amina K.",
        date: "Oct 12, 2025"
    },
    {
        id: 2,
        category: 'hair',
        src: 'https://imgs.search.brave.com/SzNQ7m9vGxOUb7NqYiq_CqP-mrZzlp5VmowAHhCzf2M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXB1/bnplbGhhaXJhZmZh/aXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA4L0lN/R18yMjgzLmpwZw',
        title: 'Natural Hair Treatment',
        review: "My hair has never felt so healthy and soft. The stylists really know natural hair.",
        customer: "Zara M.",
        date: "Nov 05, 2025"
    },
    {
        id: 3,
        category: 'makeup',
        src: 'https://imgs.search.brave.com/z3zSfwvBLw2mrgVhVDJ8KE7pqQo-lUI8kblocJPezmA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWF1dGljaWFu/LWFwcGx5aW5nLW1h/a2UtdXAtd29tYW5f/MTA0ODk0NC0zMjcz/MTU4LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA',
        title: 'Evening Glam',
        review: "Perfect makeup for my wedding anniversary. Stayed flawless all night!",
        customer: "Sarah J.",
        date: "Sep 28, 2025"
    },
    {
        id: 4,
        category: 'nails',
        src: 'https://imgs.search.brave.com/ad8NJkruRACcHrI5pbtB1eY2ZOSLsmRODk9b3BAhREg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NDcyOTUwMS9waG90/by9hZnJpY2FuLWFt/ZXJpY2FuLW5haWwt/c2Fsb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXkxMnB6/MHp5MUVNR0U0Q3dk/d3l5LXZpV3JDUnd5/eDZ3NjNiRjAzUHpF/aTg9',
        title: 'Acrylic Set',
        review: "Best nail tech in Nairobi! The design was exactly what I wanted.",
        customer: "Wanjiku P.",
        date: "Dec 15, 2025"
    },
    {
        id: 5,
        category: 'facial',
        src: 'https://imgs.search.brave.com/25Pq1visgu4vctlyqJ2qtrrXacVVz0STEOtOOexN2fg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3R5bGVzZWF0LmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA3L2xh/c2VyLWZhY2lhbC1j/bG9zZS11cC5qcGc',
        title: 'Hydrating Facial',
        review: "So relaxing and my skin is glowing. Highly recommend their facials.",
        customer: "Grace L.",
        date: "Jan 03, 2025"
    },
    {
        id: 6,
        category: 'hair',
        src: 'https://imgs.search.brave.com/Cz2u_sYqZCZ3HxKnnO0z7E2hujxlwnpvBAICi1fLDLc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vYW5kYXJpeWEt/bmV3LW5ldy9pbWFn/ZS91cGxvYWQvdjE2/MzE3OTYxNjEva2Vu/N18xZThlYmI0Njdh/LnBuZw',
        title: 'Silk Press',
        review: "Smooth, shiny, and full of body. I'll definitely be coming back.",
        customer: "Chiamaka O.",
        date: "Nov 20, 2025"
    },
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'hair', name: 'Hair' },
        { id: 'makeup', name: 'Makeup' },
        { id: 'nails', name: 'Nails' },
        { id: 'facial', name: 'Facial' }
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <section className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-pink-600 font-medium tracking-wider uppercase text-sm mb-2 block">Our Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Client <span className="text-pink-600 italic">Transformations</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Witness the artistry of our stylists. Real results from real clients who trusted us with their beauty journey.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 font-sans tracking-wide ${selectedCategory === category.id
                                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 border border-gray-100'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-pink-300 text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                                    <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>{image.title}</h3>

                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                                        <div className="flex items-start gap-2 mb-3">
                                            <Quote className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                                            <p className="text-gray-200 text-sm italic leading-relaxed">"{image.review}"</p>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                            <span className="text-white font-medium text-sm">{image.customer}</span>
                                            <div className="flex items-center text-white/60 text-xs">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {image.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <Star className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-lg">No transformations found in this category yet.</p>
                    </div>
                )}


                {/* View More Button */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center gap-2 text-gray-900 border-b border-gray-900 pb-1 hover:text-pink-600 hover:border-pink-600 transition-all duration-300 group font-medium">
                        View Full Gallery
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
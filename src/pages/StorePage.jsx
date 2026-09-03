import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Toast from '../components/Toast';

// Mock product data (keeping same data, but layout changes below)
const products = [
    {
        id: 1,
        name: 'Hydrating Shampoo',
        price: 2500,
        image: 'https://imgs.search.brave.com/N2mGNoHU8Gc65ccpOzS5a2W6wzwfQj5CIQvlwYfyMeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3LzY3/L2QxLzI3NjdkMTM0/MWE1MThmYmRiMzNi/MjUyOTM4YzNjNGE3/LmpwZw',
        description: 'Moisturizing shampoo for dry hair',
        category: 'Hair Care'
    },
    {
        id: 2,
        name: 'Luxury Hair Oil',
        price: 3500,
        image: 'https://imgs.search.brave.com/ZTzo0PeoWsZ4ttGa27TrkH6CqVqRTe94slQNT-BZOu0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1bHliZWF1dHku/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzUuVFJV/TFlDSEVSUllCQUJZ/MDJWMl9yZXNpemVk/Zm9yd2ViXzE1MDBY/MTg3NV9jcm9wX2Nl/bnRlci5qcGc_dj0x/NzYxNTc4NjI1',
        description: 'Premium hair oil for shine and growth',
        sale: true,
        originalPrice: 4500,
        category: 'Hair Care'
    },
    {
        id: 3,
        name: 'Facial Cream',
        price: 4200,
        image: 'https://imgs.search.brave.com/lCRTthmrpMMm2aips7oYwmsSwUDFy7LmGDVFVQ0PArg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI1LzAzL0JFU1Qt/RkFDSUFMLU1PSVNU/VVJJWkVSUy1TVUIt/MjA0OHB4LTE4MzAu/anBnP2F1dG89d2Vi/cCZxdWFsaXR5PTc1/JndpZHRoPTEwMjQ',
        description: 'Anti-aging facial cream',
        category: 'Skin Care'
    },
    {
        id: 4,
        name: 'Nail Polish Set',
        price: 1800,
        image: 'https://imgs.search.brave.com/pKvYwKUWv__GsYeMigNOfhTR8yoJgx6uaM3Ijr1dRTM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF1NFdSYXRrVkwu/anBn',
        description: 'Set of 6 premium nail polishes',
        category: 'Nails'
    },
    {
        id: 5,
        name: 'Makeup Brushes',
        price: 3200,
        image: 'https://imgs.search.brave.com/uWjYfjLffaUpCsXtWkBf21nOYuKIk0G2LYdlz0E6zf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTE1/MTkyNjUyL3N0b2Nr/LXBob3RvLXByb2Zl/c3Npb25hbC1tYWtl/dXAtYnJ1c2hlcy1h/bmQtdG9vbHMtbWFr/ZS11cC1wcm9kdWN0/cy1zZXQ',
        description: 'Professional makeup brush set',
        category: 'Makeup'
    },
    {
        id: 6,
        name: 'Body Lotion',
        price: 2800,
        image: 'https://imgs.search.brave.com/-CWUkVnQ-IrEYqhbERcsBSe7O2cvQ40tY-NaLzj8ze0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVs/b3ZlY28uaW4vY2Ru/L3Nob3AvZmlsZXMv/YnV0dGVyX3NvZnRf/bG90aW9uLmpwZz92/PTE3NjI5MzI3MDAm/d2lkdGg9NDYw',
        description: 'Scented moisturizing body lotion',
        sale: true,
        originalPrice: 3500,
        category: 'Body Care'
    }
];

const StorePage = () => {
    const [toast, setToast] = useState({ message: '', isVisible: false });

    const handleAddToCart = (product, quantity) => {
        setToast({
            message: `Added ${quantity} ${product.name} to your cart.`,
            isVisible: true
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 pointer-events-none"></div>

            <Toast
                message={toast.message}
                isVisible={toast.isVisible}
                onClose={() => setToast({ ...toast, isVisible: false })}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-pink-600 font-medium tracking-wider uppercase text-sm mb-3 block">Online Store</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Beauty <span className="italic text-gray-400">Essentials</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Shop our premium selection of beauty products for professional and home use.
                        Curated by our expert stylists.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <div key={product.id} className="h-full">
                            <ProductCard
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StorePage;
import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(product, quantity);
        }
    };

    return (
        <div
            className="group bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-square overflow-hidden bg-gray-50 m-2 rounded-2xl">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {product.sale && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-sm uppercase">
                        Sale
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-widest mb-1 block">{product.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {product.name}
                    </h3>
                </div>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow font-light">
                    {product.description}
                </p>

                <div className="space-y-4">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            {product.sale && (
                                <span className="text-gray-400 line-through text-xs font-medium">
                                    KSh {product.originalPrice?.toLocaleString()}
                                </span>
                            )}
                            <span className="text-2xl font-bold text-gray-900">
                                KSh {product.price.toLocaleString()}
                            </span>
                        </div>

                        <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-1 py-1">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 hover:shadow-sm text-gray-500 transition-all"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-semibold text-sm text-gray-900">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 hover:shadow-sm text-gray-500 transition-all"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-gray-900 hover:bg-pink-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-transparent hover:shadow-pink-200 group/btn"
                    >
                        <ShoppingCart size={18} className="group-hover/btn:animate-bounce" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Auto hide after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-24 right-4 z-50 animate-fade-in-down">
            <div className="bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 flex items-start gap-3 max-w-sm">
                <div className="text-green-500">
                    <CheckCircle size={20} />
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">Success</h4>
                    <p className="text-gray-600 text-sm mt-1">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default Toast;

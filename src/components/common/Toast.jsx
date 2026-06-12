import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message }) {
  return (
    <div className={`fixed top-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 transform transition-all duration-300 ${message ? 'translate-x-0' : 'translate-x-[150%]'}`}>
      <CheckCircle size={20} />
      <span className="font-medium">{message}</span>
    </div>
  );
}

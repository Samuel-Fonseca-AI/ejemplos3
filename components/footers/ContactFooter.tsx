import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-black uppercase tracking-widest mb-1">Contáctanos</h2>
          <p className="text-gray-400 text-xs">Visita nuestras tiendas o llámanos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
          <div className="flex flex-col items-center text-center p-4 bg-neutral-900 hover:bg-black transition-colors group">
            <div className="bg-white text-black p-2 rounded-none mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-xs mb-1">Llámanos</h3>
            <p className="text-[10px] text-gray-400 font-mono">+34 912 345 678</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-neutral-900 hover:bg-black transition-colors group">
            <div className="bg-white text-black p-2 rounded-none mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-xs mb-1">Escríbenos</h3>
            <p className="text-[10px] text-gray-400 font-mono">info@zapatos.com</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-neutral-900 hover:bg-black transition-colors group">
            <div className="bg-white text-black p-2 rounded-none mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-xs mb-1">Visítanos</h3>
            <p className="text-[10px] text-gray-400 font-mono">Madrid, Centro</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-neutral-900 hover:bg-black transition-colors group">
            <div className="bg-white text-black p-2 rounded-none mb-3 group-hover:scale-110 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-xs mb-1">Horario</h3>
            <p className="text-[10px] text-gray-400 font-mono">10:00 - 21:00</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Zapatos Store S.L.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
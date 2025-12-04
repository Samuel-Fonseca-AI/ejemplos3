import React from 'react';
import { Instagram, Facebook, Youtube, Hash } from 'lucide-react';

const SocialFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t-2 border-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-black mb-2 uppercase tracking-tighter text-black">Comunidad #Zapatos</h2>
        <p className="text-gray-500 mb-6 max-w-xl mx-auto font-medium text-xs">
          Muestra tu estilo. Etiquétanos para aparecer en nuestra galería oficial.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="group">
            <div className="p-3 bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black transition-all">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="block mt-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
          </a>
          <a href="#" className="group">
            <div className="p-3 bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black transition-all">
              <Facebook className="w-5 h-5" />
            </div>
            <span className="block mt-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
          </a>
          <a href="#" className="group">
            <div className="p-3 bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black transition-all">
              <Hash className="w-5 h-5" />
            </div>
            <span className="block mt-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">TikTok</span>
          </a>
          <a href="#" className="group">
            <div className="p-3 bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black transition-all">
              <Youtube className="w-5 h-5" />
            </div>
            <span className="block mt-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">YouTube</span>
          </a>
        </div>
        
        <div className="inline-block px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 cursor-pointer">
           @ZapatosOfficial
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
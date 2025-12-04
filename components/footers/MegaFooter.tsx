import React from 'react';
import { Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const MegaFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Brand */}
          <div className="pr-2">
            <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tighter">MEGASHOP.</h3>
            <p className="text-neutral-400 mb-4 text-xs leading-relaxed font-light">
              Redefiniendo el paso urbano con diseños exclusivos y tecnología de vanguardia.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-neutral-900 p-1.5 hover:bg-white hover:text-black transition-colors"><Facebook size={14} /></a>
              <a href="#" className="bg-neutral-900 p-1.5 hover:bg-white hover:text-black transition-colors"><Twitter size={14} /></a>
              <a href="#" className="bg-neutral-900 p-1.5 hover:bg-white hover:text-black transition-colors"><Instagram size={14} /></a>
            </div>
          </div>

          {/* Columna 2: Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">Categorías</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">Sneakers <ArrowRight size={10} className="opacity-0 hover:opacity-100" /></a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Botas</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Running</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Formal</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all text-white font-bold">Edición Limitada</a></li>
            </ul>
          </div>

          {/* Columna 3: Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">Soporte</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guía de Tallas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidado del Calzado</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">Únete al Club</h4>
            <p className="text-neutral-400 text-xs mb-4">Recibe acceso anticipado a drops exclusivos.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-neutral-900 border-none rounded-none px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-white text-white placeholder-neutral-600"
              />
              <button className="bg-white hover:bg-neutral-200 text-black px-3 py-2 rounded-none text-[10px] font-bold uppercase tracking-widest transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 font-mono uppercase">
          <p>&copy; {new Date().getFullYear()} MegaShop Footwear.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Política de Privacidad</span>
            <span className="cursor-pointer hover:text-white transition-colors">Términos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
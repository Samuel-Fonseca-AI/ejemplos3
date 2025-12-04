import React from 'react';

const NavigationFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-black tracking-tighter uppercase">Navegación</h2>
            <div className="h-0.5 w-12 bg-white mt-1 mx-auto md:mx-0"></div>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold text-xs tracking-widest uppercase">
            <a href="#" className="hover:text-gray-400 transition-colors border-b border-transparent hover:border-white pb-0.5">Inicio</a>
            <a href="#" className="hover:text-gray-400 transition-colors border-b border-transparent hover:border-white pb-0.5">Hombre</a>
            <a href="#" className="hover:text-gray-400 transition-colors border-b border-transparent hover:border-white pb-0.5">Mujer</a>
            <a href="#" className="hover:text-gray-400 transition-colors border-b border-transparent hover:border-white pb-0.5">Colecciones</a>
            <a href="#" className="hover:text-gray-400 transition-colors border-b border-transparent hover:border-white pb-0.5">Contacto</a>
          </nav>
        </div>
        <div className="border-t border-neutral-800 pt-4 text-center text-neutral-500 text-[10px] uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Diseño de Zapatos Premium.
        </div>
      </div>
    </footer>
  );
};

export default NavigationFooter;
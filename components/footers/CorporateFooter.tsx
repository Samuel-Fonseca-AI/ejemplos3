import React from 'react';

const CorporateFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-black text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-black text-black tracking-tighter uppercase italic block">ZAPATOS CORP.</span>
            <p className="text-[10px] mt-1 max-w-xs font-medium text-gray-500 uppercase tracking-wide">Líderes en calzado innovador desde 1980.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-wider">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Corporativo</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Inversores</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Prensa</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">Talento</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 my-4"></div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <div className="mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} Zapatos Global Holdings.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black transition-colors">Legal</a>
            <a href="#" className="hover:text-black transition-colors">Privacidad</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
            <a href="#" className="hover:text-black transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;
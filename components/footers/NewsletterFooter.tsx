import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-100 py-8 border-t border-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white p-6 md:p-8 border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="inline-flex items-center justify-center p-3 bg-black text-white mb-4">
            <Mail size={20} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-black mb-2 uppercase tracking-tight">First to Know</h2>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto font-medium text-xs">
            Suscríbete. Recibe las últimas colecciones y lanzamientos limitados antes que nadie.
          </p>

          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto mb-4 border-2 border-black" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              required
              placeholder="TU@CORREO.COM" 
              className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-400 outline-none font-bold uppercase tracking-wide text-xs"
            />
            <button className="px-6 py-3 bg-black hover:bg-neutral-800 text-white font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2">
              Enviar <ArrowRight size={12} />
            </button>
          </form>
          
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Sin spam. Solo zapatos increíbles.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Tiendas</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div>
        <div className="mt-4 text-[10px] text-gray-400 font-mono">
          &copy; {new Date().getFullYear()} NEWSLETTER SYSTEM.
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
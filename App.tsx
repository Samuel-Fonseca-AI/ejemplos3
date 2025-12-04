import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Phone, 
  Building2, 
  Grid, 
  Share2, 
  Mail,
  ChevronRight,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

import { FooterType, FooterDefinition } from './types';
import BasicFooter from './components/footers/BasicFooter';
import NavigationFooter from './components/footers/NavigationFooter';
import ContactFooter from './components/footers/ContactFooter';
import CorporateFooter from './components/footers/CorporateFooter';
import MegaFooter from './components/footers/MegaFooter';
import SocialFooter from './components/footers/SocialFooter';
import NewsletterFooter from './components/footers/NewsletterFooter';

const App: React.FC = () => {
  const [activeFooter, setActiveFooter] = useState<FooterType>(FooterType.MEGA);

  const footers: FooterDefinition[] = [
    {
      id: FooterType.BASIC,
      title: 'Básico',
      description: 'Esencial y minimalista: Copyright y Año. Ideal para mantener el foco totalmente en el producto sin distracciones.',
      component: <BasicFooter />,
      icon: <Layout className="w-5 h-5" />
    },
    {
      id: FooterType.NAVIGATION,
      title: 'Navegación',
      description: 'Enlaces principales para mejorar el flujo del usuario. Permite saltar rápidamente entre categorías de calzado.',
      component: <NavigationFooter />,
      icon: <Menu className="w-5 h-5" />
    },
    {
      id: FooterType.CONTACT,
      title: 'Contacto',
      description: 'Datos directos: Teléfono, Email, Mapa y Horarios. Genera confianza para tiendas físicas de calzado.',
      component: <ContactFooter />,
      icon: <Phone className="w-5 h-5" />
    },
    {
      id: FooterType.CORPORATE,
      title: 'Corporativo',
      description: 'Institucional: Legal, Privacidad y "Sobre Nosotros". Perfecto para marcas de calzado establecidas.',
      component: <CorporateFooter />,
      icon: <Building2 className="w-5 h-5" />
    },
    {
      id: FooterType.MEGA,
      title: 'Megafóoter',
      description: 'Completo: Múltiples columnas, enlaces y funciones. Excelente para e-commerce con grandes catálogos.',
      component: <MegaFooter />,
      icon: <Grid className="w-5 h-5" />
    },
    {
      id: FooterType.SOCIAL,
      title: 'Redes Sociales',
      description: 'Enfocado en marketing, iconos grandes y CTA social. Ideal para marcas urbanas y visuales.',
      component: <SocialFooter />,
      icon: <Share2 className="w-5 h-5" />
    },
    {
      id: FooterType.NEWSLETTER,
      title: 'Newsletter',
      description: 'Captación de leads con formulario integrado. Esencial para lanzamientos exclusivos de sneakers.',
      component: <NewsletterFooter />,
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const getComponent = (type: FooterType) => {
    switch (type) {
      case FooterType.BASIC: return <BasicFooter />;
      case FooterType.NAVIGATION: return <NavigationFooter />;
      case FooterType.CONTACT: return <ContactFooter />;
      case FooterType.CORPORATE: return <CorporateFooter />;
      case FooterType.MEGA: return <MegaFooter />;
      case FooterType.SOCIAL: return <SocialFooter />;
      case FooterType.NEWSLETTER: return <NewsletterFooter />;
      default: return <BasicFooter />;
    }
  };

  const selectedFooterDef = footers.find(f => f.id === activeFooter);

  return (
    <div className="flex h-screen bg-neutral-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-black text-gray-300 flex flex-col border-r border-gray-800 shadow-2xl z-10 hidden md:flex">
        <div className="p-4 border-b border-gray-800 bg-neutral-950">
          <h1 className="text-lg font-bold text-white flex items-center gap-2 tracking-wider">
            FOOTER<span className="font-light">MASTER</span>
          </h1>
          <p className="text-[10px] text-gray-500 mt-1">Galería de Diseños B&W</p>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2">
          <nav className="px-2 space-y-1">
            {footers.map((footer) => (
              <button
                key={footer.id}
                onClick={() => setActiveFooter(footer.id)}
                className={`w-full text-left px-3 py-3 rounded-none flex items-start gap-3 transition-all duration-200 group border-l-2 ${
                  activeFooter === footer.id 
                    ? 'bg-neutral-900 border-white text-white' 
                    : 'border-transparent hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <div className={`mt-0.5 ${activeFooter === footer.id ? 'text-white' : 'text-gray-600 group-hover:text-white'}`}>
                  {footer.icon}
                </div>
                <div>
                  <span className="block font-bold text-xs tracking-wide uppercase">{footer.title}</span>
                </div>
                {activeFooter === footer.id && (
                  <ChevronRight className="w-3 h-3 ml-auto self-center opacity-100" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-3 bg-black border-t border-gray-900 text-center">
          <p className="text-[10px] text-gray-600 font-mono">NOIR COLLECTION v2.0</p>
        </div>
      </aside>

      {/* Mobile Menu Header */}
      <div className="md:hidden fixed top-0 w-full bg-black z-20 p-3 flex justify-between items-center text-white border-b border-gray-800">
          <span className="font-bold tracking-widest text-sm">NOIR</span>
          <select 
            className="bg-neutral-900 text-white text-xs rounded-none p-1 border border-gray-700 outline-none"
            value={activeFooter}
            onChange={(e) => setActiveFooter(e.target.value as FooterType)}
          >
            {footers.map(f => <option key={f.id} value={f.id}>{f.title}</option>)}
          </select>
      </div>

      {/* Main Preview Area */}
      <main className="flex-1 flex flex-col h-full relative bg-gray-200 overflow-hidden md:pt-0 pt-14">
        {/* Toolbar - Compact */}
        <div className="bg-white border-b border-gray-300 px-4 py-2 flex justify-between items-center shadow-sm z-10">
          <div>
            <h2 className="text-xs font-bold text-black uppercase tracking-widest flex items-center gap-2">
              Vista: <span className="bg-black text-white px-2 py-0.5 text-[10px]">{selectedFooterDef?.title}</span>
            </h2>
          </div>
          <div className="flex gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
             <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
          </div>
        </div>

        {/* Browser Mockup Container */}
        <div className="flex-1 overflow-y-auto p-0 md:p-4 bg-gray-200">
          <div className="max-w-6xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col transition-all duration-500">
            
            {/* Nav Header Mockup - Compact */}
            <div className="border-b border-black py-2 px-6 flex justify-between items-center bg-white sticky top-0 z-20 h-12">
              <span className="text-lg font-black tracking-tighter uppercase italic">ZAPATOS.</span>
              <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest">
                <span className="cursor-pointer hover:underline">Hombres</span>
                <span className="cursor-pointer hover:underline">Mujeres</span>
                <span className="cursor-pointer hover:underline">Colección</span>
                <span className="cursor-pointer hover:underline">Rebajas</span>
              </div>
              <ShoppingBag className="w-4 h-4" />
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white">
              
              {/* DESCRIPTION - Compact */}
              <div className="bg-neutral-100 border-b border-gray-200 p-4">
                <div className="max-w-3xl mx-auto text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1 block">Tipo de Footer</span>
                  <h1 className="text-xl font-black text-black mb-1 uppercase">{selectedFooterDef?.title}</h1>
                  <p className="text-xs text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
                    {selectedFooterDef?.description}
                  </p>
                </div>
              </div>

              {/* Hero Banner - Short */}
              <div className="relative h-32 md:h-40 bg-neutral-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale"></div>
                <div className="relative z-10 text-center text-white p-4">
                  <h2 className="text-3xl font-black mb-1 tracking-tighter italic">URBAN WALKER</h2>
                  <p className="text-xs mb-4 font-light tracking-widest">EDICIÓN LIMITADA</p>
                  <button className="bg-white text-black px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                    Ver
                  </button>
                </div>
              </div>

              {/* Product Grid - Compact Row */}
              <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-sm font-bold uppercase tracking-wide">Destacados</h3>
                  <a href="#" className="text-[10px] font-bold underline uppercase">Todo</a>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="group cursor-pointer">
                      <div className="bg-gray-100 aspect-[3/2] mb-2 relative overflow-hidden">
                         <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-black text-2xl opacity-20 transform -rotate-45">IMG</div>
                         <div className="absolute bottom-2 right-2 bg-black text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight size={12} />
                         </div>
                      </div>
                      <h4 className="font-bold text-[10px] uppercase truncate">Sneaker {item}00</h4>
                      <p className="font-mono text-[10px] mt-0.5">$129</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* The Actual Footer Component */}
            <div className="mt-auto relative z-0">
               {getComponent(activeFooter)}
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-400 text-[10px] font-mono uppercase pb-4">
             Component Preview
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
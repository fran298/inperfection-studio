import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CookieConsent } from './CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar um serviço no InPerfection Studio.";

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Laser', path: '/depilacao-laser' },
    { name: 'Unhas', path: '/unhas' },
    { name: 'Rosto & Corpo', path: '/estetica-facial' },
    { name: 'Massagens', path: '/massagens' },
    { name: 'O Estúdio', path: '/sobre' },
    { name: 'Contactos', path: '/contactos' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark bg-light selection:bg-primary selection:text-white">
      <div className="bg-dark text-white py-2 text-xs md:text-sm tracking-wider">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+351937248867" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone size={14} /> +351 937 248 867
            </a>
            <span className="hidden md:flex items-center gap-1 uppercase">
              <MapPin size={14} /> Santa Marta de Portuzelo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/studio_inperfection/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-stone-100 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-dark hover:text-primary transition-colors">
            INPERFECTION<span className="text-primary font-light"> STUDIO</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-dark transition-all"
            >
              Reservar
            </a>
          </nav>

          <button 
            className="lg:hidden p-2 text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-2xl font-serif text-dark"
              >
                {link.name}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-2xl font-serif text-primary mt-4 italic">Agendar via WhatsApp</a>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
            <div>
              <h3 className="font-serif text-xl mb-6 font-bold tracking-tight uppercase">INPERFECTION STUDIO</h3>
              <p className="text-gray-500 mb-6 leading-relaxed italic text-sm">
                "A beleza está na autenticidade. Resultados perfeitos para a sua imperfeição única."
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold mb-6 tracking-widest uppercase">Contactos</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone size={14} className="text-primary"/> +351 937 248 867
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <MapPin size={14} className="text-primary mt-1 shrink-0"/> 
                  <span>Pç da Linha do Vale do Lima 34,<br/> 4925-073 Santa Marta de Portuzelo</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold mb-6 tracking-widest uppercase">Siga-nos</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.instagram.com/studio_inperfection/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full border border-stone-200 text-dark hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-white p-3 rounded-full border border-stone-200 text-dark hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-[10px] uppercase tracking-widest text-gray-400 pt-8 border-t border-stone-200">
            &copy; {new Date().getFullYear()} InPerfection Studio. Viana do Castelo, Portugal.
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};
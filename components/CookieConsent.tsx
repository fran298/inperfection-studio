import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAction = (accepted: boolean) => {
    localStorage.setItem('cookie-consent', accepted ? 'true' : 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="container mx-auto">
        <div className="bg-white border border-secondary shadow-2xl p-6 md:flex items-center justify-between gap-8 rounded-sm">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 leading-relaxed">
              Utilizamos cookies para melhorar a sua experiência e analisar o tráfego do site. Pode aceitar todos os cookies ou configurar a sua preferência. 
              Consulte a nossa <Link to="/privacidade" className="text-primary font-bold ml-1 hover:underline">Política de Privacidade</Link>.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={() => handleAction(false)}
              className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-all"
            >
              Rejeitar
            </button>
            <button 
              onClick={() => handleAction(true)}
              className="bg-dark text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-sm"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
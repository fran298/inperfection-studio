import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = 'cookie-consent-v1';
const CONSENT_DURATION_DAYS = 180;

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }

    const parsed = JSON.parse(stored);
    const now = Date.now();

    if (now > parsed.expiresAt) {
      localStorage.removeItem(CONSENT_KEY);
      setVisible(true);
    } else {
      applyConsent(parsed.consent);
    }
  }, []);

  const saveConsent = (newConsent: ConsentState) => {
    const expiresAt =
      Date.now() + CONSENT_DURATION_DAYS * 24 * 60 * 60 * 1000;

    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ consent: newConsent, expiresAt })
    );

    applyConsent(newConsent);
    setVisible(false);
    setShowSettings(false);
  };

  const applyConsent = (c: ConsentState) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: c.analytics ? 'granted' : 'denied',
        ad_storage: c.marketing ? 'granted' : 'denied',
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-white border-t border-gray-200 shadow-2xl">
      <div className="container mx-auto max-w-5xl">
        {!showSettings ? (
          <div className="md:flex items-center justify-between gap-8">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              Utilizamos cookies para garantir o funcionamento do site,
              analisar o tráfego (Google Analytics) e melhorar as nossas
              campanhas de marketing (Google Ads). Pode aceitar, rejeitar ou
              configurar as suas preferências. Consulte a nossa
              <Link
                to="/privacidade"
                className="text-primary font-semibold ml-1 hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            <div className="flex gap-3 shrink-0">
              <button
                onClick={() =>
                  saveConsent({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                  })
                }
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark"
              >
                Rejeitar
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest border border-gray-300 hover:border-dark"
              >
                Configurar
              </button>

              <button
                onClick={() =>
                  saveConsent({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="bg-dark text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary"
              >
                Aceitar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-bold mb-4">
              Preferências de Cookies
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <label className="flex items-center justify-between">
                <span>Cookies Necessários</span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="accent-dark"
                />
              </label>

              <label className="flex items-center justify-between">
                <span>Cookies Analíticos (Google Analytics)</span>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent({
                      ...consent,
                      analytics: e.target.checked,
                    })
                  }
                  className="accent-dark"
                />
              </label>

              <label className="flex items-center justify-between">
                <span>Cookies de Marketing (Google Ads)</span>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) =>
                    setConsent({
                      ...consent,
                      marketing: e.target.checked,
                    })
                  }
                  className="accent-dark"
                />
              </label>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => saveConsent(consent)}
                className="bg-dark text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary"
              >
                Guardar Preferências
              </button>

              <button
                onClick={() => setShowSettings(false)}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark"
              >
                Voltar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
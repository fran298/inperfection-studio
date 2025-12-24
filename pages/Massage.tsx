import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Massage: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar uma massagem no InPerfection Studio.";

  const massages = [
    { name: "Massagem Cranio-Facial", price: "22€" },
    { name: "Massagem Super relaxante", price: "40€" },
    { name: "Terapêutica / Desportiva", price: "30€" },
    { name: "Modeladora / Anticelulítica", price: "35€" },
    { name: "Massagem Infantil", price: "25€" },
    { name: "Massagem com ventosas", price: "35€" },
    { name: "Reflexologia podal", price: "40€" },
    { name: "Drenagem Linfática", price: "35€ / 65€" },
    { name: "Massagem com velas quentes", price: "45€" },
    { name: "Massagem Turbinada", price: "30€" },
    { name: "Massagem com aromaterapia", price: "35€" },
  ];

  const packs = [
    { title: "Pack 4 Terapêuticas", price: "100€" },
    { title: "Pack 4 Anticelulíticas / Modeladoras", price: "110€" },
    { title: "Pack 4 Relaxamentos", price: "140€" },
  ];

  return (
    <Layout>
      <SEO title="Massagens e Bem-Estar | InPerfection Studio" description="Massagens terapêuticas, relaxantes e drenagem linfática em Santa Marta de Portuzelo, Viana do Castelo." />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl mb-4 italic font-light">Massagens</h1>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">Equilíbrio Corporal e Mental</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Price Table */}
            <div className="bg-secondary/10 p-8 md:p-12 border border-primary/20 rounded-sm">
              <h2 className="font-serif text-3xl mb-10 text-dark uppercase tracking-tighter italic">Tabela de Preços</h2>
              <div className="space-y-4">
                {massages.map((m, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-primary/10 pb-2 group">
                    <span className="text-sm font-bold uppercase tracking-tighter text-gray-700 group-hover:text-primary transition-colors">{m.name}</span>
                    <span className="font-serif text-xl text-primary">{m.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest italic text-center">
                * Necessário agendamento prévio.
              </p>
            </div>

            {/* Packs & Official Image */}
            <div className="space-y-8">
              <div className="relative aspect-video overflow-hidden rounded-sm shadow-xl mb-12">
                <img 
                  src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578810/43840ce0cdc463d46ed154e99cce376d_ba7tk8.jpg" 
                  alt="Tratamento de Massagem Relaxante" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-dark text-white p-10 rounded-sm">
                <h3 className="font-serif text-3xl mb-8 italic text-primary">Packs Promocionais</h3>
                <div className="space-y-6 mb-10">
                  {packs.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-xs font-bold uppercase tracking-widest">{p.title}</span>
                      <span className="font-serif text-2xl text-primary">{p.price}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary text-white w-full py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all inline-block text-center shadow-lg"
                >
                  Agendar Pack via WhatsApp
                </a>
              </div>
              
              <div className="text-center p-6 border border-stone-100 italic text-gray-400 text-sm">
                "Temos preços promocionais para mais de um serviço e múltiplas sessões. Consulte-nos."
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Massage;
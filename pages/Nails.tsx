import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Nails: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar um serviço de Nails Design.";

  const services = [
    { name: "Verniz de gel", price: "13€" },
    { name: "Express gel", price: "15€" },
    { name: "Gel (Unha Natural)", price: "25€" },
    { name: "Aplicação c/ Moldes", price: "25€ - 35€" },
    { name: "Fibra", price: "17€" },
    { name: "Manutenção de gel", price: "20€" },
    { name: "Pedicure completa", price: "15€" },
    { name: "Verniz de gel pés", price: "10€" },
  ];

  return (
    <Layout>
      <SEO title="Unhas e Manicure | InPerfection Studio" description="Especialistas em Nail Art e Manicure em Santa Marta de Portuzelo. Verniz de gel e Manutenção." />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-5xl md:text-7xl mb-4 italic font-light">Manicure</h1>
            <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Arte e Precisão no Detalhe</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-secondary/20 p-8 md:p-12 shadow-sm border border-primary/20">
                  <h3 className="font-serif text-3xl mb-8 italic">Preçário Oficial</h3>
                  <div className="space-y-5">
                    {services.map((s, idx) => (
                      <div key={idx} className="flex justify-between items-end border-b border-dark/5 pb-2">
                        <span className="font-bold text-xs uppercase tracking-tighter text-gray-700">{s.name}</span>
                        <span className="font-serif text-xl text-primary">{s.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-full py-4 text-xs font-bold uppercase tracking-widest hover:bg-dark transition-all inline-block text-center">Reservar via WhatsApp</a>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                 <img 
                  src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578591/nai_dd6hsw.jpg" 
                  alt="Nail Design Oficial" 
                  className="rounded-sm shadow-2xl transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nails;
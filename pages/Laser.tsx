import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Laser: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar uma sessão de Depilação a Laser Diodo.";

  const homem = [
    { area: "Barba", price: "25€" },
    { area: "Mãos", price: "12€" },
    { area: "Axila", price: "20€" },
    { area: "Peito", price: "20€" },
    { area: "Abdómen", price: "20€" },
    { area: "Costas", price: "30€" },
    { area: "Perna Completa", price: "40€" },
    { area: "Braços", price: "35€" },
  ];

  const mulher = [
    { area: "Rosto", price: "20€" },
    { area: "Buço", price: "10€" },
    { area: "Axila", price: "20€" },
    { area: "Braços", price: "30€" },
    { area: "Virilha", price: "25€" },
    { area: "Meia Perna", price: "30€" },
    { area: "Perna Completa", price: "35€" },
  ];

  return (
    <Layout>
      <SEO title="Laser Diodo Preços | InPerfection Studio" description="Tabela de preços oficial de depilação a laser diodo em Santa Marta de Portuzelo, Viana do Castelo." />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-7xl mb-4">Laser <span className="italic font-light">Díodo</span></h1>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">Tecnologia Certificada de Alta Eficácia</p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 rounded-sm overflow-hidden shadow-xl aspect-video">
            <img 
              src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578499/depilacion_laser_li7cqw.jpg" 
              alt="Equipamento Laser Profissional" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Homem */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-secondary border-t-4 border-t-dark">
              <h2 className="font-serif text-3xl mb-10 italic">Homem</h2>
              <div className="space-y-4">
                {homem.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-sm font-bold uppercase tracking-tighter text-gray-700">{item.area}</span>
                    <span className="font-serif text-xl text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mulher */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-secondary border-t-4 border-t-primary">
              <h2 className="font-serif text-3xl mb-10 italic">Mulher</h2>
              <div className="space-y-4">
                {mulher.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-sm font-bold uppercase tracking-tighter text-gray-700">{item.area}</span>
                    <span className="font-serif text-xl text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packs */}
          <div className="max-w-4xl mx-auto bg-primary/5 p-12 text-center border border-primary/20 rounded-sm shadow-inner">
            <h2 className="font-serif text-3xl mb-12 italic">Packs de Lançamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-6 bg-white shadow-sm">
                <h3 className="font-bold text-xs uppercase tracking-widest text-primary mb-4">Pack Homem</h3>
                <p className="text-xs text-gray-500 mb-6 italic">(Axila + Peito + Abdómen + Costas + Perna Completa)</p>
                <span className="font-serif text-4xl text-dark">70€</span>
              </div>
              <div className="p-6 bg-white shadow-sm">
                <h3 className="font-bold text-xs uppercase tracking-widest text-primary mb-4">Pack Mulher</h3>
                <p className="text-xs text-gray-500 mb-6 italic">(Buço + Axilas + Virilha + Perna Completa)</p>
                <span className="font-serif text-4xl text-dark">50€</span>
              </div>
            </div>
            <div className="mt-12">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-dark transition-all inline-block">Reservar Sessão</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Laser;
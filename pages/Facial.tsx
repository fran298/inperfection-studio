import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Facial: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar um tratamento facial/corporal.";

  const treatments = [
    { 
      name: "Limpeza de Pele", 
      desc: "Remove impurezas e controla oleosidade. Inclui extrações e máscara.",
      duration: "01h30",
      price: "35€",
      pack: "Pack 2x: 65€"
    },
    { 
      name: "Limpeza de Pele + Fototerapia", 
      desc: "Ideal para acne, manchas e pele sensibilizada.",
      duration: "01h30",
      price: "45€",
      pack: "Pack 3x: 115€"
    },
    { 
      name: "Peelings", 
      desc: "Renovação celular para rugas, manchas e acne.",
      duration: "01h30",
      price: "50€",
      pack: "Pack 3x: 130€"
    },
    { 
      name: "Radiofrequência Facial", 
      desc: "Efeito lifting natural. Estimula colagénio e elastina.",
      duration: "01h30",
      price: "35€",
      pack: "Pack 2x: 65€"
    },
    { 
      name: "Microagulhamento", 
      desc: "Estimula colagénio profundo. Suaviza rugas e cicatrizes.",
      duration: "01h30",
      price: "60€",
      pack: "Pack 3x: 165€"
    },
    { 
      name: "Anti-Rugas Eberlin Maxx", 
      desc: "Limpeza profunda + Fototerapia LED + Máscara Maxx.",
      duration: "01h30",
      price: "40€",
      pack: "Pack 3x: 99€"
    },
    { 
      name: "Lifting Eberlin Lift", 
      desc: "Redefine o contorno facial e aumenta elasticidade.",
      duration: "01h30",
      price: "40€",
      pack: "Pack 3x: 99€"
    },
    { 
      name: "Radiofrequência + Cavitação", 
      desc: "Tratamento Corporal. Gordura localizada e flacidez.",
      duration: "01h",
      price: "45€",
      pack: "Pack 3x: 120€"
    },
  ];

  return (
    <Layout>
      <SEO title="Rosto & Corpo | InPerfection Studio" description="Tratamentos avançados Eberlin e tecnologia de radiofrequência em Viana do Castelo." />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-7xl mb-4 italic font-light">Estética <span className="font-light not-italic">Avançada</span></h1>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">Protocolos Biocosméticos Eberlin</p>
          </div>

          <div className="max-w-4xl mx-auto mb-20 rounded-sm overflow-hidden shadow-xl aspect-video">
            <img 
              src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578766/clean_jtiv6b.jpg" 
              alt="Limpeza de Pele e Hidratação" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {treatments.map((t, idx) => (
              <div key={idx} className="bg-white p-8 border border-secondary shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl uppercase tracking-tighter text-dark">{t.name}</h3>
                  <span className="font-serif text-2xl text-primary">{t.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6 font-light leading-relaxed">{t.desc}</p>
                <div className="flex justify-between items-center pt-4 border-t border-primary/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 italic">Duração: {t.duration}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{t.pack}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-dark text-white p-12 text-center rounded-sm">
             <h2 className="font-serif text-3xl mb-8 uppercase tracking-widest italic text-primary">Threading <span className="font-light not-italic text-white">(Linha)</span></h2>
             <div className="space-y-4 mb-10">
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-xs uppercase font-bold tracking-widest">Sobrancelhas</span>
                 <span className="font-serif text-xl">7,00€</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-xs uppercase font-bold tracking-widest">Buço</span>
                 <span className="font-serif text-xl">5,00€</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-xs uppercase font-bold tracking-widest text-primary">Sobrancelhas & Buço</span>
                 <span className="font-serif text-xl text-primary">10,00€</span>
               </div>
             </div>
             <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-4 px-12 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all inline-block shadow-lg">Marcar via WhatsApp</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facial;
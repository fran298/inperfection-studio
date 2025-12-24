import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="O Estúdio | InPerfection Studio"
        description="Conheça o InPerfection Studio em Viana do Castelo. Onde a beleza e a autenticidade se encontram através de tratamentos de excelência."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-[10px] mb-4 block text-primary font-bold">A Nossa Essência</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-dark italic font-light">InPerfection Studio</h1>
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Localizado em Viana do Castelo, o nosso estúdio foi criado para quebrar os padrões de perfeição inatingíveis. Acreditamos que a beleza reside na autenticidade de cada pessoa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="rounded-sm overflow-hidden shadow-md h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200" 
                alt="Interior Estúdio Minimalista" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="bg-secondary/20 p-12 flex flex-col justify-center rounded-sm border border-primary/10">
              <h3 className="font-serif text-3xl mb-6 text-dark italic">A Nossa Filosofia</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Não procuramos apenas resultados estéticos; procuramos elevar a confiança dos nossos clientes. Cada tratamento é uma experiência sensorial desenhada para relaxar e transformar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                  <span className="font-serif text-2xl text-primary">01</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Excelência Técnica</span>
                </div>
                <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
                  <span className="font-serif text-2xl text-primary">02</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Atendimento Humanizado</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-primary">03</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Inovação Estética</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
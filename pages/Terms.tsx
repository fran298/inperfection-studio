import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <Layout>
      <SEO title="Termos de Utilização | InPerfection Studio" description="Condições de utilização do nosso website e serviços." />
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-4xl mb-12 uppercase tracking-tighter">Termos de Utilização</h1>
          <div className="prose prose-stone max-w-none text-gray-600 space-y-6">
            <p>Bem-vindo ao website do InPerfection Studio. Ao utilizar este site, concorda com os seguintes termos.</p>
            <h2 className="text-xl font-bold text-dark uppercase mt-8">1. Reservas e Cancelamentos</h2>
            <p>As marcações devem ser feitas com antecedência. Pedimos que cancelamentos sejam comunicados com pelo menos 24h de antecedência.</p>
            <h2 className="text-xl font-bold text-dark uppercase mt-8">2. Preçário</h2>
            <p>Os preços apresentados são indicativos e podem ser alterados sem aviso prévio. O valor final será confirmado após avaliação técnica.</p>
            <h2 className="text-xl font-bold text-dark uppercase mt-8">3. Propriedade Intelectual</h2>
            <p>Todo o conteúdo deste site (textos, imagens e logotipo) é propriedade do InPerfection Studio.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
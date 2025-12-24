import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <SEO title="Política de Privacidade | InPerfection Studio" description="Saiba como tratamos os seus dados pessoais." />
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-4xl mb-12 uppercase tracking-tighter">Política de Privacidade</h1>
          <div className="prose prose-stone max-w-none text-gray-600 space-y-6">
            <p>No InPerfection Studio, a sua privacidade é uma prioridade. Esta política descreve como recolhemos e tratamos os seus dados.</p>
            <h2 className="text-xl font-bold text-dark uppercase mt-8">1. Recolha de Dados</h2>
            <p>Recolhemos dados através do formulário de contacto, como nome, telemóvel e email, estritamente para agendamento de serviços.</p>
            <h2 className="text-xl font-bold text-dark uppercase mt-8">2. Utilização de Dados</h2>
            <p>Os seus dados nunca serão partilhados com terceiros. São utilizados apenas para comunicação direta entre o estúdio e o cliente.</p>
            <h2 className="text-xl font-bold text-dark uppercase mt-8">3. Cookies</h2>
            <p>Este site utiliza cookies para melhorar a experiência do utilizador e estatísticas de tráfego anónimas.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
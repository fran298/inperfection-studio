import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Phone, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar um serviço no InPerfection Studio.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "InPerfection Studio",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pç da Linha do Vale do Lima 34",
      "addressLocality": "Santa Marta de Portuzelo",
      "postalCode": "4925-073",
      "addressCountry": "PT"
    },
    "telephone": "+351937248867",
    "url": "https://www.instagram.com/studio_inperfection/"
  };

  return (
    <Layout>
      <SEO 
        title="Contactos e Reservas | InPerfection Studio"
        description="Agende a sua visita ao InPerfection Studio em Viana do Castelo. Contacte-nos via WhatsApp ou visite o nosso espaço."
        schema={schema}
      />

      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-dark italic font-light">Contactos</h1>
            <p className="text-gray-500 font-light">Estamos à sua espera em Santa Marta de Portuzelo para um momento de puro cuidado.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 shadow-sm border border-secondary rounded-sm">
              <h2 className="font-serif text-2xl mb-10 text-dark uppercase tracking-tighter">O Estúdio</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin size={24} /></div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Localização</h3>
                    <p className="text-gray-600 text-sm">Pç da Linha do Vale do Lima 34,<br/>4925-073 Santa Marta de Portuzelo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary"><Instagram size={24} /></div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Redes Sociais</h3>
                    <a href="https://www.instagram.com/studio_inperfection/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">@studio_inperfection</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary"><Clock size={24} /></div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Horário</h3>
                    <p className="text-gray-600 text-sm italic">Segunda a Sábado: 09:00 — 19:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark text-white p-10 shadow-sm rounded-sm flex flex-col justify-center text-center">
              <MessageCircle size={48} className="mx-auto mb-6 text-primary" />
              <h2 className="font-serif text-3xl mb-4">Reserva Instantânea</h2>
              <p className="text-gray-400 mb-8 font-light">O nosso método mais rápido de agendamento é através do WhatsApp.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-4 px-8 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all shadow-lg">Enviar Mensagem Agora</a>
              <p className="mt-6 text-sm text-gray-400">+351 937 248 867</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/351937248867?text=Olá! Gostaria de agendar um serviço no InPerfection Studio.";

  const scrollToServices = () => {
    const element = document.getElementById('servicos-assinatura');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <SEO 
        title="Estética de Luxo em Viana do Castelo"
        description="InPerfection Studio em Santa Marta de Portuzelo. Especialistas em Laser Diodo, Unhas de Gel, Estética Facial e Massagens Terapêuticas."
      />

      {/* Hero Section - Elegant & Visual (No faces) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12">
          <div className="lg:col-span-7 animate-fade-in-up">
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block text-primary font-bold">Santa Marta de Portuzelo</span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] text-dark">
              Beleza <br/>
              <span className="italic font-light text-primary/80">Autêntica</span>
            </h1>
            <p className="text-base md:text-xl mb-12 text-gray-500 font-light max-w-xl leading-relaxed">
              Onde a tecnologia de ponta encontra o cuidado humano. Resultados de excelência desenhados para a sua individualidade em Viana do Castelo.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-dark text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl text-center"
              >
                Agendar Agora
              </a>
              <button 
                onClick={scrollToServices} 
                className="border border-stone-200 text-dark px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-stone-50 transition-all text-center"
              >
                Descobrir Serviços
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-t-full shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766579089/67dee7d63d456f38d93f1c320a14ce07_im9hif.jpg" 
                alt="Ambiente Estúdio Luxo" 
                className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-secondary/30 -z-0"></div>
      </section>

      {/* Trust Markers */}
      <section className="py-16 border-y border-stone-100 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-primary mb-4" size={32} />
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Tecnologia Certificada</h3>
              <p className="text-xs text-gray-400">Laser Diodo de Alta Potência</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="text-primary mb-4" size={32} />
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Protocolos Eberlin</h3>
              <p className="text-xs text-gray-400">Biocosmética Avançada</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="text-primary mb-4" size={32} />
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Cuidado Humano</h3>
              <p className="text-xs text-gray-400">Atendimento Personalizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services Grid with OFFICIAL CLOUDINARY IMAGES */}
      <section id="servicos-assinatura" className="py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl text-dark leading-tight mb-6">Serviços de <br/><span className="italic font-light text-primary">Assinatura</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Laser - Official Image */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-8 relative rounded-sm shadow-md">
                <img 
                  src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578499/depilacion_laser_li7cqw.jpg" 
                  alt="Depilação Laser Diodo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="font-serif text-2xl mb-2 uppercase tracking-tighter">Depilação Laser</h3>
              <Link to="/depilacao-laser" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
                Preçário <ArrowRight size={12}/>
              </Link>
            </div>

            {/* Nails - Official Image */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-8 relative rounded-sm shadow-md">
                <img 
                  src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578591/nai_dd6hsw.jpg" 
                  alt="Nail Design Art" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="font-serif text-2xl mb-2 uppercase tracking-tighter">Nails Design</h3>
              <Link to="/unhas" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
                Descobrir <ArrowRight size={12}/>
              </Link>
            </div>

            {/* Aesthetics - Official Image */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-8 relative rounded-sm shadow-md">
                <img 
                  src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578766/clean_jtiv6b.jpg" 
                  alt="Estética Facial Eberlin" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="font-serif text-2xl mb-2 uppercase tracking-tighter">Rosto & Corpo</h3>
              <Link to="/estetica-facial" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
                Tratamentos <ArrowRight size={12}/>
              </Link>
            </div>

            {/* Massages - Official Image */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-8 relative rounded-sm shadow-md">
                <img 
                  src="https://res.cloudinary.com/dmvlubzor/image/upload/v1766578810/43840ce0cdc463d46ed154e99cce376d_ba7tk8.jpg" 
                  alt="Massagem e Relaxamento" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="font-serif text-2xl mb-2 uppercase tracking-tighter">Massagens</h3>
              <Link to="/massagens" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
                Ver Menu <ArrowRight size={12}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - High Impact */}
      <section className="py-24 bg-dark text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-tight">Agende a sua experiência <br/><span className="italic font-light text-primary">InPerfection</span></h2>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all shadow-2xl inline-block"
            >
              Contactar via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
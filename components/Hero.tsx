import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
          alt="Projet d'ingénierie en construction"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/20 border border-accent-400/40 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-accent-100 uppercase tracking-wider">
              Excellence Technique en Tunisie
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Maîtrise Complète de vos Projets<br />
            <span className="text-accent-400">Étude • Pilotage • Exécution</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            De la conception technique à la livraison clés en main, Arc Ingénierie & Infrastructure assure l'excellence à chaque étape. Spécialistes du gros œuvre et second œuvre, nous transformons vos ambitions en réalités solides.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/21612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-accent-900/30"
            >
              <MessageCircle size={22} />
              Contactez-nous sur WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all"
            >
              Découvrir nos Services
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {[
              "Projets Publics & Privés",
              "Équipe Qualifiée",
              "Éthique Professionnelle"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-400 shrink-0" size={22} />
                <span className="font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geometric Arc Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
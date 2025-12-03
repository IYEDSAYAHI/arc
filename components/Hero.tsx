import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Chantier de construction"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium text-brand-100 uppercase tracking-wide">
              Leader en Île-de-France
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            L'Expertise <span className="text-brand-400">Génie Civil</span> <br />
            au Service de Vos Projets
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            De la conception à la réalisation, nous bâtissons l'avenir avec précision, durabilité et innovation. Votre partenaire de confiance pour tous travaux de bâtiment et travaux publics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-900/20"
            >
              Démarrer un Projet
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all"
            >
              Nos Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {[
              "Certifié Qualibat",
              "Garantie Décennale",
              "Devis sous 48h"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-400 shrink-0" size={20} />
                <span className="font-medium text-gray-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
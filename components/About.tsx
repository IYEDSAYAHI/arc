import React from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-100 rounded-br-3xl -z-10"></div>
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Équipe sur chantier" 
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-brand-600 mb-1">15+</p>
              <p className="text-gray-800 font-medium">Années d'expérience au service du bâtiment</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Pourquoi Nous Choisir</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              L'Excellence Technique au Cœur de Notre Engagement
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Chez Génie Civil Bâtiment, nous ne construisons pas seulement des murs, nous bâtissons des relations de confiance. Notre approche rigoureuse et notre souci du détail nous permettent de mener à bien les projets les plus complexes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Award className="text-brand-600" />, title: "Qualité Certifiée", text: "Matériaux premium et normes respectées." },
                { icon: <Users className="text-brand-600" />, title: "Équipe Experte", text: "Ingénieurs et artisans qualifiés." },
                { icon: <Clock className="text-brand-600" />, title: "Délais Respectés", text: "Planification rigoureuse des chantiers." },
                { icon: <ShieldCheck className="text-brand-600" />, title: "Sécurité Maximale", text: "Protocoles stricts sur tous nos sites." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Award, Users, Clock, ShieldCheck, Heart, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-tl-[3rem] -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-100 rounded-br-[3rem] -z-10"></div>
            <img
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Équipe Arc Ingénierie sur site"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block border-l-4 border-accent-500">
              <p className="text-5xl font-bold text-brand-700 mb-1">10+</p>
              <p className="text-gray-800 font-semibold">Années d'expérience technique en Tunisie</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">À Propos de Nous</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mt-3 mb-6 leading-tight">
              Excellence Technique & Éthique Professionnelle
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              <strong>Arc Ingénierie & Infrastructure</strong> est une société tunisienne spécialisée dans la conception, le pilotage et la réalisation de projets de construction. Nous intervenons sur des projets <strong>administratifs, industriels, publics et d'habitation</strong>, avec un engagement sans faille envers la qualité et l'intégrité.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Notre philosophie repose sur des valeurs solides : <strong className="text-brand-700">l'honnêteté dans le travail est un acte d'adoration</strong>. Nous croyons fermement que l'excellence technique doit s'accompagner d'une éthique irréprochable, de la transparence avec nos clients et du respect de nos engagements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Target className="text-brand-600" size={24} />, title: "Maîtrise Technique", text: "Ingénieurs qualifiés et équipes expérimentées." },
                { icon: <Heart className="text-accent-600" size={24} />, title: "Éthique & Intégrité", text: "Honnêteté et transparence dans chaque projet." },
                { icon: <Clock className="text-brand-600" size={24} />, title: "Respect des Délais", text: "Planification rigoureuse et suivi strict." },
                { icon: <ShieldCheck className="text-accent-600" size={24} />, title: "Fiabilité Totale", text: "Engagement et responsabilité garantis." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl p-10 md:p-16 text-white text-center shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Notre Mission</h3>
          <p className="text-lg md:text-xl text-brand-100 max-w-4xl mx-auto leading-relaxed">
            Être le partenaire de confiance pour vos projets de construction en Tunisie, en alliant expertise technique, rigueur dans l'exécution et éthique professionnelle. Nous nous engageons à livrer des ouvrages durables, conformes aux normes, et réalisés dans le respect de nos valeurs.
          </p>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Compass, Facebook, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-600 p-2.5 rounded-lg">
                <Compass size={28} strokeWidth={2.5} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">Arc Ingénierie</span>
                <span className="text-xs font-semibold text-accent-400 tracking-widest uppercase">& Infrastructure</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Société tunisienne spécialisée en ingénierie et construction. Excellence technique et éthique professionnelle au service de vos projets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-600 transition-colors text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-600 transition-colors text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-600 transition-colors text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@arc-ingenierie.tn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-600 transition-colors text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'Services', href: '#services' },
                { name: 'Méthodologie', href: '#methodologie' },
                { name: 'Réalisations', href: '#realisations' },
                { name: 'À Propos', href: '#apropos' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-accent-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Nos Domaines</h4>
            <ul className="space-y-4">
              {['Étude & Conception', 'Pilotage de Chantier', 'Gros Œuvre', 'Second Œuvre', 'Projets Publics', 'Secteur Industriel'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-accent-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Info Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Horaires</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="font-medium text-white">8h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="font-medium text-white">9h - 13h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-accent-500 font-medium">Fermé</span>
              </li>
            </ul>
            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
              >
                Retour en haut <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Arc Ingénierie & Infrastructure. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
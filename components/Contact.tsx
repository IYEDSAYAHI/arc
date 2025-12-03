import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-brand-300 font-semibold tracking-wider uppercase text-sm">Contactez-nous</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Parlons de Votre Projet
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-md">
              Vous avez un projet en tête ? Notre équipe est là pour répondre à vos questions et vous fournir un devis détaillé.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="bg-brand-600 p-3 rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Téléphone</h3>
                  <p className="text-brand-200 mt-1">Lundi - Vendredi, 8h - 18h</p>
                  <a href="tel:+33123456789" className="text-white hover:text-brand-300 font-bold text-xl block mt-1 transition-colors">
                    01 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="bg-brand-600 p-3 rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-brand-200 mt-1">Réponse sous 24h</p>
                  <a href="mailto:contact@gc-batiment.fr" className="text-white hover:text-brand-300 font-bold text-xl block mt-1 transition-colors">
                    contact@gc-batiment.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="bg-brand-600 p-3 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Siège Social</h3>
                  <p className="text-brand-200 mt-1 text-lg">
                    12 Avenue de la Construction<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="06 12 34 56 78" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="jean@exemple.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Décrivez votre projet..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <span>Envoyer ma demande</span>
                <Send size={18} />
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
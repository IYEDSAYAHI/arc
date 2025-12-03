import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-accent-300 font-bold tracking-wider uppercase text-sm">Contactez-nous</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Démarrons Votre Projet Ensemble
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-md leading-relaxed">
              Vous avez un projet de construction ou d'ingénierie ? Notre équipe d'experts est prête à vous accompagner de A à Z.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/21612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-xl bg-accent-600 hover:bg-accent-700 transition-all border-2 border-accent-500 shadow-lg hover:shadow-2xl group"
              >
                <div className="bg-white p-3 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} className="text-accent-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">WhatsApp - Contact Rapide</h3>
                  <p className="text-accent-100 mt-1">Réponse immédiate</p>
                  <p className="text-white font-bold text-xl mt-1">+216 XX XXX XXX</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="bg-brand-600 p-3 rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Téléphone</h3>
                  <p className="text-brand-200 mt-1">Lundi - Samedi, 8h - 18h</p>
                  <a href="tel:+21671234567" className="text-white hover:text-accent-300 font-bold text-xl block mt-1 transition-colors">
                    +216 71 234 567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="bg-brand-600 p-3 rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-brand-200 mt-1">Réponse sous 24h</p>
                  <a href="mailto:contact@arc-ingenierie.tn" className="text-white hover:text-accent-300 font-bold text-xl block mt-1 transition-colors">
                    contact@arc-ingenierie.tn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="bg-brand-600 p-3 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Siège Social</h3>
                  <p className="text-brand-200 mt-1 text-lg leading-relaxed">
                    Avenue Habib Bourguiba<br />
                    Tunis 1000, Tunisie
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="flex items-center gap-3 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
              >
                <Download size={24} className="text-accent-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">Télécharger notre Profil</p>
                  <p className="text-sm text-brand-200">Présentation complète (PDF)</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-gray-900">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-brand-900">Demandez un Devis Gratuit</h3>
            <p className="text-gray-600 mb-8">Remplissez ce formulaire et recevez une estimation détaillée sous 48h.</p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nom complet *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="Mohamed Ben Salah" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Téléphone *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="+216 XX XXX XXX" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email *</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="mohamed@exemple.tn" />
              </div>

              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-semibold text-gray-700">Type de projet *</label>
                <select id="project-type" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all">
                  <option value="">Sélectionnez...</option>
                  <option value="administratif">Administratif</option>
                  <option value="industriel">Industriel</option>
                  <option value="public">Public</option>
                  <option value="habitation">Habitation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Description du projet *</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="Décrivez votre projet en détail..."></textarea>
              </div>

              <button type="submit" className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg">
                <span>Envoyer ma Demande</span>
                <Send size={20} />
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité et d'être contacté par notre équipe.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
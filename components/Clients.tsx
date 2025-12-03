import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Mohamed Ben Salah",
    role: "Directeur Général",
    company: "STE Industrielle",
    content: "Arc Ingénierie a su respecter tous nos délais malgré la complexité du projet. Leur professionnalisme et leur rigueur technique sont remarquables.",
    rating: 5
  },
  {
    name: "Leila Trabelsi",
    role: "Responsable Projets",
    company: "Ministère de l'Éducation",
    content: "Une équipe compétente et fiable. La qualité des travaux et le suivi rigoureux nous ont pleinement satisfaits. Je recommande vivement.",
    rating: 5
  },
  {
    name: "Karim Ayari",
    role: "Promoteur Immobilier",
    company: "Résidence Les Jardins",
    content: "Transparence, honnêteté et excellence technique. Arc Ingénierie a livré un ouvrage conforme à nos attentes avec une éthique professionnelle exemplaire.",
    rating: 5
  }
];

export const Clients: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Témoignages Clients</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mt-4 mb-6 leading-tight">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La satisfaction de nos clients est notre meilleure récompense. Découvrez leurs retours d'expérience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 text-accent-200">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-brand-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm font-semibold text-accent-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-900 mb-10">Nos Partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Ministère de l'Équipement",
              "BNA - Banque Nationale Agricole",
              "Groupe Industriel Tunisien",
              "Office National du Logement"
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center justify-center min-h-[120px]"
              >
                <p className="text-center font-semibold text-gray-700 text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

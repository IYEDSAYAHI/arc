import React from 'react';
import { Truck, Hammer, Ruler, Zap, Droplets, Home } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Truck size={28} />,
      title: "Terrassement",
      description: "Préparation de terrain, nivellement, excavation et évacuation des terres pour des fondations solides et durables."
    },
    {
      icon: <Hammer size={28} />,
      title: "Gros Œuvre",
      description: "Construction de structures, maçonnerie générale, béton armé et élévation de murs porteurs."
    },
    {
      icon: <Ruler size={28} />,
      title: "Charpente & Toiture",
      description: "Conception et pose de charpentes traditionnelles ou industrielles, couverture et étanchéité."
    },
    {
      icon: <Droplets size={28} />,
      title: "Plomberie & Sanitaire",
      description: "Installation complète de réseaux d'eau, raccordements, pose d'équipements sanitaires et dépannage."
    },
    {
      icon: <Zap size={28} />,
      title: "Électricité Générale",
      description: "Installations électriques aux normes, domotique, éclairage et mise en sécurité de vos bâtiments."
    },
    {
      icon: <Home size={28} />,
      title: "Rénovation",
      description: "Réhabilitation complète ou partielle de bâtiments existants, aménagements intérieurs et extérieurs."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Notre Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Des Solutions Complètes pour <br className="hidden md:block" />
            Tous Vos Projets de Construction
          </h2>
          <p className="text-lg text-gray-600">
            Nous intervenons sur l'ensemble des corps d'état pour garantir la cohérence et la qualité de vos ouvrages, du sol au plafond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
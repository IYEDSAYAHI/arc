import React from 'react';
import { FileText, Shield, Layers, Wrench } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  accentColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, details, accentColor }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-accent-100 transition-all duration-300 group h-full flex flex-col">
    <div className={`w-16 h-16 ${accentColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-brand-900 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <ul className="space-y-2">
      {details.map((detail, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
          <span className="text-accent-500 font-bold mt-0.5">•</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText size={32} strokeWidth={2} />,
      title: "Étude",
      description: "Conception technique rigoureuse et études d'exécution complètes pour garantir la faisabilité et l'optimisation de votre projet.",
      details: [
        "Études de faisabilité technique",
        "Plans d'exécution détaillés",
        "Calculs de structures",
        "Métrés et devis estimatifs",
        "Dossiers d'appels d'offres"
      ],
      accentColor: "bg-brand-600"
    },
    {
      icon: <Shield size={32} strokeWidth={2} />,
      title: "Pilotage",
      description: "Maîtrise d'œuvre et coordination complète pour assurer le respect des délais, budgets et normes de qualité.",
      details: [
        "Gestion de projet intégrée",
        "Coordination des corps d'état",
        "Suivi de chantier hebdomadaire",
        "Contrôle qualité continu",
        "Reporting et documentation"
      ],
      accentColor: "bg-accent-600"
    },
    {
      icon: <Layers size={32} strokeWidth={2} />,
      title: "Gros Œuvre",
      description: "Réalisation des éléments structurels porteurs avec expertise technique et rigueur dans l'exécution.",
      details: [
        "Terrassement et fondations",
        "Structures béton armé",
        "Maçonnerie de blocs et briques",
        "Élévation et chainages",
        "Planchers et dalles"
      ],
      accentColor: "bg-concrete-600"
    },
    {
      icon: <Wrench size={32} strokeWidth={2} />,
      title: "Second Œuvre",
      description: "Finitions et installations techniques pour transformer la structure en espace fonctionnel et habitable.",
      details: [
        "Plomberie et sanitaire",
        "Électricité et éclairage",
        "Menuiserie et huisserie",
        "Revêtements sols et murs",
        "Peinture et finitions"
      ],
      accentColor: "bg-brand-500"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Nos Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mt-4 mb-6 leading-tight">
            Une Approche Complète<br className="hidden md:block" />
            De A à Z
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous couvrons l'intégralité du cycle de vie de votre projet, de la première ligne de calcul à la remise des clés. Notre engagement : excellence technique et éthique professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
              accentColor={service.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
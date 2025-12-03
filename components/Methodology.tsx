import React from 'react';
import { Lightbulb, Clipboard, Cog, CheckCheck, Key } from 'lucide-react';

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, isLast }) => (
  <div className="relative flex flex-col md:flex-row gap-6 group">
    <div className="flex flex-col items-center md:items-start">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 z-10 relative">
          {icon}
        </div>
        <div className="absolute top-0 left-0 w-20 h-20 bg-accent-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
      </div>
      {!isLast && (
        <div className="hidden md:block w-1 flex-grow bg-gradient-to-b from-accent-300 to-transparent mt-4 ml-10"></div>
      )}
    </div>

    <div className="flex-grow pb-12 md:pb-16">
      <div className="inline-block bg-brand-100 text-brand-700 font-bold text-sm px-3 py-1 rounded-full mb-3">
        Étape {number}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Methodology: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Lightbulb size={32} strokeWidth={2.5} />,
      title: "Analyse & Étude",
      description: "Nous commençons par une analyse approfondie de vos besoins. Nos ingénieurs réalisent les études de faisabilité, les calculs de structures et élaborent les plans d'exécution détaillés conformes aux normes."
    },
    {
      number: "02",
      icon: <Clipboard size={32} strokeWidth={2.5} />,
      title: "Planification & Devis",
      description: "Établissement d'un planning détaillé, métrés précis et devis transparents. Nous définissons les ressources nécessaires et établissons un calendrier réaliste pour votre projet."
    },
    {
      number: "03",
      icon: <Cog size={32} strokeWidth={2.5} />,
      title: "Exécution & Pilotage",
      description: "Lancement des travaux avec coordination rigoureuse de tous les corps d'état. Suivi de chantier hebdomadaire, contrôle qualité continu et reporting régulier pour assurer le respect des délais et du budget."
    },
    {
      number: "04",
      icon: <CheckCheck size={32} strokeWidth={2.5} />,
      title: "Contrôle Qualité",
      description: "Inspections systématiques à chaque phase, vérification de la conformité aux plans et normes. Corrections immédiates des non-conformités pour garantir un ouvrage impeccable."
    },
    {
      number: "05",
      icon: <Key size={32} strokeWidth={2.5} />,
      title: "Livraison & Garanties",
      description: "Réception des travaux, remise des documents techniques et garanties. Nous assurons un suivi post-livraison pour votre satisfaction complète et la pérennité de l'ouvrage."
    }
  ];

  return (
    <section id="methodologie" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Notre Méthodologie</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mt-4 mb-6 leading-tight">
            Un Processus Structuré<br className="hidden md:block" />
            Pour Votre Réussite
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            De la première consultation à la livraison finale, chaque étape est méticuleusement planifiée et exécutée pour garantir l'excellence de votre projet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Lançons Votre Projet
          </a>
        </div>
      </div>
    </section>
  );
};

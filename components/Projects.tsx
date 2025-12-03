import React, { useState } from 'react';
import { Building2, Factory, Landmark, Home as HomeIcon } from 'lucide-react';

type ProjectCategory = 'tous' | 'administratif' | 'industriel' | 'public' | 'habitation';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Centre Administratif Ennasr",
    category: "administratif",
    image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    description: "Gros œuvre et second œuvre complet - 5000m²"
  },
  {
    id: 2,
    title: "Complexe Industriel Bizerte",
    category: "industriel",
    image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg",
    description: "Structures métalliques et béton armé - 8000m²"
  },
  {
    id: 3,
    title: "École Publique Manouba",
    category: "public",
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
    description: "Construction intégrale - 3500m²"
  },
  {
    id: 4,
    title: "Résidence Les Jardins",
    category: "habitation",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "Immeuble R+6 - 40 appartements"
  },
  {
    id: 5,
    title: "Siège Social BNA",
    category: "administratif",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    description: "Rénovation et extension - 4200m²"
  },
  {
    id: 6,
    title: "Usine Agroalimentaire Sfax",
    category: "industriel",
    image: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg",
    description: "Conception et réalisation - 6500m²"
  }
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('tous');

  const filteredProjects = activeFilter === 'tous'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'tous' as ProjectCategory, label: 'Tous les Projets', icon: <Building2 size={18} /> },
    { id: 'administratif' as ProjectCategory, label: 'Administratif', icon: <Building2 size={18} /> },
    { id: 'industriel' as ProjectCategory, label: 'Industriel', icon: <Factory size={18} /> },
    { id: 'public' as ProjectCategory, label: 'Public', icon: <Landmark size={18} /> },
    { id: 'habitation' as ProjectCategory, label: 'Habitation', icon: <HomeIcon size={18} /> },
  ];

  return (
    <section id="realisations" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Nos Réalisations</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mt-4 mb-6 leading-tight">
            Projets Réalisés avec Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez nos réalisations à travers différents secteurs. Chaque projet témoigne de notre engagement envers la qualité et la précision technique.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                activeFilter === category.id
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-bold rounded-full mb-3 uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

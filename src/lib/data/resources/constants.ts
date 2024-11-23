import { Material, ResourceData } from './types';

const resources: Record<Material, ResourceData> = {
  'helium-3': {
    name: 'Helium-3',
    description:
      'Rare isotope of helium used as a fusion fuel, particularly in advanced fusion reactors.',
    category: 'energy',
    state: 'gas',
    abundance: 'rare',
    form: 'raw',
  },
  tritium: {
    name: 'Tritium',
    description: 'Radioactive isotope of hydrogen used in fusion reactions.',
    category: 'energy',
    state: 'gas',
    abundance: 'uncommon',
    form: 'manufactured',
  },
  antimatter: {
    name: 'Antimatter',
    description:
      'Highly energetic material that can be used for advanced propulsion and energy generation.',
    category: 'energy',
    state: 'exotic',
    abundance: 'rare',
    form: 'raw',
  },
  water: {
    name: 'Water',
    description:
      'Crucial for life support and energy generation in space, often found in liquid form.',
    category: 'energy',
    state: 'liquid',
    abundance: 'common',
    form: 'raw',
  },
  iron: {
    name: 'Iron',
    description:
      'Common metal used in structural applications, alloyed to create strong, durable materials.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
  },
  nickel: {
    name: 'Nickel',
    description: 'Strong, corrosion-resistant metal, often used in alloys for construction.',
    category: 'structural',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
  titanium: {
    name: 'Titanium',
    description:
      'Lightweight, high-strength material used in space structures and spacecraft components.',
    category: 'structural',
    state: 'solid',
    abundance: 'uncommon',
    form: 'manufactured',
  },
  aluminum: {
    name: 'Aluminum',
    description: 'Lightweight metal commonly used for spacecraft construction and alloys.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'manufactured',
  },
  platinum: {
    name: 'Platinum',
    description: 'Rare and durable metal used in advanced electronics and high-tech applications.',
    category: 'structural',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
  },
  palladium: {
    name: 'Palladium',
    description: 'Rare metal used in various engineering applications and catalytic processes.',
    category: 'structural',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
  },
  osmium: {
    name: 'Osmium',
    description:
      'Extremely dense metal, used in specialized alloys and high-strength applications.',
    category: 'structural',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
  },
  'carbon nanotubes': {
    name: 'Carbon Nanotubes',
    description:
      'Advanced material with extraordinary strength-to-weight ratio, used in high-tech engineering.',
    category: 'tech',
    state: 'solid',
    abundance: 'uncommon',
    form: 'manufactured',
  },
  graphene: {
    name: 'Graphene',
    description:
      'Single layer of carbon atoms with exceptional strength and conductivity, used in cutting-edge electronics.',
    category: 'tech',
    state: 'solid',
    abundance: 'rare',
    form: 'processed',
  },
  oxygen: {
    name: 'Oxygen',
    description:
      'Essential gas for respiration, used in life support systems and energy generation.',
    category: 'energy',
    state: 'gas',
    abundance: 'common',
    form: 'raw',
  },
  nitrogen: {
    name: 'Nitrogen',
    description:
      'Inert gas used in life support systems and as a protective gas in some space technologies.',
    category: 'life-support',
    state: 'gas',
    abundance: 'common',
    form: 'raw',
  },
  carbon: {
    name: 'Carbon',
    description:
      'Basic building block of life, used in organic compounds and various energy applications.',
    category: 'life-support',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
  },
  phosphorus: {
    name: 'Phosphorus',
    description:
      'Vital element for biological systems, especially in DNA, used in life support systems.',
    category: 'life-support',
    state: 'solid',
    abundance: 'uncommon',
    form: 'manufactured',
  },
  sulfur: {
    name: 'Sulfur',
    description: 'Element used in biological systems and energy generation.',
    category: 'life-support',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
  'topological-insulators': {
    name: 'Topological Insulators',
    description:
      'Advanced material with special electronic properties used in quantum computing and electronics.',
    category: 'tech',
    state: 'solid',
    abundance: 'rare',
    form: 'processed',
  },
  superconductors: {
    name: 'Superconductors',
    description:
      'Materials that conduct electricity without resistance at low temperatures, used in energy systems.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'processed',
  },
  'rare earth elements': {
    name: 'Rare Earth Elements',
    description: 'A group of elements used in electronics, magnets, and high-tech devices.',
    category: 'tech',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
  deuterium: {
    name: 'Deuterium',
    description:
      'Isotope of hydrogen used in nuclear fusion reactions, commonly extracted from water.',
    category: 'energy',
    state: 'gas',
    abundance: 'uncommon',
    form: 'raw',
  },
  lithium: {
    name: 'Lithium',
    description:
      'Metal used in batteries, fusion reactions, and other advanced energy applications.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
  uranium: {
    name: 'Uranium',
    description: 'Used in nuclear fission and future fusion technologies.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
  zirconium: {
    name: 'Zirconium',
    description: 'Metal used in nuclear reactors and high-performance structural applications.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
  thorium: {
    name: 'Thorium',
    description: 'Alternative nuclear fuel used in reactors, less radioactive than uranium.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
  },
};

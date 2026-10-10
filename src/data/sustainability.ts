import type { EcoFeature, EcoMetric } from '../types/landing';

export const ecoFeatures: EcoFeature[] = [
  {
    icon: 'water',
    title: 'Uso responsable del agua',
    description: 'Ciclos optimizados para gastar hasta 40% menos agua por carga.',
  },
  {
    icon: 'leaf',
    title: 'Productos biodegradables',
    description: 'Fórmulas suaves con tu piel y respetuosas con los ecosistemas marinos.',
  },
  {
    icon: 'energy',
    title: 'Energía eficiente',
    description: 'Equipos industriales modernos de bajo consumo eléctrico con certificación A+++.',
  },
];

export const ecoMetrics: EcoMetric[] = [
  { value: '-40%', label: 'Agua utilizada' },
  { value: '100%', label: 'Detergentes eco' },
  { value: '0', label: 'Plástico de un solo uso' },
  { value: '24h', label: 'Rutas optimizadas' },
];

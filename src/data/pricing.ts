import type { PricingPlan } from '../types/landing';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    subtitle: 'Para probar el servicio',
    price: '$25',
    period: '/ servicio',
    isPopular: false,
    features: [
      'Hasta 5 kg de ropa',
      'Lavado y doblado',
      'Entrega en 24h',
    ],
    ctaText: 'Elegir Básico',
    ctaHref: '#contacto',
  },
  {
    id: 'mensual',
    name: 'Mensual',
    subtitle: 'Para profesionales ocupados',
    price: '$79',
    period: '/ mes',
    badge: 'MÁS POPULAR',
    isPopular: true,
    features: [
      '4 recogidas al mes',
      'Lavado, doblado y planchado',
      'Seguimiento en tiempo real',
      'Prioridad en entregas',
    ],
    ctaText: 'Elegir Mensual',
    ctaHref: '#contacto',
  },
  {
    id: 'hogar',
    name: 'Hogar',
    subtitle: 'Para familias y negocios',
    price: '$129',
    period: '/ mes',
    isPopular: false,
    features: [
      'Recogidas ilimitadas',
      'Incluye edredones y cortinas',
      'Lavado en seco',
      'Atención personalizada',
    ],
    ctaText: 'Elegir Hogar',
    ctaHref: '#contacto',
  },
];

export interface TrustFeature {
  icon: string;
  title: string;
  subtitle: string;
}

export const trustFeatures: TrustFeature[] = [
  {
    icon: 'shield',
    title: 'Garantía 100% Sin Riesgo',
    subtitle: 'Si alguna prenda no queda perfecta, la relavamos sin costo alguno.',
  },
  {
    icon: 'lock',
    title: 'Pagos Seguros y Flexibles',
    subtitle: 'Aceptamos Tarjetas, Yape, Plin, Transferencia o Efectivo a la entrega.',
  },
  {
    icon: 'truck',
    title: 'Recojo & Entrega Puntual',
    subtitle: 'Seguimiento por WhatsApp en tiempo real del repartidor.',
  },
];

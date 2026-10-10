import type { SiteConfig } from '../types/landing';

export const siteConfig: SiteConfig = {
  name: 'LAVANDA',
  brandAcent: 'V',
  title: 'LAVANDA | Frescura que se siente',
  description: 'Servicio de lavandería premium a domicilio: recogemos, lavamos y entregamos en 24h. Ropa impecable con procesos 100% eco-friendly.',
  tagline: 'Frescura que se siente',
  contact: {
    phone: '+51 999 999 999',
    email: 'hola@lavanda.com',
    location: 'Tu ciudad',
  },
  hours: {
    weekdays: 'Lun – Vie: 8:00 – 20:00',
    saturday: 'Sábado: 9:00 – 18:00',
    sunday: 'Domingo: Cerrado',
  },
  whatsapp: {
    number: '51999999999',
    message: '¡Hola LAVANDA! Deseo solicitar el recojo de mi ropa a domicilio.',
  },
};

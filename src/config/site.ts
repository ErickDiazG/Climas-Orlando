// Climas Orlando — Site Configuration
// Single source of truth for all business data and shared constants.

export const SITE = {
    name: 'Multiservicios Diaz',
    tagline: 'Línea Blanca y Refrigeración',
    description: 'Servicios especializados en mantenimiento de minisplits, reparación de lavadoras y venta de equipos de climatización en Reynosa, Tamaulipas.',
    url: 'https://multiserviciosdiaz.com',
} as const;

export const CONTACT = {
    phone: '+528992163741',
    phoneDisplay: '+52 899 216 3741',
    email: 'contacto@multiserviciosdiaz.com',
    location: 'Reynosa, Tamaulipas',
    coverageArea: 'Cobertura en todo Reynosa, Tamaulipas',
} as const;

const WA_BASE = `https://wa.me/${CONTACT.phone.replace('+', '')}`;

export const WHATSAPP = {
    default: `${WA_BASE}?text=${encodeURIComponent('Hola, vengo de su página web y necesito informes.')}`,
    ventaEquipos: `${WA_BASE}?text=${encodeURIComponent('Hola, me interesan los equipos Mirage que vi en su página.')}`,
    reparacionLavadoras: `${WA_BASE}?text=${encodeURIComponent('Hola, necesito una revisión para mi lavadora. Vengo de la página web.')}`,
    mantenimientoClimas: `${WA_BASE}?text=${encodeURIComponent('Hola, necesito mantenimiento para mi minisplit. Vengo de la página web.')}`,
} as const;

export const SOCIAL = {
    facebook: 'https://facebook.com/climasdiaz',
} as const;

export const STATS = {
    yearsExperience: 4,
    servicesCompleted: 100,
    happyClients: 100,
    warrantyPercent: 100,
} as const;

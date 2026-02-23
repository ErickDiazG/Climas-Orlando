// Climas Orlando — Site Configuration
// Single source of truth for all business data and shared constants.

export const SITE = {
    name: 'Climas Orlando',
    tagline: 'Línea Blanca y Refrigeración',
    description: 'Servicios especializados en mantenimiento de minisplits, reparación de lavadoras y venta de equipos de climatización en Reynosa, Tamaulipas.',
    url: 'https://climasorlando.com',
} as const;

export const CONTACT = {
    phone: '+528992163741',
    phoneDisplay: '+52 899 216 3741',
    email: 'contacto@climasorlando.com',
    location: 'Reynosa, Tamaulipas',
    coverageArea: 'Cobertura en todo Reynosa, Tamaulipas',
} as const;

const WA_BASE = `https://wa.me/${CONTACT.phone.replace('+', '')}`;

export const WHATSAPP = {
    default: `${WA_BASE}?text=${encodeURIComponent('Hola, buenas tardes. Vengo de su sitio web y me interesa información sobre sus servicios de clima y línea blanca.')}`,
    ventaEquipos: `${WA_BASE}?text=${encodeURIComponent('Hola, buenas tardes. Vengo de su sitio web y me interesa información sobre la venta de equipos Mirage.')}`,
    reparacionLavadoras: `${WA_BASE}?text=${encodeURIComponent('Hola, buenas tardes. Vengo de su sitio web y necesito agendar una revisión para mi lavadora.')}`,
    mantenimientoClimas: `${WA_BASE}?text=${encodeURIComponent('Hola, buenas tardes. Vengo de su sitio web y me interesa solicitar un servicio de mantenimiento de clima.')}`,
} as const;

export const SOCIAL = {
    facebook: 'https://facebook.com/climasorlando',
} as const;

export const STATS = {
    yearsExperience: 4,
    servicesCompleted: 100,
    happyClients: 100,
    warrantyPercent: 100,
} as const;

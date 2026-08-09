export const SITE_NAME = "Lic. Melina Santos Oliveira";
export const SITE_TITLE = "Psicóloga online para adultos, parejas y familias";
export const SITE_DESCRIPTION =
  "Psicoterapia online con enfoque psicoanalítico para adultos, parejas y familias. Atención profesional, confidencial y 100% virtual en Argentina.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const EMAIL = "licenciadasantosoliveira@gmail.com";

const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

const contactSubject = "Consulta por psicoterapia online";
const contactMessage =
  "Hola Melina, quisiera consultar por disponibilidad para una primera sesión online.";

const gmailComposeHref =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}` +
  `&su=${encodeURIComponent(contactSubject)}` +
  `&body=${encodeURIComponent(contactMessage)}`;

export const CONTACT_HREF = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`
  : gmailComposeHref;

export const CONTACT_CHANNEL = whatsappNumber ? "WhatsApp" : "Gmail";

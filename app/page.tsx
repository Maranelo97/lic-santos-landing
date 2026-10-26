import Image from "next/image";
import { AmbientParticles, HeroReveal, Reveal } from "@/components/motion-elements";
import { ContactLink } from "@/components/contact-link";
import { FAQAccordion } from "@/components/faq-accordion";
import { Header } from "@/components/header";
import { SmoothAnchor } from "@/components/smooth-anchor";
import {
  CONTACT_CHANNEL,
  CONTACT_HREF,
  EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Adultos",
    description:
      "Un tiempo propio para comprender malestares que se repiten, elaborar experiencias y construir nuevas maneras de vincularte con vos y con los demás.",
    topics: ["Angustia y ansiedad", "Crisis y duelos", "Relaciones y decisiones"],
  },
  {
    number: "02",
    title: "Parejas",
    description:
      "Un espacio compartido para escuchar lo que sucede entre ambos, reconocer dinámicas que generan malestar y encontrar formas más cuidadas de relacionarse.",
    topics: ["Comunicación", "Conflictos recurrentes", "Crisis y transiciones"],
  },
  {
    number: "03",
    title: "Familias",
    description:
      "Acompañamiento para comprender las posiciones, tensiones y modos de comunicación que atraviesan al grupo familiar y habilitar nuevos acuerdos.",
    topics: ["Dinámicas vinculares", "Cambios familiares", "Límites y acuerdos"],
  },
];

const faqs = [
  {
    question: "¿Cómo son las sesiones de psicoterapia online?",
    answer:
      "Los encuentros se realizan por videollamada, en un horario previamente acordado. Solo necesitás conexión a internet y un lugar privado donde puedas hablar con tranquilidad.",
  },
  {
    question: "¿Atendés a personas de cualquier lugar de Argentina?",
    answer:
      "Sí. La modalidad es 100% virtual, por lo que podés consultar desde cualquier provincia del país sin necesidad de trasladarte.",
  },
  {
    question: "¿Cómo es la primera consulta?",
    answer:
      "Es una primera conversación para conocer qué trae a consulta a la persona, pareja o familia, escuchar sus necesidades y evaluar juntos cómo continuar.",
  },
  {
    question: "¿Cuál es el valor de la sesión?",
    answer:
      "Como referencia, el arancel estimado ronda los $45.000 ARS por sesión. El valor vigente, el horario, la duración y la modalidad de pago se confirman antes de reservar.",
  },
  {
    question: "¿El espacio es confidencial?",
    answer:
      "Sí. La práctica clínica se sostiene en la confidencialidad y el cuidado de la privacidad, dentro del marco ético profesional correspondiente.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "MedicalBusiness"],
      "@id": `${SITE_URL}/#practice`,
      name: `${SITE_NAME} — Psicología online`,
      url: SITE_URL,
      email: EMAIL,
      description: SITE_DESCRIPTION,
      priceRange: "Arancel orientativo: alrededor de $45.000 ARS",
      areaServed: { "@type": "Country", name: "Argentina" },
      availableLanguage: ["Español", "Portugués", "Inglés"],
      employee: { "@id": `${SITE_URL}/#melina-santos` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Psicoterapia online",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Psicoterapia online para ${service.title.toLowerCase()}`,
            serviceType: "Psicoterapia con enfoque psicoanalítico",
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#melina-santos`,
      name: "Melina Santos Oliveira",
      jobTitle: "Licenciada en Psicología",
      description:
        "Psicóloga clínica y psicoanalista con atención online a adultos, parejas y familias.",
      knowsLanguage: ["es", "pt", "en"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de la Marina Mercante",
      },
      worksFor: { "@id": `${SITE_URL}/#practice` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <section id="inicio" className="hero-section">
          <AmbientParticles />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="site-container hero-grid">
            <div className="relative z-10">
              <HeroReveal>
                <div className="eyebrow">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  Psicoanálisis clínico · 100% online
                </div>
                <h1 className="hero-title">
                  Psicoterapia online para <span>comprenderte.</span> Y transformar tus vínculos.
                </h1>
                <p className="hero-copy">
                  Atención para adultos, parejas y familias. Una escucha profesional, cercana y
                  confidencial para acompañar lo que hoy necesita encontrar palabras.
                </p>
                <div className="hero-actions">
                  <ContactLink
                    href={CONTACT_HREF}
                    source="hero"
                    className="button button-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar disponibilidad <span aria-hidden="true">↗</span>
                  </ContactLink>
                  <SmoothAnchor href="#enfoque" className="button button-secondary">
                    Conocer cómo trabajo <span aria-hidden="true">↓</span>
                  </SmoothAnchor>
                </div>
                <p className="hero-note">
                  <span aria-hidden="true">●</span> Atención desde cualquier lugar de Argentina
                </p>
              </HeroReveal>
            </div>

            <HeroReveal className="hero-visual" delay={0.18}>
              <div className="portrait-backdrop" aria-hidden="true" />
              <div className="portrait-frame">
                <Image
                  src="/melina-cv.png"
                  alt="Licenciada Melina Santos Oliveira, psicóloga y psicoanalista"
                  width={1334}
                  height={1864}
                  className="portrait-source"
                  priority
                  sizes="(max-width: 768px) 88vw, 520px"
                />
                <div className="portrait-shade" aria-hidden="true" />
                <div className="portrait-caption">
                  <span>Lic. en Psicología</span>
                  <strong>Melina Santos Oliveira</strong>
                </div>
              </div>
              <div className="floating-card floating-card-top">
                <span className="floating-icon" aria-hidden="true">✦</span>
                <span><strong>Experiencia clínica</strong> y formación continua</span>
              </div>
              <div className="floating-card floating-card-bottom">
                <span className="status-dot" aria-hidden="true" />
                <span><strong>Atención online</strong> en Argentina</span>
              </div>
            </HeroReveal>
          </div>
        </section>

        <section className="trust-strip" aria-label="Información principal de atención">
          <div className="site-container trust-grid">
            <div><span>01</span><p><strong>Modalidad virtual</strong>Sin traslados, desde un espacio privado.</p></div>
            <div><span>02</span><p><strong>Arancel orientativo</strong>Valor estimado; se confirma al consultar.</p></div>
            <div><span>03</span><p><strong>Escucha confidencial</strong>Cuidado profesional en cada encuentro.</p></div>
          </div>
        </section>

        <section id="acompanamiento" className="section section-services">
          <div className="site-container">
            <Reveal className="section-heading heading-split">
              <div>
                <p className="kicker">Acompañamiento</p>
                <h2>Un espacio propio para cada momento de la vida.</h2>
              </div>
              <p>
                No hay dos procesos iguales. El trabajo parte de escuchar tu historia y comprender
                qué está sucediendo hoy, sin fórmulas rígidas ni respuestas prefabricadas.
              </p>
            </Reveal>

            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.08}>
                  <article className="service-card">
                    <div className="service-number">{service.number}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.topics.map((topic) => (
                        <li key={topic}><span aria-hidden="true">+</span>{topic}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="enfoque" className="section approach-section">
          <AmbientParticles className="opacity-60" />
          <div className="site-container approach-grid">
            <Reveal className="approach-art" delay={0.08}>
              <div className="approach-orbit orbit-one" aria-hidden="true" />
              <div className="approach-orbit orbit-two" aria-hidden="true" />
              <div className="approach-core">
                <span>Escuchar</span>
                <strong>Comprender</strong>
                <span>Elaborar</span>
              </div>
              <p className="approach-quote">“Lo que puede nombrarse empieza a transformarse.”</p>
            </Reveal>

            <Reveal>
              <p className="kicker">Mi enfoque</p>
              <h2>Una escucha que contempla tu historia, tus vínculos y tu singularidad.</h2>
              <p className="large-copy">
                Desde el enfoque psicoanalítico, el síntoma no se mira de manera aislada. Es una
                invitación a comprender algo de tu experiencia, tus modos de vincularte y aquello
                que se repite o produce malestar.
              </p>
              <div className="principles-list">
                <div><span>01</span><p><strong>Sin juicios</strong>Un espacio donde podés hablar con libertad y a tu propio ritmo.</p></div>
                <div><span>02</span><p><strong>Con profundidad</strong>Para comprender, no solo aliviar, lo que te está pasando.</p></div>
                <div><span>03</span><p><strong>Con calidez</strong>Un vínculo terapéutico profesional, humano y respetuoso.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="sobre-mi" className="section about-section">
          <div className="site-container about-grid">
            <Reveal>
              <p className="kicker">Sobre mí</p>
              <h2>Experiencia clínica y formación continua al servicio de cada proceso.</h2>
              <p className="large-copy">
                Soy Melina Santos Oliveira, Licenciada en Psicología. Acompaño a adultos, parejas y
                familias en consultorio particular, integrando práctica clínica, formación
                psicoanalítica y experiencia docente.
              </p>
              <div className="language-row" aria-label="Idiomas de atención">
                <span>Español</span><span>Portugués</span><span>Inglés</span>
              </div>
            </Reveal>

            <Reveal className="credentials-card" delay={0.12}>
              <p className="credentials-label">Formación y experiencia</p>
              <div className="credential-item">
                <span>Experiencia</span>
                <div><strong>Práctica clínica particular</strong><p>Atención a adultos, parejas y familias.</p></div>
              </div>
              <div className="credential-item">
                <span>Docencia</span>
                <div><strong>Docencia universitaria</strong><p>Cátedra de Psicoanálisis II.</p></div>
              </div>
              <div className="credential-item">
                <span>Formación</span>
                <div><strong>Clínica psicoanalítica</strong><p>Formación clínica de posgrado · Institución Fernando Ulloa.</p></div>
              </div>
              <div className="credential-item">
                <span>Especialización</span>
                <div><strong>Terapia familiar y A.S.I.</strong><p>Diplomatura y formación específica de posgrado.</p></div>
              </div>
              <p className="credentials-footnote">
                Licenciada por la Universidad de la Marina Mercante · Miembro de la Escuela
                Brasilera de Psicoanálisis y FEPAL.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section process-section">
          <div className="site-container">
            <Reveal className="section-heading centered-heading">
              <p className="kicker">Empezar puede ser simple</p>
              <h2>Tres pasos para tener una primera conversación.</h2>
              <p>Podés escribir aunque todavía no sepas exactamente cómo explicar lo que te pasa.</p>
            </Reveal>

            <div className="process-grid">
              <Reveal className="process-step"><span>1</span><h3>Escribime</h3><p>Contame brevemente para quién es la consulta y qué disponibilidad tenés.</p></Reveal>
              <Reveal className="process-step" delay={0.08}><span>2</span><h3>Coordinamos</h3><p>Te respondo para acordar horario y compartir los detalles del encuentro.</p></Reveal>
              <Reveal className="process-step" delay={0.16}><span>3</span><h3>Nos conocemos</h3><p>En la primera sesión conversamos sobre lo que te trae y cómo puedo acompañarte.</p></Reveal>
            </div>
          </div>
        </section>

        <section className="price-section">
          <div className="site-container">
            <Reveal className="price-card">
              <div>
                <p className="kicker kicker-light">Arancel particular</p>
                <h2>Información clara desde el primer contacto.</h2>
                <p>El valor se conversa antes de reservar para que puedas decidir con tranquilidad.</p>
              </div>
             
            </Reveal>
          </div>
        </section>

        <section id="preguntas" className="section faq-section">
          <div className="site-container faq-grid">
            <Reveal className="faq-intro">
              <p className="kicker">Preguntas frecuentes</p>
              <h2>Antes de comenzar.</h2>
              <p>Algunas respuestas para que tengas más claridad antes de escribir.</p>
              <ContactLink
                href={CONTACT_HREF}
                source="faq"
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                ¿Tenés otra pregunta? Conversemos <span aria-hidden="true">↗</span>
              </ContactLink>
            </Reveal>
            <Reveal delay={0.1}>
              <FAQAccordion items={faqs} />
            </Reveal>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <AmbientParticles />
          <div className="site-container contact-inner">
            <Reveal>
              <p className="kicker">Primera consulta</p>
              <h2>No tenés que tener todas las palabras para empezar.</h2>
              <p>
                Escribime para consultar disponibilidad. Podemos tener una primera conversación y
                pensar juntos si este espacio es adecuado para vos o para quien necesita acompañamiento.
              </p>
              <ContactLink
                href={CONTACT_HREF}
                source="final_cta"
                className="button button-primary button-large"
                target="_blank"
                rel="noreferrer"
              >
                Consultar por {CONTACT_CHANNEL} <span aria-hidden="true">↗</span>
              </ContactLink>
              <small>Respuesta personal · Consulta confidencial · Sin compromiso</small>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <SmoothAnchor href="#inicio" className="footer-brand">Melina Santos</SmoothAnchor>
            <p>Licenciada en Psicología · Atención online</p>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>Argentina · Modalidad virtual</span>
          </div>
          <div>
            <strong>Navegación</strong>
            <SmoothAnchor href="#acompanamiento">Acompañamiento</SmoothAnchor>
            <SmoothAnchor href="#sobre-mi">Sobre mí</SmoothAnchor>
            <SmoothAnchor href="#preguntas">Preguntas frecuentes</SmoothAnchor>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <p>© {new Date().getFullYear()} Melina Santos Oliveira. Todos los derechos reservados.</p>
          <p>Este espacio no reemplaza un servicio de emergencias. Ante una urgencia, contactá al servicio de emergencias de tu localidad.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lic. Melina Santos Oliveira — Psicología online",
    short_name: "Melina Santos",
    description: "Psicoterapia online para adultos, parejas y familias.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf9f4",
    theme_color: "#162839",
    lang: "es-AR",
  };
}

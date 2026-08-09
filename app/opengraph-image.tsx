import { ImageResponse } from "next/og";

export const alt = "Melina Santos Oliveira — Psicoterapia online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fcf9f4",
          color: "#162839",
          padding: "72px 78px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: 999, right: -80, top: -120, background: "#ffdbcd" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: 999, right: 180, bottom: -170, background: "#d5e8d2" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 1, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "sans-serif", fontSize: 27, letterSpacing: 1 }}>
            <div style={{ width: 58, height: 58, borderRadius: 999, background: "#162839", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>MS</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>Melina Santos Oliveira</strong>
              <span style={{ color: "#5e625f", fontSize: 20 }}>Licenciada en Psicología</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
            <div style={{ fontFamily: "sans-serif", textTransform: "uppercase", fontSize: 20, color: "#974822", letterSpacing: 3, marginBottom: 20 }}>Psicoanálisis clínico · 100% online</div>
            <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: -2 }}>Un espacio para ser escuchado.</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 25, color: "#43474c", marginTop: 25 }}>Psicoterapia para adultos, parejas y familias.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

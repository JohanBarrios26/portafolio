import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "Johan Barrios, Ingeniero de Sistemas: software y datos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que se ve al compartir el enlace en LinkedIn, WhatsApp o correo.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 84px",
          background: "#0b0d17",
          color: "#ecebf4",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#ffb547" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#ffb547" }} />
          {site.availability}
        </div>
        <div style={{ fontSize: 112, fontWeight: 800, lineHeight: 1, marginTop: 28 }}>{site.name}</div>
        <div style={{ fontSize: 44, fontWeight: 700, marginTop: 28 }}>{site.headline}</div>
        <div style={{ fontSize: 30, color: "#9296b0", marginTop: 24 }}>
          {`${site.role} · ${site.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}

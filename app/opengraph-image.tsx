import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sankalp Pandey — Software Developer & Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A08",
          padding: "72px",
          color: "#F3F0E8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8A877E", letterSpacing: 2 }}>
          <span>SANKALP PANDEY</span>
          <span>PORTFOLIO / 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 96, letterSpacing: -3, display: "flex" }}>
            I build things for the web.
          </div>
          <div style={{ fontSize: 30, color: "#8A877E", display: "flex" }}>
            Software / AI / Interactive
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ width: 48, height: 4, background: "#E4572E", display: "flex" }} />
          <span style={{ fontSize: 24, color: "#F3F0E8" }}>
            EMBER · NOVA · CAMPUSHUB
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

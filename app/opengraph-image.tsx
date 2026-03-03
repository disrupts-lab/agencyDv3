import { ImageResponse } from "next/og"
import { DisruptLogo } from "@/components/disrupt-logo"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0f0f0f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top-left vertical accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "3px",
            height: "160px",
            background: "linear-gradient(to bottom, #34d399, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
            width: "100%",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "6px 18px",
                borderRadius: "100px",
                border: "1px solid rgba(52, 211, 153, 0.35)",
                backgroundColor: "rgba(52, 211, 153, 0.08)",
                color: "#34d399",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Agencia Digital
            </div>
          </div>

          {/* Logo */}
          <div style={{ display: "flex", marginBottom: "24px" }}>
            <DisruptLogo color="#ffffff" width={320} height={168} />
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#666666",
              marginBottom: "40px",
            }}
          >
            Tu equipo digital completo — sin armar uno
          </div>

          {/* Service pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px" }}>
            {["Web", "IA", "Marketing", "Redes", "Soporte"].map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  border: "1px solid #252525",
                  color: "#555555",
                  fontSize: "14px",
                  backgroundColor: "#161616",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #1e1e1e",
              paddingTop: "24px",
            }}
          >
            <div style={{ color: "#3a3a3a", fontSize: "15px" }}>
              disruptlab.com
            </div>
            <div
              style={{
                display: "flex",
                padding: "12px 28px",
                borderRadius: "8px",
                backgroundColor: "#34d399",
                color: "#0a0a0a",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Empezá hoy →
            </div>
          </div>
        </div>

      </div>
    ),
    { ...size }
  )
}

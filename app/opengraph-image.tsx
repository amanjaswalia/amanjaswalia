import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Amandeep Singh - Full-Stack Developer & AI Solutions Specialist"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "100px",
            width: "300px",
            height: "300px",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "100px",
            width: "300px",
            height: "300px",
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        {/* Logo/Initials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            borderRadius: "24px",
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "32px",
          }}
        >
          AS
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
          }}
        >
          Amandeep Singh
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginBottom: "32px",
          }}
        >
          Full Stack Engineer | React, Next.js, Django, AI
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["React", "Next.js", "Node.js", "Django", "AI"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                background: "rgba(59, 130, 246, 0.2)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "20px",
                color: "#60a5fa",
                fontSize: "18px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

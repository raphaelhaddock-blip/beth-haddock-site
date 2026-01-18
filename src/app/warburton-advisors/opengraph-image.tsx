import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Warburton Advisors | Beth Haddock";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          padding: "80px",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #D4AF37 0%, #F5D77A 50%, #D4AF37 100%)",
          }}
        />

        {/* Label */}
        <div
          style={{
            color: "#D4AF37",
            fontSize: 24,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Advisory Practice
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 400,
            color: "#FAFAFA",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Warburton Advisors
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#A1A1AA",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          Sustainable governance and compliance solutions for blockchain and financial services
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: "#D4AF37",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              color: "#71717A",
              fontSize: 20,
            }}
          >
            Beth Haddock, Founder
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

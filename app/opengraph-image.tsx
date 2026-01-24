import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";
import logo from "@/public/icon/DW-Icon-gr.svg";

// Image metadata
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "black",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 16px",
      }}
    >
      <img src={logo} alt="Logo DW IT-Dienstleistungen" />
      <div>
        <h1
          style={{
            fontSize: 128,
            marginBottom: 4,
          }}
        >
          David Warmuth
        </h1>
        <p
          style={{
            fontSize: 64,
            fontWeight: 400,
          }}
        >
          IT-Dienstleistungen
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  );
}

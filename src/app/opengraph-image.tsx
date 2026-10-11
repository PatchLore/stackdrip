import { ImageResponse } from "next/og";

export const alt = "StackDrip — Custom tools for creators, built solo.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide OG/Twitter card, generated at build time.
 *
 * Rendered by Satori, which supports only a subset of CSS: flexbox only (no
 * grid), and every element with more than one child needs an explicit
 * `display: flex`. No custom font is loaded on purpose — pulling Geist would
 * add a network fetch to the build; the built-in sans stack is close enough at
 * this size.
 */
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
          // Site dark shell — matches --background in globals.css
          backgroundColor: "#09090b",
          padding: "96px",
          position: "relative",
        }}
      >
        {/* Accent strip: the three product accent colours in sequence */}
        <div
          style={{
            display: "flex",
            width: "220px",
            height: "8px",
            borderRadius: "9999px",
            backgroundImage:
              "linear-gradient(90deg, #22d3ee 0%, #34d399 50%, #c084fc 100%)",
            marginBottom: "56px",
          }}
        />

        {/* Satori lays flex children out as separate text runs, which leaves a
            word-gap between the two halves. gap:0 plus a small negative margin
            closes it so the wordmark reads as one word, as it does on-site. */}
        <div
          style={{
            display: "flex",
            gap: 0,
            fontSize: "128px",
            fontWeight: 700,
            letterSpacing: "-4px",
          }}
        >
          <span style={{ color: "#ffffff" }}>Stack</span>
          <span style={{ color: "#a1a1aa", marginLeft: "-18px" }}>Drip</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "44px",
            color: "#a1a1aa",
            letterSpacing: "-1px",
          }}
        >
          Custom tools for creators, built solo.
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "72px",
            right: "96px",
            fontSize: "26px",
            color: "#52525b",
          }}
        >
          stackdrip.dev
        </div>
      </div>
    ),
    { ...size },
  );
}

/**
 * DoodleArrow — hand-drawn dashed SVG arrow
 *
 * Props:
 *   color      — stroke color         (default: "#7C3FBE")
 *   size       — scale multiplier     (default: 1)
 *   className  — extra Tailwind classes
 *   style      — inline style override
 *   flip       — mirror horizontally  (default: false)
 */
export default function DoodleArrow({
  color = "#7C3FBE",
  size = 1,
  className = "",
  style = {},
  flip = false,
}) {
  const w = Math.round(160 * size);
  const h = Math.round(200 * size);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 160 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
    >
      {/* Main looping squiggle path */}
      <path
        d="
          M 130 10
          C 110 20, 80 15, 70 40
          C 60 65, 90 75, 85 95
          C 78 118, 50 112, 42 130
          C 34 148, 55 162, 50 178
          C 47 188, 35 192, 25 188
        "
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="10 8"
        fill="none"
      />
      {/* Arrowhead at bottom */}
      <path
        d="M 25 188 L 12 175 M 25 188 L 38 172"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

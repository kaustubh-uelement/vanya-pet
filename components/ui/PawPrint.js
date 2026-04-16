export default function PawPrint({ size = 28, color = "#F0B8CC", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      aria-hidden="true"
      style={style}
    >
      <ellipse cx="10" cy="8" rx="4.5" ry="5.5" />
      <ellipse cx="21" cy="5" rx="4.5" ry="5.5" />
      <ellipse cx="31" cy="8" rx="4.5" ry="5.5" />
      <ellipse cx="5" cy="18" rx="3.5" ry="4.5" />
      <path d="M20 16 C10 16 6 22 6 27 C6 33 12 36 20 36 C28 36 34 33 34 27 C34 22 30 16 20 16Z" />
    </svg>
  );
}

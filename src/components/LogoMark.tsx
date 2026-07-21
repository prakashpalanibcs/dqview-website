import { useId } from "react";

interface LogoMarkProps {
  className?: string;
}

/**
 * Hexagonal chevron + pinwheel mark, blue-to-violet gradient — deKorvai brand icon.
 */
export default function LogoMark({ className = "h-9 w-9" }: LogoMarkProps) {
  const uid = useId();
  const gradId = `dkLogoGrad-${uid}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="8" y1="50" x2="93" y2="50">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M 8 50 L 46 9 L 33 30 L 44 50 L 33 70 L 46 91 Z" fill={`url(#${gradId})`} />
      <path
        d="M 54.69 35.06 L 52.69 12.14 A 38 38 0 0 1 74.42 16.77 L 63.27 36.88 A 15 15 0 0 0 54.69 35.06 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 64.17 37.42 L 76.69 18.13 A 38 38 0 0 1 90.98 35.15 L 69.81 44.14 A 15 15 0 0 0 64.17 37.42 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 70.18 45.12 L 91.93 37.63 A 38 38 0 0 1 92.70 59.83 L 70.49 53.88 A 15 15 0 0 0 70.18 45.12 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 70.18 54.88 L 91.93 62.37 A 38 38 0 0 1 78.87 80.35 L 65.03 61.98 A 15 15 0 0 0 70.18 54.88 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M 64.17 62.58 L 76.69 81.87 A 38 38 0 0 1 55.34 88.00 L 55.74 65.00 A 15 15 0 0 0 64.17 62.58 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
}

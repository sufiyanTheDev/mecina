import type { SVGProps } from 'react';

export function MecinaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="MECINA Logo"
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="60"
        y="25"
        fontFamily="Playfair Display, serif"
        fontSize="24"
        fill="hsl(var(--foreground))"
        textAnchor="middle"
        letterSpacing="0.1em"
      >
        MECINA
      </text>
    </svg>
  );
}

// Inline SVG Logo — replaces the emoji in Header and Footer
export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36

  return (
    <div className="flex items-center space-x-2.5 group">
      {/* Icon mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="32" fill="#1E1E1E" />
        <path
          d="M14 14 C14 8 20 6 26 10 L32 16 C36 12 42 10 46 14 C50 18 48 24 44 26 L32 32 L20 20 C16 18 14 16 14 14Z"
          fill="#C6A43B"
        />
        <path
          d="M14 14 L32 32"
          stroke="#E5C97E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 32 L50 50"
          stroke="#9C7C2E"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="3" fill="#E5C97E" />
      </svg>

      {/* Wordmark */}
      <div className="leading-tight">
        <span
          className="font-playfair font-bold tracking-wide block"
          style={{
            fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.4rem' : '1.15rem',
            background: 'linear-gradient(to right, #9C7C2E, #C6A43B, #E5C97E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Rainbow
        </span>
        <span
          className="font-playfair font-bold text-white tracking-wide block"
          style={{
            fontSize: size === 'sm' ? '0.85rem' : size === 'lg' ? '1.2rem' : '1rem',
          }}
        >
          Amakhuma Gold
        </span>
      </div>
    </div>
  )
}

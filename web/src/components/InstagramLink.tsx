type InstagramLinkProps = {
  handle: string; // e.g. "natgeo" (without the @)
  className?: string; // optional, can pass Tailwind classes
};

export default function InstagramLink({
  handle,
  className = "",
}: InstagramLinkProps) {
  const href = `https://www.instagram.com/${handle}/`;

  return (
    <div className={`flex items-center justify-between text-2xl ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${handle} on Instagram`}
        className="hover:opacity-70 transition-opacity"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[1em] w-[1em]"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:opacity-70 transition-opacity"
      >
        @{handle}
      </a>
    </div>
  );
}

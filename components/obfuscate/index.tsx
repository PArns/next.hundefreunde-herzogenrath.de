"use client";

export default function ObfuscateClientSide({
  email,
  className,
}: {
  email: string;
  className: string;
}) {
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}

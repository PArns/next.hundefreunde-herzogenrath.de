import Link from "next/link";
import { UrlObject } from "url";

export default function Button({
  href,
  children,
  className,
}: {
  href: string | UrlObject;
  children: React.ReactNode;
  className?: string;
}) {
  if (!className) className = "";

  return (
    <Link
      href={href}
      className={`${className} rounded-lg bg-sky-600 p-3 font-bold text-white drop-shadow-md hover:bg-sky-800`.trim()}
    >
      {children}
    </Link>
  );
}

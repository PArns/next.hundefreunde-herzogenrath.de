import Link from "next/link";
import { UrlObject } from "url";

export default function Button({
  href,
  children,
}: {
  href: string | UrlObject;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-sky-600 p-3 font-bold text-white drop-shadow-md hover:bg-sky-800"
    >
      {children}
    </Link>
  );
}

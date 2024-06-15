"use client";

import Obfuscate from "react-obfuscate";

export default function ObfuscateClientSide({
  email,
  className,
}: {
  email: string;
  className: string;
}) {
  return <Obfuscate email={email} className={className} />;
}

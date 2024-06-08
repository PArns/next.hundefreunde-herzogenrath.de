import Link from "next/link";
import Image from "next/image";

export default function KursBox({
  name,
  imageName,
  timeText,
  children,
}: {
  name: string;
  imageName: string;
  timeText: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/kurse/#${name}`}
      className="flex h-full flex-col rounded-lg border bg-white shadow-lg"
    >
      <div className="relative flex h-52 w-full">
        <Image
          src={imageName}
          alt={name}
          className="rounded-t-lg"
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </div>

      <div className="py-2 text-center">
        <h2>{name}</h2>
      </div>
      <div className="px-4 pb-3">{children}</div>
      <div className="mt-auto px-4 pb-2 font-semibold text-gray-600">
        {timeText}
      </div>
    </Link>
  );
}

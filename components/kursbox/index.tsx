import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { addOneHour } from "../kurs";

export default function KursBox({
  name,
  kursName,
  imageName,
  startTime,
  children,
}: {
  name: string;
  kursName: string;
  imageName: string | StaticImport;
  startTime: string;
  children: React.ReactNode;
}) {
  const endTime = addOneHour(startTime);

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

      <div className="pt-2 text-center">
        <h2>{name}</h2>
      </div>
      <div className="px-4 pb-3">{children}</div>
      <div className="mt-auto px-4 pb-2 font-semibold text-gray-600">
        Der {kursName} findet von {startTime} Uhr bis {endTime} Uhr statt
      </div>
    </Link>
  );
}

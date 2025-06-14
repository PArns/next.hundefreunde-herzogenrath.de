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
    <article 
      itemScope 
      itemType="https://schema.org/Course"
      className="flex h-full flex-col rounded-lg border bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link
        href={`/kurse/#${name}`}
        className="flex h-full flex-col"
        aria-label={`Mehr über ${name} erfahren`}
      >
        <div className="relative flex h-52 w-full">
          <Image
            src={imageName}
            alt={`${name} - Hundetraining für ${kursName} bei den Hundefreunden Herzogenrath`}
            className="rounded-t-lg"
            style={{
              objectFit: "cover",
            }}
            width={800}
            sizes="(max-width: 800px) 100vw, 800px"
            itemProp="image"
          />
        </div>

        <header className="pt-2 text-center">
          <h3 itemProp="name">{name}</h3>
        </header>
        
        <div className="px-4 pb-3" itemProp="description">
          {children}
        </div>
        
        <div className="mt-auto px-4 pb-2 font-semibold text-gray-600" itemScope itemType="https://schema.org/Schedule">
          <time itemProp="startTime" dateTime={`${startTime}:00`}>
            Der {kursName} findet von {startTime} Uhr
          </time>
          {" bis "}
          <time itemProp="endTime" dateTime={`${endTime}:00`}>
            {endTime} Uhr
          </time>
          {" statt"}
        </div>
      </Link>
    </article>
  );
}

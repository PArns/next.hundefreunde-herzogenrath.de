import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ContentBox from "../layout/default-box";
import Image from "next/image";
import Link from "next/link";

function KursLeiter({ leiter }: { leiter: Array<string> }) {
  return (
    <>
      {leiter.map((l, index) => (
        <span key={index}>
          <Link className="font-semibold text-sky-700" href={`/team#${l}`}>
            {l}
          </Link>
          {index < leiter.length - 1 && ", "}
        </span>
      ))}
    </>
  );
}

export function addOneHour(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const endHours = (hours + 1) % 24; // Ensure it wraps around after 23:00
  return `${String(endHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export default function Kurs({
  name,
  img,
  id,
  leiter,
  startTime,
  children,
}: {
  name: string;
  img: string | StaticImport;
  id: string;
  leiter: Array<string>;
  startTime: string;
  children: React.ReactNode;
}) {
  const endTime = addOneHour(startTime);

  return (
    <ContentBox>
      <article itemScope itemType="https://schema.org/EducationalOrganization">
        <header>
          <h2 id={id} itemProp="name">{name}</h2>
        </header>
        
        <div className="flex flex-col lg:flex-row">
          <div className="relative mx-auto min-h-[250px] w-full lg:order-last lg:ml-4 lg:w-[550px]">
            <Image
              src={img}
              fill
              alt={`${name} - Hundetraining bei den Hundefreunden Herzogenrath`}
              className="rounded-lg object-cover"
              itemProp="image"
            />
          </div>
          
          <div className="flex h-auto w-full flex-col">
            <div className="pb-2 pt-2 lg:pt-0" itemProp="description">
              {children}
            </div>

            <div className="mt-auto flex flex-col space-y-2">
              <div itemScope itemType="https://schema.org/Person">
                <strong className="pr-1">Kursleiter:</strong> 
                <span itemProp="instructor">
                  <KursLeiter leiter={leiter} />
                </span>
              </div>
              
              <div className="font-semibold text-gray-600" itemScope itemType="https://schema.org/Schedule">
                <time itemProp="startTime" dateTime={`${startTime}:00`}>
                  Der {name} findet von {startTime} Uhr
                </time>
                {" bis "}
                <time itemProp="endTime" dateTime={`${endTime}:00`}>
                  {endTime} Uhr
                </time>
                {" statt"}
              </div>
            </div>
          </div>
        </div>
      </article>
    </ContentBox>
  );
}

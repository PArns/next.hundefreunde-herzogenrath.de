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
      <h3 id={id}>{name}</h3>
      <div className="flex flex-col lg:flex-row">
        <div className="relative mx-auto min-h-[250px] w-full lg:order-last lg:ml-4 lg:w-[550px]">
          <Image
            src={img}
            fill
            alt={name}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex h-auto w-full flex-col">
          <div className="pb-2">{children}</div>

          <div className="mt-auto flex flex-col">
            <div>
              <b>Kursleiter:</b> <KursLeiter leiter={leiter} />
            </div>
            <div className="font-semibold text-gray-600">
              Der {name} findet von {startTime} Uhr bis {endTime} Uhr statt
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}

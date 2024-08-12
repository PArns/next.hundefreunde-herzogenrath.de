import Image from "next/image";

import Age from "@/components/age";
import ObfuscateClientSide from "@/components/obfuscate";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Dog {
  name: string;
  race: string;
  birthDay: string;
}

export interface Member {
  name: string;
  img: string | StaticImport;
  desc: React.ReactNode;
  subTitle?: string;
  trainerSince?: string;
  traineeSince?: string;
  kurs?: Array<string>;
  dogs?: Array<Dog>;
  email?: string;
  emailEnabled?: boolean,
}

function Kurse({ kurse }: { kurse: Array<string> }) {
  return <>{kurse.join(", ")}</>;
}

function Dogs({ dogs }: { dogs: Array<Dog> }) {
  return (
    <>
      {dogs.map((dog, index) => (
        <div key={index}>
          {dog.name} ({dog.race} - <Age birthday={dog.birthDay} />)
          {index < dogs.length - 1 && ", "}
        </div>
      ))}
    </>
  );
}

export default function TeamMember({ member }: { member: Member }) {
  return (
    <div
      className="flex h-full flex-col rounded-lg border border-neutral-300 shadow-lg lg:flex-row"
      id={member.name}
    >
      <div className="relative h-full min-h-[450px] lg:w-[400px]">
        <Image
          src={member.img}
          alt={member.name}
          className="rounded-t-lg object-cover object-top lg:rounded-l-lg lg:rounded-tr-none"
          fill
          sizes="(max-width: 800px) 50vw, (max-width: 300px) 100vw, 33vw"
        />
      </div>
      <div className="flex w-full flex-col p-2 text-sm">
        <div className="text-2xl font-semibold">{member.name}</div>
        {member.subTitle && (
          <div className="text-md font-semibold text-neutral-600">
            {member.subTitle}
          </div>
        )}
        {member.kurs?.length && (
          <div className="text-neutral-600">
            {member.trainerSince && (
              <div>
                Ausbilder seit{" "}
                <Age birthday={member.trainerSince} plural="Jahren" />
              </div>
            )}
            {member.traineeSince && (
              <div>
                Ausbilderanwärter seit{" "}
                <Age birthday={member.traineeSince} plural="Jahren" />
              </div>
            )}
            <div>
              Kurs: <Kurse kurse={member.kurs} />
            </div>
          </div>
        )}
        <div className="py-2">{member.desc}</div>
        <div className="mt-auto text-neutral-600">
          {member.dogs?.length && (
            <div className="flex flex-row">
              <div className="pr-1">Eigene Hunde:</div>
              <div>
                <Dogs dogs={member.dogs} />
              </div>
            </div>
          )}
          {member.email && member.emailEnabled && (
            <div>
              E-Mail:{" "}
              <ObfuscateClientSide
                email={member.email}
                className="text-sky-700"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

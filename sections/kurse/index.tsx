import Button from "@/components/button";
import KursBox from "@/components/kursbox";

import { kursData } from "@/configuration/kursData";

export default function Kurse({ className }: { className?: string }) {
  if (!className) className = "";

  return (
    <>
      <div
        className={`${className} grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-4`}
        id="kurse"
      >
        {kursData.map((kurs) => (
          <KursBox
            key={kurs.id}
            name={kurs.id}
            kursName={kurs.name}
            imageName={kurs.img}
            startTime={kurs.startTime}
          >
            {kurs.contentShort}
          </KursBox>
        ))}
      </div>
      <div className="mt-6 mb-8 w-full text-center lg:text-right">
        <Button href="/kurse">Weitere Informationen zu unseren Kursen</Button>
      </div>
    </>
  );
}

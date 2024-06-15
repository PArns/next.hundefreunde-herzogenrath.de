"use client";

import { useEffect, useState } from "react";

const Age = ({
  birthday,
  single,
  plural,
}: {
  birthday: string;
  single?: string;
  plural?: string;
}) => {
  const [yearsOld, setYearsOld] = useState(0);
  const [pluralize, setPluralize] = useState("");

  if (!single) single = "Jahr";
  if (!plural) plural = "Jahre";

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const m = today.getMonth() - birthDate.getMonth();
    var age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setYearsOld(age);

    if (single && plural) {
      if (age == 1) setPluralize(single);
      else setPluralize(plural);
    }
  }, [yearsOld, setYearsOld, pluralize, setPluralize, birthday, single, plural]);

  return (
    <>
      {yearsOld > 0 && (
        <>
          {yearsOld}&nbsp;
          {pluralize}
        </>
      )}
    </>
  );
};

export default Age;

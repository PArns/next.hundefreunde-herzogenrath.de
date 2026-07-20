"use client";

import { useEffect, useMemo, useState } from "react";

const Age = ({
  birthday,
  single = "Jahr",
  plural = "Jahre",
}: {
  birthday: string;
  single?: string;
  plural?: string;
}) => {
  // Render on the client only: the age is derived from `new Date()`, which can
  // differ from the statically pre-rendered value, so we avoid a hydration
  // mismatch by rendering nothing until mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { yearsOld, pluralize } = useMemo(() => {
    const today = new Date();

    // Parse a "YYYY-MM-DD" string into a *local* date. Using `new Date(str)`
    // would treat it as UTC midnight and shift the day for non-UTC timezones,
    // skewing the age by a day around the birthday.
    const parts = birthday ? birthday.split("-") : [];
    const birthDate =
      parts.length === 3
        ? new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
        : new Date(birthday);

    // Empty or malformed input yields an Invalid Date; NaN would slip past the
    // `yearsOld < 0` guard and render "NaN Jahre", so bail out explicitly.
    if (Number.isNaN(birthDate.getTime())) {
      return { yearsOld: -1, pluralize: plural };
    }

    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return { yearsOld: age, pluralize: age === 1 ? single : plural };
  }, [birthday, single, plural]);

  if (!mounted || yearsOld < 0) {
    return null;
  }

  return (
    <>
      {yearsOld}&nbsp;
      {pluralize}
    </>
  );
};

export default Age;

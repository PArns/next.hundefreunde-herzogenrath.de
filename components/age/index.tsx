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
    const birthDate = new Date(birthday);
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

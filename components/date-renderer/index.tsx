"use client";

export default function DateRenderer({
  date,
  format,
}: {
  date: Date;
  format?: "short" | "long";
}) {
  const regionalLocale = "de-DE";

  if (format === "long")
    return (
      <>
        {date.toLocaleDateString(regionalLocale, {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </>
    );

  if (regionalLocale) return date.toLocaleDateString(regionalLocale);

  return date.toLocaleDateString();
}

import RichTextRenderer from "@/components/contentful/rich-text-renderer";
import {
  GetMotds,
  Motd,
} from "@/data-provider/contentful/provider/motd-provider";
import clsx from "clsx";

function Message({ motd }: { motd: Motd }) {
  const colorClasses = clsx(
    "flex flex-col w-full shadow-lg rounded-lg p-4",
    { "text-red-900 bg-red-100": motd.color === "Red" },
    { "text-yellow-900 bg-yellow-100": motd.color === "Yellow" },
    { "text-green-900 bg-green-100": motd.color === "Green" },
  );

  const headlineClasses = clsx(
    { "text-red-900": motd.color === "Red" },
    { "text-yellow-900": motd.color === "Yellow" },
    { "text-green-900": motd.color === "Green" },
  );

  return (
    <div className={colorClasses}>
      <h2 className={headlineClasses}>{motd.title}</h2>
      <RichTextRenderer document={motd.message} />
    </div>
  );
}

export default async function Motds() {
  const messages = await GetMotds();

  if (messages.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 pt-4" data-nosnipplet>
      {messages.map((m) => (
        <Message motd={m} key={m.title} />
      ))}
    </div>
  );
}

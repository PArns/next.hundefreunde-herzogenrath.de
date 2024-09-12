import Aktuelles from "@/app/(content)/aktuelles/seite/[pageNr]/page";

export const dynamic = "force-static";

export default async function AktuellesProxy() {
  return await Aktuelles({ params: { pageNr: 0 } });
}

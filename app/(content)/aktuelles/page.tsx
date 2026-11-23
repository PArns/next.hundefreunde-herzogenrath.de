import Aktuelles, {
  generateMetadata as generatePageMetadata,
} from "@/app/(content)/aktuelles/seite/[pageNr]/page";

export const dynamic = "force-static";

const firstPage = { params: Promise.resolve({ pageNr: "1" }) };

export function generateMetadata() {
  return generatePageMetadata(firstPage);
}

export default async function AktuellesProxy() {
  return await Aktuelles(firstPage);
}

import { fetchGraphQL } from "@/data-provider/contentful/client";


export interface Motd {
  title :string;  
  color: string;
  message: string;
}

export async function GetMotds(): Promise<Motd[]> {
  const data = await fetchGraphQL(
    `query {
      motdCollection(where: { enabled: true }) {
          total
          items {
            title
            color
            message {
              json
            }
          }
        }
      }`,
  );

  const collection = data.data.motdCollection;

  const motds: Motd[] = collection.items.map(
    (motd: any) => {
      return {
        title: motd.title,
        color: motd.color[0]? motd.color[0] : "",
        message: motd.message
      };
    },
  );

  return motds;
}
export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  return <>{params.slug}</>;
}

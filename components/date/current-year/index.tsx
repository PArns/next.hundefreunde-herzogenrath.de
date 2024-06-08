export default function CurrentYear() {
  const date = new Date();
  const year = date.getFullYear();

  return <>{year}</>;
}

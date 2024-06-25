export default function ContentBox({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className} my-4 w-full rounded-lg bg-white p-4 drop-shadow-lg`}
    >
      {children}
    </div>
  );
}

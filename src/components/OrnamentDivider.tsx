export function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6" aria-hidden="true">
      <span className="gold-line w-24 md:w-40" />
      <span className="ornate-star" />
      <span className="ornate-star scale-125" />
      <span className="ornate-star" />
      <span className="gold-line w-24 md:w-40" />
    </div>
  );
}

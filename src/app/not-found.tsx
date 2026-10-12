import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start pt-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted mt-3">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="text-accent mt-6 hover:underline">
        Back to home
      </Link>
    </div>
  );
}

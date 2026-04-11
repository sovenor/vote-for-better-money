import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      <Image
        src="/img/logo-dark-mode-v3.png"
        alt="Vote For Better Money"
        width={80}
        height={80}
        className="mx-auto mb-8 opacity-60"
      />
      <h1 className="text-3xl font-bold text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-muted mb-8">
        Our money is broken. And so is this page.
      </p>
      <Link href="/" className="btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}

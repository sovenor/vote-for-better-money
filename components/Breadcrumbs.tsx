import Link from "next/link";
import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted list-none p-0 m-0">
        <li>
          <Link href="/" className="hover:text-accent no-underline flex items-center">
            <Image
              src="/img/logo-dark-mode-v3.png"
              alt="Home"
              width={290}
              height={209}
              className="w-15 h-auto mr-2"
            />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-card-border">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-accent no-underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

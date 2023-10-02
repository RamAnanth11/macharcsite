import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        className="relative"
        src="/images/logo.png"
        width="48"
        height="48"
        alt="Testimonial 01"
      />
    </Link>
  );
}

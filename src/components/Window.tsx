import Image from "next/image";

/** A product screenshot inside a window frame. */
export function Window({
  img,
  alt,
  tilt = false,
  priority = false,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: {
  img: string;
  alt: string;
  tilt?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`window ${tilt ? "tilt" : ""}`}>
      <div className="wbar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <Image
        src={`/images/product/${img}.jpg`}
        alt={alt}
        width={1600}
        height={img === "voice" ? 1125 : 1000}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

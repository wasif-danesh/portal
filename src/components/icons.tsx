import {
  BookOpen,
  Image as ImageIcon,
  MessageSquare,
  Music,
  Video,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/products";

const productIcons: Record<IconKey, LucideIcon> = {
  chat: MessageSquare,
  book: BookOpen,
  image: ImageIcon,
  video: Video,
  voice: Volume2,
  music: Music,
};

type Size = "xs" | "sm" | "md" | "lg";

/** Coloured rounded tile holding an icon. `color` is the product's brand colour. */
export function TileIcon({
  color,
  icon: Icon,
  size = "lg",
}: {
  color: string;
  icon: LucideIcon;
  size?: Size;
}) {
  return (
    <span className={`ticon ${size}`} style={{ "--c": color } as React.CSSProperties}>
      <Icon className="ic" aria-hidden="true" />
    </span>
  );
}

export function ProductTile({
  color,
  icon,
  size = "lg",
}: {
  color: string;
  icon: IconKey;
  size?: Size;
}) {
  return <TileIcon color={color} icon={productIcons[icon]} size={size} />;
}

import { assetPath } from "@/lib/assetPath";

export default function AssetImg({ src, alt = "", className = "", ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  return <img src={assetPath(src)} alt={alt} className={className} {...rest} />;
}

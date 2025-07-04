import Image from "next/image";
import { CSSProperties } from "react";

export interface ContentfulImageAssetProps {
  asset: any;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  fill?: boolean;
  maxImageWidth?: number;
  style?: CSSProperties;
  sizes?: string;
  fit?: "pad" | "fill" | "scale" | "crop" | "thumb";
  className?: string;
  [key: string]: any; // For other props that might be passed
}

export function getImageSource(asset: any, width: number, height?: number, quality?: number, fit?: "pad" | "fill" | "scale" | "crop" | "thumb") {
  let assetSrc = asset?.url;

  if (!assetSrc) {
    assetSrc = asset?.SRC?.url;
  }

  if (!assetSrc) {
    return "";
  }

  const imageSource = assetSrc.startsWith("//")
    ? "https:" + assetSrc
    : assetSrc;

  const fullSource = `${imageSource}?w=${width ?? ""}&h=${height ?? ""}&q=${quality ?? 90}&fit=${fit ?? ""}`;

  return fullSource;
}

export function getImageAssetId(asset: any) {
  return asset?.sys?.id;
}

export default function ContentfulImageAsset(props: ContentfulImageAssetProps) {
  const {
    alt,
    asset,
    width,
    height,
    quality,
    priority,
    fill,
    maxImageWidth,
    style,
    usePlaceholder,
    sizes,
    className,
    fit = "fill", // Default zu "fill" für feste Dimensionen
    ...rest
  } = props;

  // Wenn width und height angegeben sind, verwende "fill" für exakte Dimensionen
  const contentfulFit = (width && height) ? (fit || "fill") : "fill";
  
  const imageSource = getImageSource(
    asset, 
    width ?? maxImageWidth ?? 1980, 
    height ?? 1080, 
    quality, 
    contentfulFit
  );
  
  if (!Boolean(imageSource) || imageSource === undefined) return <></>;

  // Wenn width und height angegeben sind, setze object-fit für korrekte Darstellung
  const imageStyle: CSSProperties = {
    ...style,
    ...(width && height && !fill ? { objectFit: 'cover' } : {})
  };

  return (
    <Image
      alt={alt.toString()}
      width={width}
      height={height}
      src={imageSource}
      priority={priority}
      fill={fill}
      quality={quality}
      style={imageStyle}
      sizes={sizes}
      className={className}
      {...rest}
    />
  );
}

/**
 * Custom Next.js Image loader for Cloudinary.
 * When Next.js <Image> is used with a Cloudinary src, this loader
 * rewrites the URL to include responsive width and quality params
 * instead of routing through Next.js's own image optimization proxy.
 *
 * This avoids the 404 error caused by Next.js trying to re-fetch
 * and re-optimize images that Cloudinary already optimized.
 */

export default function cloudinaryLoader({ src, width, quality }) {
  // If it's already a Cloudinary URL, rebuild it with the correct width
  if (src.includes("res.cloudinary.com")) {
    // Extract everything after /upload/
    const uploadIndex = src.indexOf("/upload/");
    if (uploadIndex === -1) return src;

    const base = src.substring(0, uploadIndex + 8); // includes "/upload/"
    const rest = src.substring(uploadIndex + 8);

    // Strip any existing transform segment (e.g. "f_auto,q_auto,c_fill,w_600,h_600/")
    // A transform segment contains commas or underscores before the first slash
    const firstSlash = rest.indexOf("/");
    const possibleTransform = firstSlash > -1 ? rest.substring(0, firstSlash) : "";
    const isTransform = possibleTransform.includes("_") || possibleTransform.includes(",");
    const publicId = isTransform ? rest.substring(firstSlash + 1) : rest;

    const q = quality || "auto";
    const transforms = `f_auto,q_${q},c_fill,w_${width}`;
    return `${base}${transforms}/${publicId}`;
  }

  // For local images, return as-is
  return src;
}

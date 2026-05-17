const CLOUD_NAME = "dzni6h38z";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

export function cloudinaryImage(publicId, options = {}) {
  const {
    width,
    height,
    crop = "fill",
    quality = "auto",
    format = "auto",
  } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    crop && `c_${crop}`,
    width && `w_${width}`,
    height && `h_${height}`,
  ]
    .filter(Boolean)
    .join(",");

  return `${BASE_URL}/image/upload/${transforms}/${publicId}`;
}

export function cloudinaryVideo(publicId, options = {}) {
  const { quality = "auto" } = options;
  // Use q_auto only — f_auto on videos can cause 404 on some accounts
  return `${BASE_URL}/video/upload/q_${quality}/${publicId}`;
}

export function cloudinaryVideoSources(publicId, quality = "auto") {
  // Single source with quality optimization — no format transform.
  // Cloudinary serves the original format (mp4) with compression applied.
  // f_webm/f_mp4 transforms require paid transcoding on some plans.
  const src = `${BASE_URL}/video/upload/q_${quality}/${publicId}`;
  return {
    mp4: src,
    webm: null, // disabled — use mp4 only to avoid 404s
  };
}

/**
 * Upload all local videos and images to Cloudinary.
 * Run with: node scripts/upload-to-cloudinary.mjs
 *
 * IMPORTANT: API Secret is only used here in this server-side script.
 * It is never exposed to the browser.
 */

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");

// ── Cloudinary credentials ──────────────────────────────────────────────────
cloudinary.config({
  cloud_name: "dzni6h38z",
  api_key: "493158917225955",
  api_secret: process.env.CLOUDINARY_SECRET || "nzhpgOmEOWTRx2KbZrtZWBRcstg",
  secure: true,
});

// ── File map: local path → Cloudinary public_id ────────────────────────────
const uploads = [
  // ── Hero videos ──────────────────────────────────────────────────────────
  { local: "videos/hero1.mp4",          id: "arsoap/videos/hero1",          type: "video" },
  { local: "videos/hero2.mp4",          id: "arsoap/videos/hero2",          type: "video" },
  { local: "videos/hero3.mp4",          id: "arsoap/videos/hero3",          type: "video" },
  { local: "videos/hero4.mp4",          id: "arsoap/videos/hero4",          type: "video" },
  { local: "videos/hero5.mp4",          id: "arsoap/videos/hero5",          type: "video" },

  // ── About / mission videos ────────────────────────────────────────────────
  { local: "videos/aboutarsoap.mp4",    id: "arsoap/videos/aboutarsoap",    type: "video" },
  { local: "videos/mission1.mp4",       id: "arsoap/videos/mission1",       type: "video" },
  { local: "videos/mission2.mp4",       id: "arsoap/videos/mission2",       type: "video" },
  { local: "videos/mission3.mp4",       id: "arsoap/videos/mission3",       type: "video" },
  { local: "videos/mission4.mp4",       id: "arsoap/videos/mission4",       type: "video" },

  // ── Product videos ────────────────────────────────────────────────────────
  { local: "videos/soap1.mp4",          id: "arsoap/videos/soap1",          type: "video" },
  { local: "videos/soap2.mp4",          id: "arsoap/videos/soap2",          type: "video" },
  { local: "videos/soap3.mp4",          id: "arsoap/videos/soap3",          type: "video" },
  { local: "videos/soap4.mp4",          id: "arsoap/videos/soap4",          type: "video" },
  { local: "videos/detergent1.mp4",     id: "arsoap/videos/detergent1",     type: "video" },
  { local: "videos/detergent2.mp4",     id: "arsoap/videos/detergent2",     type: "video" },
  { local: "videos/laundry1.mp4",       id: "arsoap/videos/laundry1",       type: "video" },
  { local: "videos/laundry2.mp4",       id: "arsoap/videos/laundry2",       type: "video" },
  { local: "videos/laundry3.mp4",       id: "arsoap/videos/laundry3",       type: "video" },
  { local: "videos/specialty1.mp4",     id: "arsoap/videos/specialty1",     type: "video" },
  { local: "videos/specialty2.mp4",     id: "arsoap/videos/specialty2",     type: "video" },
  { local: "videos/specialty3.mp4",     id: "arsoap/videos/specialty3",     type: "video" },

  // ── Product images ────────────────────────────────────────────────────────
  { local: "images/products/soap1.jpg",      id: "arsoap/products/soap1",      type: "image" },
  { local: "images/products/soap2.jpg",      id: "arsoap/products/soap2",      type: "image" },
  { local: "images/products/soap3.jpg",      id: "arsoap/products/soap3",      type: "image" },
  { local: "images/products/soap4.jpg",      id: "arsoap/products/soap4",      type: "image" },
  { local: "images/products/detergent1.jpg", id: "arsoap/products/detergent1", type: "image" },
  { local: "images/products/detergent2.jpg", id: "arsoap/products/detergent2", type: "image" },
  { local: "images/products/laundry1.jpg",   id: "arsoap/products/laundry1",   type: "image" },
  { local: "images/products/laundry2.jpg",   id: "arsoap/products/laundry2",   type: "image" },
  { local: "images/products/laundry3.jpg",   id: "arsoap/products/laundry3",   type: "image" },
  { local: "images/products/specialty1.jpg", id: "arsoap/products/specialty1", type: "image" },
  { local: "images/products/specialty2.jpg", id: "arsoap/products/specialty2", type: "image" },
  { local: "images/products/specialty3.jpg", id: "arsoap/products/specialty3", type: "image" },

  // ── Team images ───────────────────────────────────────────────────────────
  { local: "team/teamwoman1.jpg",  id: "arsoap/team/teamwoman1",  type: "image" },
  { local: "team/teamwoman2.jpg",  id: "arsoap/team/teamwoman2",  type: "image" },
  { local: "team/teamman1.jpg",    id: "arsoap/team/teamman1",    type: "image" },
  { local: "team/teamman2.jpg",    id: "arsoap/team/teamman2",    type: "image" },
];

// ── Upload function ──────────────────────────────────────────────────────────
async function uploadFile({ local, id, type }) {
  const filePath = path.join(PUBLIC_DIR, local);

  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠  SKIP  (file not found): ${local}`);
    return;
  }

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: id,
      resource_type: type,
      overwrite: false,        // skip if already uploaded
      invalidate: true,
      // For videos: generate eager WebM version automatically
      ...(type === "video" && {
        eager: [{ format: "webm", quality: "auto" }],
        eager_async: true,
      }),
    });
    console.log(`  ✓  ${type.padEnd(5)}  ${local.padEnd(40)} → ${result.secure_url}`);
  } catch (err) {
    if (err?.error?.http_code === 400 && err?.error?.message?.includes("already exists")) {
      console.log(`  ✓  EXISTS  ${local}`);
    } else {
      console.error(`  ✗  FAIL   ${local}: ${err?.error?.message || err.message}`);
    }
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🚀 Starting Cloudinary upload...\n");
  console.log(`   Cloud: dzni6h38z`);
  console.log(`   Files: ${uploads.length} total\n`);

  // Upload in batches of 3 to avoid rate limits
  const BATCH = 3;
  for (let i = 0; i < uploads.length; i += BATCH) {
    const batch = uploads.slice(i, i + BATCH);
    await Promise.all(batch.map(uploadFile));
  }

  console.log("\n✅ Upload complete!\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

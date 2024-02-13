import type { APIRoute } from "astro";

import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: "dyftajet0",
  api_key: "983936734227578",
  api_secret: import.meta.env.CLOUDINARY_SECRET
});

const uploadStream = async (
  buffer: Uint8Array,
  options: {
    folder: string;
  }
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary
      .uploader
      .upload_stream(options, (error, result) => {
        if (result) return resolve(result);
        reject(error);
      })
      .end(buffer);
  });
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (file == null) {
    return new Response("NO file found", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const result = await uploadStream(uint8Array, {
    folder: "pdf",
  });

  const {
    asset_id: id,
    secure_url :url,
    pages
  } = result

  return new Response(JSON.stringify({
    id, 
    url,
    pages
  }))
};

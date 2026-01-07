import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  const kv = locals.runtime.env.KV;
  const status = (await kv.get("status")) ?? "closed";

  return new Response(JSON.stringify({ status }), {
    headers: { "Content-Type": "application/json" },
  });
};

import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  if (!locals.runtime?.env?.KV) {
    return new Response(
      JSON.stringify({ error: "KV not available" }),
      { status: 500 }
    );
  }
  const kv = locals.runtime.env.KV;
  const status = (await kv.get("status")) ?? "closed";

  return new Response(JSON.stringify({ status }), {
    headers: { "Content-Type": "application/json" },
  });
};

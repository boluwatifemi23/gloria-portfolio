import { NextResponse } from "next/server";

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 200);
  const message = String(body.message || "").trim().slice(0, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Add your name, a valid email and a message." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ error: "The form isn't connected yet. Email me directly instead." }, { status: 503 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "The message didn't send. Email me directly instead." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

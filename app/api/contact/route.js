import { Resend } from "resend";
import { renderContactEmail, renderContactText } from "@/lib/contactEmail";

// Le SDK Resend nécessite le runtime Node.js (pas Edge).
export const runtime = "nodejs";

// Adresses configurables via variables d'environnement.
//  - CONTACT_FROM_EMAIL doit utiliser un domaine vérifié dans Resend.
//  - CONTACT_TO_EMAIL est la boîte qui reçoit les demandes de partenariat.
const FROM = process.env.CONTACT_FROM_EMAIL || "Wenimmo <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL || "contact@wenimmo.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const lastname = String(body?.lastname || "").trim();
  const firstname = String(body?.firstname || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();
  const orias = String(body?.orias || "").trim();
  const message = String(body?.message || "").trim();

  // Validation serveur des champs requis (en plus de la validation client).
  const missing = [];
  if (!lastname) missing.push("nom");
  if (!firstname) missing.push("prénom");
  if (!email) missing.push("email");
  if (!phone) missing.push("téléphone");
  if (missing.length) {
    return Response.json(
      { ok: false, error: `Champs requis manquants : ${missing.join(", ")}.` },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "Adresse email invalide." }, { status: 400 });
  }
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return Response.json(
      { ok: false, error: "Numéro de téléphone invalide." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY absente — envoi impossible.");
    return Response.json(
      { ok: false, error: "Service d'envoi non configuré." },
      { status: 500 }
    );
  }

  const fields = { lastname, firstname, email, phone, orias, message };
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Demande de partenariat CGP — ${firstname} ${lastname}`,
      html: renderContactEmail(fields),
      text: renderContactText(fields),
    });

    if (error) {
      console.error("[contact] Échec Resend :", error);
      return Response.json(
        { ok: false, error: "L'envoi a échoué. Merci de réessayer plus tard." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true, id: data?.id ?? null });
  } catch (err) {
    console.error("[contact] Exception lors de l'envoi :", err);
    return Response.json(
      { ok: false, error: "L'envoi a échoué. Merci de réessayer plus tard." },
      { status: 502 }
    );
  }
}

"use client";

import { useState } from "react";

/**
 * Formulaire de contact CGP (devenir partenaire).
 * Les soumissions sont envoyées par email via la route /api/contact (Resend).
 */
export default function CgpForm() {
  const [invalid, setInvalid] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      lastname: String(data.get("lastname") || "").trim(),
      firstname: String(data.get("firstname") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      orias: String(data.get("orias") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    // Validation simple des champs requis (doublée côté serveur)
    const errors = {};
    ["lastname", "firstname", "email", "phone"].forEach((field) => {
      if (!payload[field]) errors[field] = true;
    });
    if (payload.email && !/^\S+@\S+\.\S+$/.test(payload.email)) errors.email = true;

    setInvalid(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "L'envoi a échoué. Merci de réessayer plus tard.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "L'envoi a échoué. Merci de réessayer plus tard.");
    }
  };

  const fieldClass = (name) => (invalid[name] ? "is-invalid" : undefined);
  const clearError = (name) => setInvalid((prev) => ({ ...prev, [name]: false }));

  return (
    <form className="join__form" onSubmit={handleSubmit} noValidate>
      <h3 className="join__form-title">Devenez partenaire CGP</h3>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="lastname">Nom *</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            autoComplete="family-name"
            required
            className={fieldClass("lastname")}
            onInput={() => clearError("lastname")}
          />
        </div>
        <div className="form__field">
          <label htmlFor="firstname">Prénom *</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            autoComplete="given-name"
            required
            className={fieldClass("firstname")}
            onInput={() => clearError("firstname")}
          />
        </div>
      </div>
      <div className="form__field">
        <label htmlFor="email">Email professionnel *</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className={fieldClass("email")}
          onInput={() => clearError("email")}
        />
      </div>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="phone">Téléphone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            className={fieldClass("phone")}
            onInput={() => clearError("phone")}
          />
        </div>
        <div className="form__field">
          <label htmlFor="orias">
            N° ORIAS <span className="form__optional">(si disponible)</span>
          </label>
          <input type="text" id="orias" name="orias" placeholder="XX XXX XXX" />
        </div>
      </div>
      <div className="form__field">
        <label htmlFor="message">
          Message <span className="form__optional">(optionnel)</span>
        </label>
        <textarea id="message" name="message" rows={3}></textarea>
      </div>
      <button
        type="submit"
        className="btn btn--primary btn--lg btn--block"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          "Envoi en cours…"
        ) : (
          <>
            Envoyer <span className="btn__arrow">→</span>
          </>
        )}
      </button>
      {status === "success" && (
        <p className="form__success">
          Merci&nbsp;! Votre demande a bien été envoyée — notre équipe revient vers vous rapidement.
        </p>
      )}
      {status === "error" && <p className="form__error">{errorMsg}</p>}
    </form>
  );
}

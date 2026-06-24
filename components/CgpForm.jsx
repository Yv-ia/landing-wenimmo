"use client";

import { useState } from "react";

// Validation côté client (doublée côté serveur dans /api/contact).
//  - Email : format standard nom@domaine.tld.
//  - Téléphone : uniquement des chiffres (séparateurs d'affichage tolérés),
//    10 à 15 chiffres (numéro français ou international).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_DISALLOWED_RE = /[^\d\s+().-]/g;

function isValidEmail(value) {
  return EMAIL_RE.test(value);
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

/**
 * Formulaire de contact CGP (devenir partenaire).
 * Les soumissions sont envoyées par email via la route /api/contact (Resend).
 */
export default function CgpForm() {
  const [invalid, setInvalid] = useState({}); // { champ: "message d'erreur" }
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

    // Validation des champs requis + format (doublée côté serveur).
    const errors = {};
    if (!payload.lastname) errors.lastname = "Merci d'indiquer votre nom.";
    if (!payload.firstname) errors.firstname = "Merci d'indiquer votre prénom.";
    if (!payload.email) errors.email = "Merci d'indiquer votre email.";
    else if (!isValidEmail(payload.email))
      errors.email = "Adresse email invalide (ex. : nom@cabinet.fr).";
    if (!payload.phone) errors.phone = "Merci d'indiquer votre téléphone.";
    else if (!isValidPhone(payload.phone))
      errors.phone = "Numéro invalide : uniquement des chiffres (10 minimum).";

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
  const clearError = (name) =>
    setInvalid((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));

  // Téléphone : on retire à la volée tout caractère qui n'est pas un chiffre
  // ou un séparateur courant (espace, +, -, ., parenthèses).
  const handlePhoneInput = (e) => {
    const cleaned = e.target.value.replace(PHONE_DISALLOWED_RE, "");
    if (cleaned !== e.target.value) e.target.value = cleaned;
    clearError("phone");
  };

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
          {invalid.lastname && <p className="form__field-error">{invalid.lastname}</p>}
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
          {invalid.firstname && <p className="form__field-error">{invalid.firstname}</p>}
        </div>
      </div>
      <div className="form__field">
        <label htmlFor="email">Email professionnel *</label>
        <input
          type="email"
          id="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="nom@cabinet.fr"
          required
          className={fieldClass("email")}
          onInput={() => clearError("email")}
        />
        {invalid.email && <p className="form__field-error">{invalid.email}</p>}
      </div>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="phone">Téléphone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            required
            className={fieldClass("phone")}
            onInput={handlePhoneInput}
          />
          {invalid.phone && <p className="form__field-error">{invalid.phone}</p>}
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

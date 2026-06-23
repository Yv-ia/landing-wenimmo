"use client";

import { useState } from "react";

/**
 * Formulaire de contact CGP (devenir partenaire).
 * En attendant un backend / CRM, le formulaire ouvre un email pré-rempli
 * vers contact@wenimmo.com et affiche un message de confirmation.
 */
export default function CgpForm() {
  const [invalid, setInvalid] = useState({});
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Validation simple des champs requis
    const errors = {};
    ["lastname", "firstname", "email", "phone"].forEach((field) => {
      if (!String(data.get(field) || "").trim()) errors[field] = true;
    });
    const email = String(data.get("email") || "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.email = true;

    setInvalid(errors);
    if (Object.keys(errors).length > 0) return;

    const subject = encodeURIComponent(
      `Demande de partenariat CGP — ${data.get("firstname")} ${data.get("lastname")}`
    );
    const body = encodeURIComponent(
      `Nom : ${data.get("lastname")}` +
        `\nPrénom : ${data.get("firstname")}` +
        `\nEmail professionnel : ${data.get("email")}` +
        `\nTéléphone : ${data.get("phone")}` +
        `\nN° ORIAS : ${data.get("orias") || "—"}` +
        `\n\nMessage :\n${data.get("message") || "—"}`
    );
    window.location.href = `mailto:contact@wenimmo.com?subject=${subject}&body=${body}`;

    setSuccess(true);
    form.reset();
  };

  const fieldClass = (name) => (invalid[name] ? "is-invalid" : undefined);
  const clearError = (name) => setInvalid((prev) => ({ ...prev, [name]: false }));

  // Tant que l'utilisateur n'a pas cliqué : on n'affiche que le titre + un CTA.
  // Le formulaire complet apparaît au clic sur « Nous contacter ».
  if (!showForm) {
    return (
      <div className="join__form join__form--collapsed">
        <h3 className="join__form-title">Devenez partenaire CGP</h3>
        <button
          type="button"
          className="btn btn--primary btn--lg"
          onClick={() => setShowForm(true)}
        >
          Nous contacter <span className="btn__arrow">→</span>
        </button>
      </div>
    );
  }

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
      <button type="submit" className="btn btn--primary btn--lg btn--block">
        Envoyer <span className="btn__arrow">→</span>
      </button>
      {success && (
        <p className="form__success">
          Merci&nbsp;! Votre demande a bien été préparée — notre équipe revient vers vous rapidement.
        </p>
      )}
    </form>
  );
}

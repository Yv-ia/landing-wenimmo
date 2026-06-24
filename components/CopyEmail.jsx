"use client";

import { useState } from "react";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback pour les navigateurs sans Clipboard API (contexte non sécurisé)
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // En cas d'échec on ne casse rien : l'adresse reste lisible et sélectionnable
    }
  };

  return (
    <button
      type="button"
      className="copy-email"
      data-copied={copied}
      onClick={handleCopy}
      title="Cliquer pour copier l'adresse e-mail"
      aria-label={`Copier l'adresse e-mail ${email}`}
    >
      <span className="copy-email__address">{email}</span>
      {copied && (
        <span className="copy-email__status" aria-live="polite">
          Copié&nbsp;!
        </span>
      )}
    </button>
  );
}

"use client";

import { useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(email);
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

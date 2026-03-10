document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterEmail = document.getElementById("newsletter-email");
  const newsletterOut = document.getElementById("newsletterOut");

  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = newsletterEmail.value.trim();

    if (!email) {
      newsletterOut.textContent = "Merci de renseigner un email.";
      newsletterOut.style.color = "#a70000";
      return;
    }

    newsletterOut.textContent = "Inscription en cours…";
    newsletterOut.style.color = "#333";

    try {
      const r = await fetch("http://localhost:3000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const j = await r.json().catch(() => ({}));

      if (!r.ok || !j.ok) {
        throw new Error(j.error || "SUBSCRIBE_FAILED");
      }

      if (j.message === "ALREADY_SUBSCRIBED") {
        newsletterOut.textContent = "Cet email est déjà inscrit.";
        newsletterOut.style.color = "#a76b00";
      } else {
        newsletterOut.textContent = "✅ Inscription réussie à la newsletter.";
        newsletterOut.style.color = "#1f7a1f";
        newsletterForm.reset();
      }
    } catch (err) {
      newsletterOut.textContent = "❌ Erreur : " + err.message;
      newsletterOut.style.color = "#a70000";
    }
  });
});
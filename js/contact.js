document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const out = document.getElementById("contactOut");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (out) out.textContent = "Envoi en cours…";

    const data = Object.fromEntries(new FormData(form).entries());

    const payload = {
      name: `${data.prenom || ""} ${data.nom || ""}`.trim() || "—",
      email: (data.email || "").trim(),
      subject: `Contact Gearforge — ${data.telephone ? "Tel: " + data.telephone : "Sans tel"}`,
      message: (data.message || "").trim(),
      prenom: data.prenom || "",
      nom: data.nom || "",
      telephone: data.telephone || "",
    };

    try {
      const r = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || "SEND_FAILED");

      window.location.href = "./merci.html";
    } catch (err) {
      if (out) out.textContent = "❌ Erreur : " + err.message;
      else alert("Erreur : " + err.message);
    }
  });
});
CAW – Vorschaltseite für die Prinzenproklamation

WEBSITE-REPO (CAW-Internetseite):
1. proklamation.html ersetzen
2. proklamation-test.html neu hochladen

BACKEND-REPO (CAW-Proklamation-Backend):
3. backend/server.js als server.js ersetzen

Render:
- PREVIEW_MODE=true  (solange noch nicht öffentlich)
- Optional: PREVIEW_PASSWORD=ein separates Testpasswort
- Wenn PREVIEW_PASSWORD nicht gesetzt ist, verwendet der Testzugang vorübergehend ADMIN_PASSWORD.

Später öffentlich freischalten:
- PREVIEW_MODE=false setzen
- dann proklamation.html wieder durch das eigentliche Formular ersetzen (proklamation-test.html kann bestehen bleiben oder entfernt werden).

Wichtig:
Der Schutz erfolgt serverseitig: /api/request nimmt im Preview-Modus nur Anfragen mit gültigem Testzugangs-Token an.

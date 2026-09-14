CAW PRINZENPROKLAMATION – KOMPLETT-UPDATE
Stand: 14.09.2026

DIESES PAKET ENTHÄLT
=====================
1) Erfolgsseite nach der Teilnahmeanfrage mit deutlichem Spam-Hinweis
2) Hinweis: Rückmeldung innerhalb von bis zu 2 Stunden
3) Proklamationsformular leitet nach erfolgreicher Anfrage auf die Erfolgsseite weiter
4) Neue grafische PDF-Gästeliste im CAW-Stil
5) Alle Gäste in der PDF alphabetisch nach Nachname, dann Vorname sortiert
6) Gästeliste zeigt offen / eingecheckt und aktuelle Summen
7) Neues grafisches PDF-Ticket im CAW-Stil
8) Signierter QR-Code für neue Tickets
9) QR-Scanner direkt in der internen Verwaltungsseite
10) Scan-Ergebnisse: Einlass freigegeben / bereits eingecheckt / ungültig
11) Beim ersten gültigen Scan automatische Eincheckung in der Datenbank
12) Ticketseite mit PDF-Download
13) Apple-Wallet- und Google-Wallet-Unterstützung im Backend vorbereitet
14) E-Mails enthalten zusätzlich eine Plaintext-Version (hilfreich für Zustellbarkeit)
15) Ältere bereits erzeugte Test-QR-Codes werden weiterhin erkannt

A) HAUPT-WEBSITE – Repo CAW-Internetseite
========================================
Diese 4 Dateien ins Hauptverzeichnis des Website-Repos hochladen/ersetzen:

- proklamation.html                    ERSETZEN
- proklamation-verwaltung.html         ERSETZEN
- proklamation-erfolgreich.html        NEU
- proklamation-ticket.html             NEU

assets/style.css und assets/script.js bleiben unverändert.

B) BACKEND – Repo CAW-Proklamation-Backend
==========================================
Im Backend ersetzen/hochladen:

- backend/server.js        -> im Repo als /server.js ERSETZEN
- backend/package.json     -> im Repo als /package.json ERSETZEN

Zusätzlich den Ordner übernehmen:

- backend/wallet-assets/icon.png       -> /wallet-assets/icon.png
- backend/wallet-assets/icon@2x.png    -> /wallet-assets/icon@2x.png

WICHTIG:
Die bestehende DATABASE_URL, BREVO_API_KEY, ADMIN_PASSWORD usw. in Render NICHT löschen.
Nach dem Upload installiert Render wegen der neuen package.json automatisch passkit-generator.

C) SOFORT NUTZBAR OHNE WEITERE KONTEN
=====================================
Nach dem Deploy funktionieren sofort:

- Erfolgsseite + Spam-Hinweis
- HTML-/Text-E-Mails
- Zahlungsworkflow
- grafisches PDF-Ticket
- Ticketseite + PDF-Download
- grafische alphabetische Gästeliste
- Kamera-QR-Scanner in der Verwaltung
- automatische Eincheckung
- Doppel-Scan-Warnung

D) APPLE WALLET – EINMALIGE EINRICHTUNG
=======================================
Die Apple-Wallet-Schaltfläche erscheint automatisch, sobald ALLE folgenden Render-Variablen vorhanden sind:

APPLE_PASS_TYPE_ID
APPLE_TEAM_ID
APPLE_SIGNER_CERT_B64
APPLE_SIGNER_KEY_B64
APPLE_WWDR_B64
APPLE_SIGNER_KEY_PASSPHRASE   (nur falls der private Schlüssel mit Passphrase geschützt ist)

Die Zertifikate/Schlüssel werden als Base64-Text in Render hinterlegt.
Bitte KEINE privaten Schlüssel oder Zertifikate im GitHub-Repo speichern und nicht hier im Chat posten.

E) GOOGLE WALLET – EINMALIGE EINRICHTUNG
========================================
Die Google-Wallet-Schaltfläche erscheint automatisch, sobald ALLE folgenden Render-Variablen vorhanden sind:

GOOGLE_WALLET_ISSUER_ID
GOOGLE_WALLET_CLIENT_EMAIL
GOOGLE_WALLET_PRIVATE_KEY_B64

Auch hier den privaten Schlüssel ausschließlich als Secret in Render speichern.

F) TESTABLAUF
=============
1. Render Backend muss wieder Live sein.
2. Neue Testanfrage über /proklamation.html absenden.
3. Danach muss automatisch /proklamation-erfolgreich.html erscheinen.
4. In Verwaltung anmelden und Zahlung als eingegangen markieren.
5. Ticket-Mail öffnen; PDF-Anhang und Button "Ticket öffnen" prüfen.
6. Ticketseite öffnen und PDF-Button testen.
7. Verwaltungsseite auf einem Handy öffnen.
8. "QR-Code scannen" drücken und Kamerazugriff erlauben.
9. QR-Code auf dem Ticket scannen.
10. Erwartung: grün "EINLASS FREIGEGEBEN".
11. QR-Code ein zweites Mal scannen.
12. Erwartung: rot "BEREITS EINGECHECKT".
13. PDF-Gästeliste öffnen; Namen müssen alphabetisch sortiert sein.

HINWEIS ZU GRUPPENTICKETS
=========================
Eine Buchung bleibt ein gemeinsames Ticket mit einem QR-Code für alle namentlich gemeldeten Personen.
Beim Scan wird die komplette Buchung (z. B. 3 Personen) eingecheckt und alle Namen werden angezeigt.

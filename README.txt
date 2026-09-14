CAW UPDATE – PREISE + TICKET-ADMIN

PREISE NEU:
- Erwachsene / Gäste ab 13 Jahren: 20,00 EUR
- Kinder bis einschließlich 12 Jahre: 12,50 EUR

UPLOAD:
1) CAW-Proklamation-Backend: backend/server.js ersetzen. package.json muss nur ersetzt werden, wenn gewünscht; es wurde nicht inhaltlich geändert.
2) CAW-Internetseite: proklamation.html ersetzen.
3) CAW-Internetseite: proklamation-verwaltung.html ersetzen.
4) CAW-Internetseite: index.html ersetzen. Im Dropdown "Mehr" ist jetzt "Ticket-Admin" verlinkt.

BESTANDSDATEN:
Alte Vorgänge bleiben erhalten. Für neue Vorgänge wird der konkrete Gesamtbetrag in total_cents gespeichert. Alte Vorgänge ohne total_cents werden weiterhin als Altbestand mit der bisherigen 25-EUR-Logik behandelt, damit bestehende Zahlungsaufforderungen nicht stillschweigend verändert werden.

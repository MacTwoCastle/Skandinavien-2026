# Anforderungen PWA Reiseplanung Skandinavien 2026

## Zielbild
Diese Datei sammelt alle fachlichen und technischen Anforderungen fuer die neue Version der Reiseplanungs-PWA.

Status: In Interview-Phase (noch keine Implementierung)

## Problem mit der aktuellen Version
- Aktuelle Version nicht zufriedenstellend.
- Die PDF ist nur eingebunden, aber ohne selbsterklaerende Navigation.
- Keine nutzbare Navigation entlang der Reise-Stationen.
- Keine klare Trennung zwischen Reisebuchungen und Reisetipps.
- Look and feel wirkt zu einfach und nicht ausgereift.

## Muss-Anforderungen (MVP)
- Selbsterklaerende Startseite mit klarer Hauptnavigation.
- Deutliche Trennung in zwei Hauptbereiche: Buchungen und Reisetipps.
- Stationsnavigation fuer alle Reiseetappen (z. B. Luebeck, Kopenhagen, Goeteborg, Blokhus).
- Kritische Aufgaben in unter 10 Sekunden erreichbar.
- Buchungen mit Anreisedaten schnell aufrufbar.
- Direkte Uebergabe an Navigation (Google Maps und Apple Karten) fuer relevante Ziele.
- Offline-Verfuegbarkeit aller reisekritischen Inhalte direkt in der App.
- Reiseplan als eigener, schnell erreichbarer Bereich.
- Kontaktdaten als eigener, schnell erreichbarer Bereich.
- Navigationsadressen pro relevanter Buchung/Tipp direkt verfuegbar.
- Bilder zu den Themen als Bestandteil der Inhalte.

## Soll-Anforderungen
- Modernes, hochwertiges Look and feel statt einfacher statischer Darstellung.
- Stationsbezogene Ansichten mit klaren Call-to-Actions.
- Inhalte kurz und scanbar aufbereiten statt lange Fliesstexte in der App.

## Kann-Anforderungen
- Erweiterte Filter oder Favoriten fuer Tipps.
- Checklisten pro Station.

## Zielgruppen und Nutzungskontext
- Primaere Nutzer: Reisende auf dem Roadtrip Skandinavien 2026.
- Geraete: iPhone Safari (Pflicht), iPad Safari.
- Typische Situationen: unterwegs im Auto, bei Ankunft an Unterkunft, bei spontaner Suche nach Aktivitaeten oder Essen.

## Inhalte und Informationsarchitektur
- Welche Inhalte muessen offline verfuegbar sein: alle reisekritischen Inhalte in nativen In-App-Ansichten.
- Navigationsstruktur: Start -> Buchungen | Reisetipps -> Station -> Detailansicht.
- Priorisierte Startansicht: Schnellzugriff auf Buchungen und stationsbezogene Tipps.
- Externe Inhalte (z. B. Wikipedia): nur als Link, nicht als langer integrierter Volltext.

## Usability und UX
- Leitprinzipien: selbsterklaerend, schnell, stationsorientiert, robust offline.
- Designrichtung: klar und reduziert (hochwertig, ruhig).
- Wichtige User Flows:
	1. Buchung in unter 10 Sekunden oeffnen.
	2. Von Tipp zur Karten-Navigation mit einem Tap.
	3. Pro Station direkt die relevanten Infos sehen.
- Accessibility-Anforderungen:
	- Gute Lesbarkeit und hohe Kontraste.
	- Dynamische Schriftgroessen (iOS Textgroesse).

## PWA und Technik
- Installierbarkeit: erforderlich
- Offline-Verhalten: komplette Informationsnutzung ohne Netz.
- Caching-Strategie: alle inhaltlichen Kernseiten und Schluesselressourcen lokal verfuegbar halten.
- Update-Strategie: nur manuell aktualisieren.
- Browser-/Plattform-Support: iPhone Safari und iPad Safari.
- Kartenlink-Praeferenz: automatisch nach Geraet (Apple Karten oder Google Maps).

## Datenschutz und Sicherheit
- Sensible Daten in der App: Inhalte aus Buchungsbestaetigungen.
- Fehlerkritische Daten: Buchungsdaten und Links zu Reisetipps.
- Umgang mit lokalen Daten: noch offen

## Nicht-Ziele
- Keine langen Fliesstexte in der App.
- Keine Wissenssammlung aus Wikipedia innerhalb der App (nur externe Links).
- Keine Eingabefunktionen oder Formulare in der ersten Version.
- Keine Abhaengigkeit von Reiseplanung.pdf im Hauptfluss.

## Abnahmekriterien
- Nutzer kann in unter 10 Sekunden eine Unterkunftsbuchung mit Anreisedaten oeffnen.
- Nutzer kann von einem Tipp mit einem Tap in eine Karten-App wechseln.
- App bleibt mit aktivem Flugmodus fuer alle reisekritischen In-App-Inhalte voll nutzbar.
- Nutzer erkennt auf der Startseite sofort die Trennung zwischen Buchungen und Reisetipps.
- App laeuft stabil auf iPhone Safari und iPad Safari.
- Neue Inhalte werden erst nach manueller Aktualisierung uebernommen.
- Praktische iPhone-Fertigchecks:
	1. Buchungen schnell auffindbar.
	2. Kartenlinks starten korrekt.
	3. Navigation in wenigen Schritten ohne Umwege.
- Inhalte der Reiseplanung sind als mobile In-App-Ansichten nutzbar, ohne Reiseplanung.pdf.

## Validierungsstand
- Browser-Pruefung lokal erfolgt (2026-08-06).
- Check 1: Buchungen sind ueber Haupttab und Schnellnavigation erreichbar.
- Check 2: Kartenlinks sind pro Buchung und pro Tipp vorhanden.
- Check 3: Stationswechsel und Bereichswechsel funktionieren in wenigen Schritten.
- Offener Rest fuer finales Go: realer iPhone-Safari-Test auf dem Endgeraet.

## Redaktionsworkflow fuer Inhaltsaenderungen
1. Route und Kilometer pflegen:
	- Etappen nur im Datenblock `routeLegs` in der App anpassen.
	- Wertequelle: Reisedaten-Tabelle aus der Reiseplanung.
2. Routenbild austauschen:
	- Bilddatei ersetzen und denselben Dateinamen/Link beibehalten oder Link einmalig aktualisieren.
3. Neue Reisetipps validieren:
	- Erst fachlich pruefen (Adresse, Relevanz, Erreichbarkeit), dann in den Stationsdaten unter `tips` ergaenzen.
	- Danach Linktest je Station (mind. ein Buchungslink und ein Tipp-Link).
4. Abnahme nach jeder Aenderung:
	- Sichtpruefung Mobilansicht, Stationswechsel, Kartenstart, Telefonlinks.

## Offene Fragen fuer das Interview
1. Welche 3 bis 5 konkreten Probleme stoeren Dich an der aktuellen PWA am meisten?
2. Welche Aufgaben muessen waehrend der Reise in unter 10 Sekunden erreichbar sein?
3. Was muss garantiert offline funktionieren?
4. Welche Informationen sind kritisch (z. B. Buchungsdaten, Kontakte, Zeiten)?
5. Welche Geraete nutzt Du real (iPhone, iPad, Desktop)?
6. Was waere fuer Dich ein klares Zeichen: "Diese neue Version ist wirklich besser"?

## Interview-Protokoll
- Runde 1 (2026-08-06):
	- Hauptprobleme: fehlende selbsterklaerende Navigation, keine Stationsnavigation, keine Trennung Buchungen/Reisetipps, zu simples Look and feel.
	- Top-Aufgaben: Buchungen mit Anreisedaten schnell oeffnen; Reisetipps mit direktem Kartenlink aufrufen.
	- Offline-Muss: alles Wissen aus Reiseplanung.pdf.
- Runde 2 (2026-08-06):
	- Geraete: iPhone Safari (Pflicht), iPad Safari.
	- Design: klar und reduziert, hochwertig und ruhig.
	- Nicht-Ziele: keine langen Texte, kein eingebettetes Wikipedia-Wissen, keine Eingaben.
	- Updates: nur manuell aktualisieren.
	- Kritische Daten: Buchungsdaten und Tipp-Links.
- Runde 3 (2026-08-06):
	- MVP-Funktionsliste: Reiseplan, Reisebuchungen, Kontaktdaten, Navigationsadressen, Bilder.
	- Accessibility: hohe Kontraste und dynamische iOS-Textgroessen.
	- Kartenlogik: automatische Auswahl nach Geraet.
	- Release-Definition: noch offen (Frage wurde neu formuliert).
- Abschlussfrage (2026-08-06):
	- Fertigkriterium: Buchungen finden, Kartenlinks starten korrekt, Navigation in wenigen Schritten.
- Umsetzungsphase 1 (2026-08-06):
	- Neue Informationsarchitektur umgesetzt (Reiseplan, Buchungen, Kontakte, Reisetipps).
	- Stationsnavigation umgesetzt.
	- Manuelle Update-Strategie umgesetzt.
	- Tipp-Darstellung auf kurze, scanbare Kontexte verdichtet.
- Umsetzungsphase 2 (2026-08-06):
	- Reiseplan-Details (Route, Organisation, Grenz- und Fährinfos) als native In-App-Inhalte ergänzt.
	- Reiseplanung.pdf aus primären UI-Einstiegen entfernt.
	- Buchungsbereich auf native Detailkarten migriert (ohne PDF-Links).

- Umsetzungsphase 3 (2026-08-06):
	- Isabels stationsbezogene Tipps nach Kriterien kuratiert (lokale Favoriten, weniger Mainstream).
	- In PWA als erweiterte Tipps je Station mit Kartenstart integriert.
	- In LaTeX/PDF als validierte Aktivitätenlisten mit Kartenlinks ergänzt.

- Umsetzungsphase 4 (2026-08-06):
	- Zwei Ebenen für Reisetipps in der PWA eingeführt:
		1. Primärtipps (lokal/abseits Mainstream)
		2. Optionale Klassiker
	- Pro Tipp ein zusätzlicher Internet-Link „Mehr Infos" ergänzt.
	- Technische Unterstützung für Tippbilder mit Vergrößerung (Lightbox) ergänzt; Bilder werden angezeigt, sobald sie pro Tipp hinterlegt sind.

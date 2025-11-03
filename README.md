# HPV – Holzpoltervermessung  
> Einfaches Web-Tool zur Erfassung und Berechnung von Holzpoltern im Forstbetrieb  
![hpv-home](imgs/hpv-home.png)
## 🚀 Projektziel  
Dieses Tool dient der schnellen, mobilen Aufnahme von Holzpoltern: Länge, Breite, Höhe werden erfasst, in Festmeter umgerechnet, und via Druckfunktion (PDF-Print) gespeichert. Ziel: Papier-Zettel umgehen, Zeit sparen und Vereinfachung im Forst-Alltag.  

## Hauptmerkmale  
- Einfache Formular-UI, optimiert für Smartphone/Tablet – kein Stift & Papier nötig.  
- Formulareingaben: Waldbesitzer, Ortsangaben, Polternummern, Länge (m), Breite (m), Höhe (m) → automatische Umrechnung in Festmeter (m³).  
- Abschluss: JavaScript-Printfunktion erstellt eine PDF-ähnliche Druckansicht zur Archivierung oder Weitergabe.  
- Minimalistisch, praktisch – Fokus auf Nutzbarkeit statt Extra-Features.  

![smartphone-ansicht](imgs/HPV.pdf)

## 🧰 Technologie-Stack  
- HTML5 + CSS3  
- JavaScript für Logik (Umrechnung, Validierung, Print)  
- Single-Page Struktur: `index.html`, `logik.js`, `main.css`  
- `imgs/` für evtl. Screenshots oder Verwendung im Formular.  

## 📁 Projekthauptstruktur  
- `index.html` → Hauptformularseite.  
- `logik.js` → enthält die Umrechnungslogik + Druck-Trigger.  
- `main.css` → Styling, mobil-optimiert.  
- `imgs/` → optional Screenshots oder Illustration.  

## 🎯 Wie man es nutzt  
1. Repo klonen:  
   ```bash
   git clone https://github.com/RusmirOmerovic/hpv.git

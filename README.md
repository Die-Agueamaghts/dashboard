# Learning Hub

Der Learning Hub ist eine zentrale, responsive Startseite für Lern- und
Trainingsprogramme. Die einzelnen Angebote öffnen sich direkt in einem neuen
Tab und sind dadurch schnell erreichbar, ohne dass ein Framework oder ein
Build-Schritt benötigt wird.

## Enthaltene Projekte

| Projekt                       | Bereich     | Link                                                                               |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| Conjugation Test              | Französisch | [Öffnen](https://die-agueamaghts.github.io/Conjugation-Test/)                      |
| French Conjugaison Trainer    | Französisch | [Öffnen](https://die-agueamaghts.github.io/FrenchConjugaisonTrainer/)              |
| FrenchFlow                    | Französisch | [Öffnen](https://die-agueamaghts.github.io/FrenchFlow/)                            |
| Français 4                    | Französisch | [Öffnen](https://die-agueamaghts.github.io/francais_4/index.html)                  |
| Français 5                    | Französisch | [Öffnen](https://die-agueamaghts.github.io/francais_5/index.html)                  |
| Eloquenz Trainer              | Sprache     | [Öffnen](https://die-agueamaghts.github.io/Eloquenz-Trainer/Eloquenz_Trainer.html) |
| Grundrechnungen               | Mathematik  | [Öffnen](https://die-agueamaghts.github.io/grundrechnungen/)                       |
| Sprachtrainer                 | Sprache     | [Öffnen](https://die-agueamaghts.github.io/sprachtrainer/)                         |
| Antonyms                      | Sprache     | [Öffnen](https://die-agueamaghts.github.io/antonyms/)                              |
| Islamische Rechtslehre (Fiqh) | Religion    | [Öffnen](https://die-agueamaghts.github.io/fiqh/index.html)                        |

## Funktionen

- Live-Uhrzeit in der Navigation
- Projektsuche mit dynamischer Trefferanzahl
- Light Mode und Dark Mode
- Aurora- und Sunset-Farbpalette
- Gespeicherte Einstellungen via `localStorage`
- Responsive Layout für Desktop, Tablet und kleine Smartphones
- Tastaturfokus und semantische HTML-Struktur

## Lokal starten

Da es sich um eine statische Seite handelt, reicht ein lokaler Webserver oder
das direkte Öffnen von `index.html`. Für die Entwicklung mit VS Code kann die
Datei beispielsweise über eine Live-Server-Erweiterung geöffnet werden.

## Projektstruktur

```text
dashboard/
├── index.html   # Seitenstruktur und Projektlinks
├── styles.css   # Layout, Themes und responsive Darstellung
├── script.js    # Uhr, Suche und gespeicherte Einstellungen
└── README.md    # Projektdokumentation
```

## Veröffentlichen

Das Repository kann direkt über GitHub Pages veröffentlicht werden. Als
Quelle genügt der `main`-Branch mit `index.html` im Projektstamm.

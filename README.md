# 🏥 AI Clinical Documentation Assistant

A professional web application that helps doctors generate structured **SOAP clinical notes** from consultation audio recordings — with multilingual support for **6 Indian languages**.

![Login Page](https://img.shields.io/badge/Status-Prototype-blue) ![Languages](https://img.shields.io/badge/Languages-6-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- **SOAP Note Generation** — Structured Subjective, Objective, Assessment, Plan format
- **Audio Upload & Recording** — Upload files or record consultations directly
- **Patient Consent Management** — Built-in consent verification workflow
- **PDF Export** — Download clinical notes as professional PDF documents
- **Records Management** — Save, view, and manage all generated notes
- **Multilingual UI** — English, Hindi (हिन्दी), Tamil (தமிழ்), Telugu (తెలుగు), Bengali (বাংলা), Marathi (मराठी)
- **Persistent Storage** — Records and language preferences saved in localStorage
- **Responsive Design** — Works on desktop, tablet, and mobile

## 🖼️ Screenshots

### Login Page
Split-screen layout with animated hero and language selector.

### Dashboard
Stats overview, recent notes, and quick-start consultation button.

### SOAP Notes
Color-coded structured clinical notes with S/O/A/P sections.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/SARTHAKSHEWALE05/ai-clinical-docs.git
cd ai-clinical-docs

# Serve locally (any method)
python -m http.server 3000
# or
npx serve .

# Open in browser
# http://localhost:3000
```

> No build step required — pure HTML/CSS/JS.

## 📁 Project Structure

```
ai-clinical-docs/
├── index.html    # Main HTML (all 6 pages as SPA)
├── index.css     # Design system & responsive styles
├── app.js        # App logic, i18n engine, mock data
└── README.md     # This file
```

## 🌐 Supported Languages

| Language | Code | Script |
|----------|------|--------|
| English | `en` | Latin |
| Hindi | `hi` | Devanagari |
| Tamil | `ta` | Tamil |
| Telugu | `te` | Telugu |
| Bengali | `bn` | Bengali |
| Marathi | `mr` | Devanagari |

Switch languages using the 🌐 globe dropdown on the login page or navigation bar.

## 🏗️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, glassmorphism, animations
- **Vanilla JavaScript** — Zero dependencies
- **Google Fonts** — Inter + Noto Sans (Indian scripts)
- **SVG Icons** — Inline, no icon library needed

## 📋 Pages & Flow

1. **Login** → Doctor signs in with name, email, hospital
2. **Dashboard** → Overview of stats and recent notes
3. **New Consultation** → Consent → Audio upload/record → Patient details
4. **Processing** → Animated AI analysis progress
5. **Results** → Generated SOAP notes with PDF/Save options
6. **Records** → Browse and download all saved notes

## ⚠️ Disclaimer

This is a **UI prototype/demo**. The AI clinical note generation is simulated with realistic mock data. It is not intended for actual medical use. All clinical notes should be reviewed by a qualified healthcare professional.

## 📄 License

MIT License — feel free to use, modify, and distribute.

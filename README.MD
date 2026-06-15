# ⏱️ Time Logger

> Log focused work time toward an 8-hour daily goal — runs entirely in your browser.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-2-5A0EF8?logo=daisyui&logoColor=white)

### 🚀 [Try it live →](https://time-logger-ten.vercel.app)

A tiny single-screen tool for tallying chunks of focused work across the day. Punch in hours and minutes for each session, keep adding rows as you go, and the running total (and how much is left of an 8-hour day) updates live. No accounts, no backend — just open the page and start logging.

## ✨ Features

- ➕ Add as many hour/minute entries as you need on the fly
- 🔢 Live running total — sums everything as you type
- 🎯 Tracks remaining time against an 8-hour daily goal
- 🧮 Minutes are auto-converted to fractional hours (e.g. 30 min → 0.50 hrs)
- 📋 Powered by `react-hook-form` for snappy, uncontrolled inputs
- 🎨 daisyUI + Tailwind styling, fully responsive

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite 4 (SWC) |
| Styling | Tailwind CSS 3 + daisyUI |
| Forms | react-hook-form |
| UI Bits | Headless UI + Heroicons |

## 📖 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL. To build a production bundle:

```bash
npm run build
npm run preview
```

## 🙌 Credits

Built by [Mohamed Gado](https://mohamedgado.com).

# Privacy Policy Web

A beautiful privacy policy website built with Next.js and NextUI.

## Prerequisites

Make sure you have Node.js installed (version 18 or higher).
- Download from: https://nodejs.org/

## Getting Started

1. Install dependencies:
```bash
npm install
```

If you encounter any errors, try:
```bash
npm install --legacy-peer-deps
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Features

- ✨ Modern, responsive design with NextUI components
- 🎨 Beautiful gradient backgrounds (purple, blue, pink)
- 🌙 Dark mode support
- 📱 Mobile-friendly responsive layout
- 🎭 Interactive cards with smooth hover effects
- 📌 Sticky header with backdrop blur effect
- 💳 8 comprehensive privacy policy sections
- 📧 Contact section with gradient styling
- 🔗 Footer with additional links
- ⚡ Built with Next.js 14 for optimal performance

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **NextUI** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations

## Project Structure

```
privacy-policy-web/
├── app/
│   ├── page.tsx          # Main Privacy Policy page
│   ├── layout.tsx        # Root layout
│   ├── providers.tsx     # NextUI Provider wrapper
│   └── globals.css       # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

To customize the privacy policy content, edit the `sections` array in `app/page.tsx`.

## Troubleshooting

If you see TypeScript errors in your editor but the app runs fine, try:
1. Close and reopen VS Code
2. Run `npm install` again
3. Restart the TypeScript server (in VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server")


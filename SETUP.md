# Hướng Dẫn Cài Đặt và Chạy Project

## 🚀 Quick Start

### Bước 1: Cài đặt Node.js
1. Truy cập: https://nodejs.org/
2. Download phiên bản LTS (Long Term Support)
3. Cài đặt theo hướng dẫn

### Bước 2: Kiểm tra cài đặt
Mở PowerShell hoặc Command Prompt và chạy:
```bash
node --version
npm --version
```

### Bước 3: Cài đặt dependencies
```bash
cd c:\backup\code\privacy-policy-web
npm install
```

Nếu gặp lỗi, thử:
```bash
npm install --legacy-peer-deps
```

### Bước 4: Chạy development server
```bash
npm run dev
```

### Bước 5: Mở trình duyệt
Truy cập: http://localhost:3000

## 🛠️ Các lệnh khác

### Build production
```bash
npm run build
```

### Chạy production build
```bash
npm start
```

### Lint code
```bash
npm run lint
```

## 📝 Tùy chỉnh nội dung

Chỉnh sửa file `app/page.tsx`, tìm mảng `sections` và cập nhật nội dung:

```typescript
const sections = [
  {
    title: "Tiêu đề của bạn",
    content: [
      "Nội dung đoạn 1",
      "Nội dung đoạn 2",
    ],
  },
  // Thêm sections khác...
];
```

## 🎨 Tùy chỉnh màu sắc

Chỉnh sửa file `tailwind.config.ts` để thay đổi theme colors.

## ⚠️ Xử lý lỗi thường gặp

### Lỗi: "npm is not recognized"
- Node.js chưa được cài đặt hoặc chưa thêm vào PATH
- Giải pháp: Cài đặt lại Node.js

### Lỗi: TypeScript errors trong editor
- Chạy: `npm install`
- Restart VS Code
- Trong VS Code: Ctrl+Shift+P → "TypeScript: Restart TS Server"

### Lỗi: Port 3000 đã được sử dụng
- Chạy trên port khác:
```bash
npm run dev -- -p 3001
```

## 📦 Deploy

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Truy cập: https://vercel.com
3. Import repository
4. Deploy!

### Netlify
1. Build project: `npm run build`
2. Upload folder `.next` lên Netlify

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: NextUI
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy kiểm tra:
1. Node.js version >= 18
2. npm được cài đặt đúng
3. Tất cả dependencies đã được cài

## 🎯 Features

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode support
✅ Smooth animations
✅ SEO-friendly
✅ Fast performance
✅ Modern UI/UX

# AI Digital Competence MVP

MVP UI/UX cho nền tảng đánh giá và phát triển “Required Digital Competence Level for AI” theo 5 nhóm vị trí: CEO, HR, Marketing, Sales/CRM và Kế toán.

## Chạy local

```bash
npm install
npm run dev
```

## Routes chính

- `/` — Landing page
- `/roles` — Chọn vị trí
- `/roles/accounting` — Trang chi tiết Kế toán
- `/roles/ceo`, `/roles/hr`, `/roles/marketing`, `/roles/sales-crm` — Placeholder theo vai trò
- `/dashboard` — Dashboard học tập Kế toán
- `/assessment` — Đánh giá năng lực AI
- `/roadmap` — Lộ trình học AI cá nhân hóa
- `/certificate` — Chứng chỉ và lịch sử hoàn thành
- `/resources` — Thư viện tài nguyên và công cụ AI
- `/framework` — Cơ sở pháp lý & Khung năng lực số

## Cấu trúc

- `src/components` — App shell, role card, level progress, icon và UI dùng chung
- `src/pages` — Các page học tập, đánh giá, tài nguyên, chứng chỉ và not-found
- `src/data/roles.ts`, `src/data/accounting.ts` — Dữ liệu hardcode cho vai trò, level, video, roadmap, assessment, tài nguyên và công cụ AI Kế toán
- `src/types` — TypeScript types

## Kiểm tra production

```bash
npm run build
```

## Deploy GitHub Pages

Repository này đã có workflow tại `.github/workflows/deploy-pages.yml`. Mỗi lần push vào `main`, GitHub Actions sẽ build Vite và triển khai thư mục `dist` lên GitHub Pages.

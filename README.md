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

## Cấu trúc

- `src/components` — App shell, role card, level progress, icon và UI dùng chung
- `src/pages` — Landing, role selection, role detail và not-found
- `src/data/roles.ts` — Dữ liệu hardcode cho 5 vai trò, level, kỹ năng và công cụ AI Kế toán
- `src/types` — TypeScript types

## Kiểm tra production

```bash
npm run build
```

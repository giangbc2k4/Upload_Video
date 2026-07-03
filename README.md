# Upload_Video

Website Next.js để đăng tải và xem video, tích hợp Firebase Authentication và Firestore.

## Tính năng

- Trang đăng nhập và đăng ký.
- Trang upload video.
- Trang quản trị.
- Trang chi tiết theo `videoId`.
- Tích hợp Firebase Auth.
- Module hỗ trợ Firestore.
- Component giao diện dựa trên Bootstrap.

## Công nghệ

- Next.js 15
- React 19
- TypeScript
- Bootstrap 5
- React Bootstrap
- Firebase Auth
- Firestore

## Cấu trúc dự án

```text
src/app/Login/             Login page
src/app/Signup/            Signup page
src/app/Updata/            Upload page
src/app/admin/             Admin page
src/app/youtube/[videoId]  Video detail route
src/app/sv/                Firebase service modules
src/components/            Shared UI components
```

## Cài đặt và chạy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Biến môi trường

Tạo `.env.local` và thêm cấu hình Firebase Web App:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Lệnh npm

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Hướng phát triển

- Đổi route `Updata` thành `Upload`.
- Bổ sung ảnh màn hình và video demo.
- Tài liệu hóa nơi lưu file video.
- Bổ sung tài liệu Firestore Rules.

## Luồng hiện tại và lỗi cấu hình đã biết

Login/Signup use Firebase Auth helpers; `Updata` collects upload data; admin lists/manages entries; `youtube/[videoId]` renders a detail route. Firebase modules live under `src/app/sv/`. The source imports Firebase, but `package.json` currently does not list `firebase`; install it with `npm install firebase` and commit the updated lockfile.

## Thiết kế lưu trữ video

Chỉ dùng Firestore cho metadata (tiêu đề, mô tả, owner UID, URL và thời gian). Lưu file lớn trong Firebase Storage hoặc object storage khác, sau đó ghi URL vào Firestore. Cần quy định loại/kích thước file, tiến trình upload, hủy tác vụ và dọn file khi tạo metadata thất bại.

## Phân quyền

Only authenticated users should create records; only the owner or a server-verified admin should modify/delete them. Hiding the Admin link in React is not security—enforce ownership/custom claims in Firestore and Storage Rules. Test direct access to admin, missing IDs, interrupted uploads and cross-user updates before deploy.

`Updata` appears to be a typo; if renamed to `Upload`, update all links. Also verify the lint script against the installed Next.js version and run a production build.

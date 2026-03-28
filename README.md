# Facebook Ad Management Landing Page

Custom React + Bootstrap + SCSS landing page with a second-page application form.

## Stack
- React (Vite)
- Bootstrap + React-Bootstrap
- SCSS
- Google Font: Roboto
- StaticForms integration for email delivery

## Run locally
```bash
npm install
npm run dev
```

## Configure StaticForms
1. Create a StaticForms account and get your access key.
2. Open `src/pages/ApplicationPage.jsx`.
3. Replace `REPLACE_WITH_YOUR_STATICFORMS_ACCESS_KEY`.
4. Update `redirectTo` to your production URL.

All submitted fields are posted directly to StaticForms and delivered to your configured email inbox.

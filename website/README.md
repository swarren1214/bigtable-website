# BigTable Marketing Site

Static Next.js + Tailwind website used for App Store review URLs.

## Routes

- `/` - marketing home page
- `/privacy` - privacy policy
- `/privacy-policy` - alias to privacy policy
- `/terms` - terms of use
- `/support` - support contact page
- `/delete-account` - account deletion instructions

## Local Development

From repo root:

```bash
npm run dev:website
```

## Production Build

From repo root:

```bash
npm run build:website
```

This app is configured with `output: "export"` in Next.js, so it can be deployed as static files.

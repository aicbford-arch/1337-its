# 1337 IT Solutions Marketing Site

Next.js App Router site for the 1337 IT Solutions venture studio. The landing page lives at
[https://1337its-site.vercel.app](https://1337its-site.vercel.app) and is deployed via Vercel.

## Tech Stack

- Next.js 16 App Router + React 19
- Tailwind CSS v4 (through `@tailwindcss/postcss`)
- Hosted on Vercel

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view changes. Run `npm run build` before deployment to ensure the
static export and API route compile cleanly.

## Contact Form Email Delivery (Resend)

The contact form posts to `/api/contact`, which now sends an email via Resend.

1. Create a Resend account and generate an API key at https://resend.com/api-keys.
2. Set the `RESEND_API_KEY` environment variable locally (`.env.local`) and in the Vercel project.
3. By default messages are sent **from** `cbford@1337itsolutions.com` and delivered to
   `ai.cbford@gmail.com`, with the submitter's email added as the `replyTo` address.
4. Until the `1337itsolutions.com` domain is verified inside Resend, messages will be delivered from
   Resend's default domain (`onboarding@resend.dev`). Once the domain is verified, Resend will send
   directly from `cbford@1337itsolutions.com`.
5. To test without sending real email, use a Resend *test* API key. Resend will accept the request
   and respond with a synthetic ID so you can confirm the form succeeds end-to-end.

### Environment Variables

| Variable         | Required | Description                                       |
| ---------------- | -------- | ------------------------------------------------- |
| `RESEND_API_KEY` | Yes      | Resend secret API key used by `/api/contact`.     |

Store secrets in `/.env.local` for local work and within the Vercel project settings for staging/
production.

### Failure Handling

If the API key is missing or Resend returns an error, the API responds with an error message and the
UI prompts visitors to email `cbford@1337itsolutions.com` directly.

## Deployment

Deployments are handled through Vercel. After merging to `main`, run:

```bash
npm run build
vercel --prod
```

Make sure the `RESEND_API_KEY` environment variable is configured inside Vercel before deploying so
production submissions can send email.

# ZZL Electrical Ltd Google Ads Landing Page

Single-page Next.js landing site for ZZL Electrical Ltd, a licensed Auckland electrician based on North Shore. It is built for phone-call conversions from Google Ads and deploys cleanly to Vercel behind a Cloudflare-managed domain.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment
- Cloudflare DNS / SSL
- GA4 and Google Ads conversion placeholders

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and replace the placeholders:

```bash
NEXT_PUBLIC_BUSINESS_NAME="ZZL Electrical Ltd"
NEXT_PUBLIC_PHONE="022 307 2796"
NEXT_PUBLIC_EMAIL="lhl630221@gmail.com"
NEXT_PUBLIC_SERVICE_AREA="Auckland"
NEXT_PUBLIC_SITE_URL="https://www.example.co.nz"
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GOOGLE_ADS_ID="AW-XXXXXXXXXX"
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL="XXXXXXXXXXXX"
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your-web3forms-access-key"
```

Required before advertising:

- Final domain in `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for the callback form email delivery
- Verified testimonials, project photos, or additional proof points if available

## Callback Form

The homepage callback form submits directly to Web3Forms from the browser.
Create a Web3Forms access key, add it as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in
`.env.local` and in Vercel Project Settings, then redeploy.

## Google Ads Tracking

The phone CTA fires:

- `phone_call_click` event for analytics
- Google Ads `conversion` event when both `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` are set

Use the final Vercel/Cloudflare domain as the Google Ads landing page URL.

## Vercel Deployment

1. Push this project to GitHub.
2. Import the GitHub repository in Vercel.
3. Add the environment variables above in Vercel Project Settings.
4. Deploy the `main` branch.
5. Confirm `/`, `/privacy`, `/robots.txt`, and `/sitemap.xml` are accessible.

## Cloudflare Setup

1. Add the domain to Cloudflare.
2. In Vercel, add the production domain to the project.
3. In Cloudflare DNS, point the domain to Vercel using the records Vercel provides.
4. Enable HTTPS and keep SSL/TLS mode compatible with Vercel.
5. Choose one canonical host, such as `www.example.co.nz`, and redirect the other host to it.
6. Enable basic WAF / bot protection once the site is live.

## Useful Commands

```bash
npm run lint
npm run build
```

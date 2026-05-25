import type { Metadata } from "next";
import { Tracking } from "@/components/Tracking";
import { site } from "@/lib/site";
import "./globals.css";

const title = `ZZL Electrical Ltd | Licensed Auckland Electrician | 24/7 Response`;
const description =
  "Call Aaron at ZZL Electrical Ltd for licensed Auckland electrical repairs, fault finding, rewiring, new build installation, hot water cylinder repairs, and 24/7 emergency response.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: site.siteUrl,
    siteName: site.businessName,
    locale: "en_NZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body>
        <Tracking />
        {children}
      </body>
    </html>
  );
}

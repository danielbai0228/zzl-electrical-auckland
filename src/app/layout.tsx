import type { Metadata } from "next";
import { Tracking } from "@/components/Tracking";
import { site } from "@/lib/site";
import "./globals.css";

const title = `ZZL Electrical Ltd | Licensed Auckland Electrician | 24/7 Response`;
const description =
  "Call Aaron directly for licensed Auckland electrical repairs, fault finding, rewiring, hot water cylinder faults, transparent pricing, and urgent electrical help.";

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

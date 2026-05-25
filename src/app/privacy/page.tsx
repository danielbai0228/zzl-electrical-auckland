import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { site } from "@/lib/site";

export const metadata = {
  title: `Privacy Policy | ${site.businessName}`,
  description:
    "Privacy policy for enquiries, call tracking, analytics, and advertising measurement.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link className="text-sm font-bold text-amber-700" href="/">
          Back to home
        </Link>
        <h1 className="mt-5 text-3xl font-black">Privacy Policy</h1>
        <p className="mt-4 leading-7 text-slate-700">
          {site.businessName} collects enquiry information you choose to send
          by phone or email. This website may use analytics and advertising
          tags to understand visits, measure phone call clicks, and improve ad
          performance.
        </p>
        <h2 className="mt-8 text-xl font-black">Information we may collect</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Contact details, enquiry details, website usage data, device/browser
          information, and advertising conversion events.
        </p>
        <h2 className="mt-8 text-xl font-black">How information is used</h2>
        <p className="mt-3 leading-7 text-slate-700">
          To respond to enquiries, provide electrical services, measure website
          and ad performance, and improve the service experience.
        </p>
        <h2 className="mt-8 text-xl font-black">Contact</h2>
        <p className="mt-3 leading-7 text-slate-700">
          For privacy questions, email{" "}
          <a className="font-bold underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <div className="mt-8">
          <CallButton label={`Call ${site.phone}`} />
        </div>
      </div>
    </main>
  );
}

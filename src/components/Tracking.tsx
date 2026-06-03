import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { site } from "@/lib/site";

export function Tracking() {
  return (
    <>
      {site.gaId ? <GoogleAnalytics gaId={site.gaId} /> : null}
      {site.googleAdsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${site.googleAdsId}');
            `}
          </Script>
          {site.googleAdsConversionLabel ? (
            <Script id="google-ads-conversion" strategy="afterInteractive">
              {`
                window.gtag_report_conversion = function(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  gtag('event', 'conversion', {
                      'send_to': '${site.googleAdsId}/${site.googleAdsConversionLabel}',
                      'value': 1.0,
                      'currency': 'NZD',
                      'event_callback': callback
                  });
                  return false;
                };
              `}
            </Script>
          ) : null}
        </>
      ) : null}
    </>
  );
}

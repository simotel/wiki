import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {
  const {
    i18n: { locales, defaultLocale, localeConfigs },
    siteConfig: { url },
  } = useDocusaurusContext();

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  const basePath = path.replace(/^\/(fa|en)/, '') || '/';

  const hreflangs = locales.map((locale) => {
    const hrefLang = localeConfigs[locale]?.htmlLang || locale;
    const hrefPath =
      locale === defaultLocale ? basePath : `/${locale}${basePath}`;

    return (
      <link
        key={hrefLang}
        rel="alternate"
        href={`${url}${hrefPath}`}
        hreflang={hrefLang}
      />
    );
  });

  // x-default همیشه باید به نسخه defaultLocale اشاره کند
  hreflangs.push(
    <link
      key="x-default"
      rel="alternate"
      href={`${url}${basePath}`}
      hreflang="x-default"
    />
  );

  return <Head>{hreflangs}</Head>;
}

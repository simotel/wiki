import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {
  const {
    i18n: { locales, defaultLocale },
    siteConfig: { url },
  } = useDocusaurusContext();

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  const hreflangs = locales.map((locale) => {
    let hrefLangPath = path;
    if (locale !== defaultLocale) {
      hrefLangPath = `/${locale}${path}`;
    } else {
      // حذف کد زبان برای زبان پیش‌فرض
      if (path.startsWith('/fa/') || path.startsWith('/en/')) {
        hrefLangPath = path.replace(/^\/(fa|en)/, '');
      }
    }

    // حذف / انتهایی اگر در config گفتی نباشه
    if (!hrefLangPath.endsWith('/') && hrefLangPath !== '/') {
      hrefLangPath = hrefLangPath.replace(/\/$/, '');
    }

    return (
      <link
        key={locale}
        rel="alternate"
        href={`${url}${hrefLangPath}`}
        hreflang={locale}
      />
    );
  });

  // hreflang x-default
  hreflangs.push(
    <link
      key="x-default"
      rel="alternate"
      href={`${url}${path}`}
      hreflang="x-default"
    />
  );

  return <Head>{hreflangs}</Head>;
}

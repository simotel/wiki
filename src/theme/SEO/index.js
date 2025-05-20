import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {
  const {
    i18n: { locales, defaultLocale },
    siteConfig: { url },
  } = useDocusaurusContext();

  // آدرس صفحه فعلی، در مرورگر
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  // ساخت لیست تگ‌های hreflang
  const hreflangs = locales.map((locale) => {
    let hrefLangPath = path;
    if (locale !== defaultLocale) {
      hrefLangPath = `/${locale}${path}`;
    } else {
      // برای زبان پیش‌فرض مسیر بدون کد زبان
      if (path.startsWith('/fa/') || path.startsWith('/en/')) {
        hrefLangPath = path.replace(/^\/(fa|en)/, '');
      }
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

  // اضافه کردن تگ x-default
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

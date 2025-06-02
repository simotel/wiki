import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {
  const {
    i18n: { locales, defaultLocale },
    siteConfig: { url },
  } = useDocusaurusContext();

  if (typeof window === 'undefined') return null;

  let path = window.location.pathname;

  // حذف زبان از مسیر برای زبان پیش‌فرض
  if (path.startsWith('/fa/') || path.startsWith('/en/')) {
    const [, lang, ...rest] = path.split('/');
    if (lang === defaultLocale) {
      path = '/' + rest.join('/');
    }
  }

  // حذف / انتهایی مگر اینکه فقط /
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // ساخت لینک canonical
  const canonicalUrl =
    path === '/' ? url : `${url}${path}`;

  const hreflangs = locales.map((locale) => {
    let hrefLangPath = path;
    if (locale !== defaultLocale) {
      hrefLangPath = `/${locale}${path}`;
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

  // hreflang x-default به نسخه پیش‌فرض هدایت شود
  hreflangs.push(
    <link
      key="x-default"
      rel="alternate"
      href={`${url}${path}`}
      hreflang="x-default"
    />
  );

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      {hreflangs}
    </Head>
  );
}

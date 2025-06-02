import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {
  const {
    i18n: { locales, defaultLocale, localeConfigs },
    siteConfig: { url },
  } = useDocusaurusContext();

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  const hreflangs = locales.flatMap((locale) => {
    let hrefLangPath = path;

    // اگر زبان جاری زبان پیش‌فرض نیست، /fa یا ... به مسیر اضافه شود
    if (locale !== defaultLocale) {
      hrefLangPath = `/${locale}${path}`;
    } else {
      // اگر زبان پیش‌فرض هست، /fa یا /en را حذف کن
      hrefLangPath = path.replace(/^\/(fa|en)/, '');
    }

    // حذف اسلش انتهایی
    hrefLangPath = hrefLangPath.replace(/\/$/, '') || '/';

    const fullUrl = `${url}${hrefLangPath}`;

    const tags = [
      <link key={locale} rel="alternate" href={fullUrl} hreflang={locale} />,
    ];

    // اگر locale مثل en-US هست، نسخه‌ی کلی‌ترش (en) رو هم اضافه کن
    if (locale.includes('-')) {
      const genericLocale = locale.split('-')[0];
      tags.push(
        <link key={genericLocale} rel="alternate" href={fullUrl} hreflang={genericLocale} />
      );
    }

    return tags;
  });

  // اضافه کردن x-default
  const defaultHref = `${url}${path.replace(/\/$/, '') || '/'}`;
  hreflangs.push(
    <link key="x-default" rel="alternate" href={defaultHref} hreflang="x-default" />
  );

  return <Head>{hreflangs}</Head>;
}

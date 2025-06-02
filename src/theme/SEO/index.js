import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO() {
  const {
    i18n: { locales, defaultLocale, localeConfigs },
    siteConfig: { url },
  } = useDocusaurusContext();

  // مسیر جاری بدون کد زبان، مثلا /developers یا /fa/developers -> /developers
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  // حذف کد زبان اگر هست
  const basePath = currentPath.replace(/^\/(fa|en)/, '') || '/';

  const hreflangs = locales.map((locale) => {
    // گرفتن کد htmlLang مثل en-US یا fa-IR
    const langCode = localeConfigs[locale]?.htmlLang || locale;

    // اگر زبان پیش فرض است آدرس بدون کد زبان، در غیر اینصورت با کد زبان
    const hrefPath = locale === defaultLocale ? basePath : `/${locale}${basePath}`;

    // اطمینان از اینکه مسیر با / شروع شود
    const normalizedPath = hrefPath.startsWith('/') ? hrefPath : '/' + hrefPath;

    return (
      <link
        key={langCode}
        rel="alternate"
        href={`${url}${normalizedPath}`}
        hreflang={langCode}
      />
    );
  });

  // اضافه کردن فقط یک x-default به صفحه انگلیسی (defaultLocale)
  const xDefaultHref = `${url}${basePath}`;
  hreflangs.push(
    <link key="x-default" rel="alternate" href={xDefaultHref} hreflang="x-default" />
  );

  return <Head>{hreflangs}</Head>;
}

import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

e

  const path =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  const hreflangs = locales.map((locale) => {
    const langCode = localeConfigs[locale]?.htmlLang || locale;

    let hrefLangPath = path;

    if (locale !== defaultLocale) {
      hrefLangPath = `/${locale}${path}`;
    } else {
      // حذف کد زبان در مسیر برای زبان پیش‌فرض
      if (path.startsWith('/fa/') || path.startsWith('/en/')) {
        hrefLangPath = path.replace(/^\/(fa|en)/, '');
      }
    }

    // حذف اسلش انتهایی در صورت نیاز
    if (hrefLangPath !== '/' && hrefLangPath.endsWith('/')) {
      hrefLangPath = hrefLangPath.slice
    }

    return (
      <link
        key={langCode}
        rel="alternate"
        href={`${url}${hrefLangPath}`}
        hreflang={langCode}
      />
    );
  });

  // اضافه کردن x-default فقط یک بار برای زبان پیش‌فرض
  const defaultHref = path.replace(/^\/(fa|en)/, '') || '/';
  hreflangs.push(
    <link
      key="x-default"
      rel="alternate"
      href={`${url}${defaultHref}`}
      hreflang="x-default"
    />
  );

  return <Head>{hreflangs}</Head>;
}

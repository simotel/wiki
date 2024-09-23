// src/components/LanguageSwitcherButton.js

import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useDocusaurusContext } from '@docusaurus/core';

const LanguageSwitcherButton = () => {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const handleLanguageSwitch = () => {
    const newLocale = i18n.currentLocale === 'fa' ? 'en' : 'fa';
    history.push(history.location.pathname.replace(`/${i18n.currentLocale}`, `/${newLocale}`));
  };

  return (
    <button onClick={handleLanguageSwitch} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {i18n.currentLocale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
    </button>
  );
};

export default LanguageSwitcherButton;

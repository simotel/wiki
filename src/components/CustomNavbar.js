// src/components/CustomNavbar.js
import React from 'react';
import { useDocusaurusContext } from '@docusaurus/core';

const CustomNavbar = () => {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;

  return (
    <nav>
      <ul>
        <li>{currentLocale === 'en' ? 'simotel' : 'سیموتل'}</li>
        {/* سایر آیتم‌های navbar را اضافه کنید */}
      </ul>
    </nav>
  );
};

export default CustomNavbar;

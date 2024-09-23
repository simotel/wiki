// src/components/CustomLocaleDropdown.js

import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import IconLanguage from '@theme/Icon/Language'; // می‌توانید آیکن دلخواه خود را وارد کنید
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';

export default function CustomLocaleDropdown() {
  const { i18n } = useThemeConfig();
console.log("s")
  return (
    <LocaleDropdownNavbarItem
      dropdownItemsAfter={[
        {
          label: <Translate id="custom.helpUsTranslate">Help us translate</Translate>,
          to: 'https://my-site.com/help-us-translate',
        },
      ]}
      icon={<IconLanguage />} // اینجا می‌توانید آیکن خود را بگذارید
    />
  );
}

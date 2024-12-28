module.exports = {
	
  markdown: {
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params);

      const replacements = {
       Eng: 'Simotel Docs',
        Fa: 'مستندات سیموتل',
      };
  
      // جایگزینی متغیرها
      for (const [key, value] of Object.entries(replacements)) {
        result.frontMatter.title = result.frontMatter.title?.replaceAll(`{{${key}}}`, value);
      }

      // Create your own front matter shortcut
      if (result.frontMatter.i_do_not_want_docs_pagination) {
        result.frontMatter.pagination_prev = null;
        result.frontMatter.pagination_next = null;
      }

      // Rename an unsupported front matter coming from another system
      if (result.frontMatter.cms_seo_summary) {
        result.frontMatter.description = result.frontMatter.cms_seo_summary;
        delete result.frontMatter.cms_seo_summary;
      }

      return result;
    },
  },
  title: 'Simotel Docs',
  tagline: 'site.tagline' ,
  url: 'https://wiki.simotel.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'warn',
  favicon: 'img/newSimotelFavIcon.svg',
  titleDelimiter:"|",
  
i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },


themeConfig: { 
 
  prism: {
    additionalLanguages: ['php'],
  },
  docs:{
    sidebar:{
      hideable: true,
    }
  },

  navbar: {
    hideOnScroll: true,
    
    logo: {
      alt: 'navbar.logoAlt',
      src: 'img/newSimotelFavIcon.svg',
    },
    items: [
      {
        type: 'localeDropdown',
        position: 'left',
        
      },
      {
        type: 'doc',
        docId: 'pbx/introsimotel',
        to: 'pbx',
        position: 'left',
        label: 'مرکز تماس',
      },
      {
        to: 'developers', 
        label: 'توسعه دهندگان'
      },
      {

        type: 'doc',
        docId: 'autodialer/introad',
        to: 'autodialer',
        position: 'left',
        label: 'ماژول تماس انبوه',
      },
    ],
  },
    footer: {
      style: 'dark',
       copyright: `تمامی حقوق برای شرکت دانش بنیان «نسیم ارتباط آینده» محفوظ است`, 
    },
  },
  
presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
           id: 'default',
        path: 'docs',
		    routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        lastVersion:'current',
        versions:{
            current:{
              label:"v6.4.0 مرکز‌تماس",
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
		
/*----------------------------------------SEO---------------------------------------------*/
 sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
      },
/*----------------------------------------SEO---------------------------------------------*/			
      },
     

    ],
     
],




/*----------------------------------------PWA---------------------------------------------*/
plugins: [

	//   [
	// 	  '@docusaurus/plugin-content-blog',
	// 	  {
	// 		/**
	// 		 * Required for any multi-instance plugin
	// 		 */
	// 		id: 'softphone',
	// 		/**
	// 		 * URL route for the blog section of your site.
	// 		 * *DO NOT* include a trailing slash.
	// 		 */
	// 		routeBasePath: 'intro-softphone',
	// 		/**
	// 		 * Path to data on filesystem relative to site dir.
	// 		 */
	// 		path: './intro-softphone',
	// 	  },
	// ],
 
  
     [
	 
		'@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
        {
            tagName: 'link',
            rel: 'icon',
            href: '/img/LogoSimotel384.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
		  {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/newSimotelFavIcon.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/LogoSimotel384.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
	  	  
    ],
	
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en" , "ar"],
      },
    ],	

  ],
/*----------------------------------------PWA---------------------------------------------*/
};

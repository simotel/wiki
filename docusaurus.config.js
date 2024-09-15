
const  getNavbarConfig  = require('./src/navbarConfig');
const isKorean = process.env.DOCUSAURUS_CURRENT_LOCALE == 'fa' || process.env.DOCUSAURUS_CURRENT_LOCALE == 'en'
console.log(process.env.DOCUSAURUS_CURRENT_LOCALE)
module.exports = {
  title: 'Docs',
  tagline:  'site.tagline' ,
  // tagline: 'به بخش مستندات مرکز تماس SimoTel خوش‌آمدید 👋️',
  url: 'https://docs-simotel.hsy.ir/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'warn',
  favicon: 'img/newSimotelFavIcon.svg',
  //==============js


  //===================
//  organizationName: 'NasimTelecom', // Usually your GitHub org/user name.   	used when you deploy your site with the deploy command.
///  projectName: 'Simotel', // Usually your repo name.							used when you deploy your site with the deploy command.




i18n: {
    defaultLocale: 'fa',
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

// plugins: ['@docusaurus/plugin-google-gtag'],
themeConfig: { 
 
  prism: {
    additionalLanguages: ['php'],
  },
  docs:{
    sidebar:{
      hideable: true,
    }
  },

  // navbar: getNavbarConfig(process.env.DOCUSAURUS_CURRENT_LOCALE != 'undefined' ? 'en':'fa'),
  navbar: {
    hideOnScroll: true,
    title: 'Docs Center',
    logo: {
      alt: 'navbar.logoAlt',
      src: 'img/newSimotelFavIcon.svg',
    },
    items: [
      {
        type: 'localeDropdown', // منوی انتخاب زبان
        position: 'left',
      },
      {
        type: 'doc',
        docId: 'simotel/introsimotel',
        to: 'docs',
        position: 'left',
        label: 'مرکز تماس',
      },
      {
        to: 'docs/developers/api/introapi', 
        label: 'توسعه دهندگان'
      },
      {

        type: 'doc',
        docId: 'autodialer/introad',
        to: 'docs/autodialer/introad',
        position: 'left',
        label: 'ماژول تماس انبوه',
      },
      
  /* {to: '/autodialer/introad', label: 'ماژول تماس‌انبوه', position: 'left'}, */
/*         {
        type: 'docsVersionDropdown',
        docsPluginId: 'autodialer',
      }, */
  {
    to: '/intro-softphone',

   label: 'سافت‌فون', 
   position: 'left',
  },
      {to: '/blog',

       label: 'بلاگ',
      position: 'left'
    },

   {
        href: 'https://forum.mysup.ir',
        label: 'پایگاه دانش',
        position: 'right'
      },
/*
      {
        href: 'https://www.nasimtelecom.com/contact/',
        label: 'تماس با ما',
        position: 'right',
      }, */
/* 		 {
         type: 'docsVersionDropdown',
       } */
    ],
  },

     
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'دسترسی سریع',
          items: [
		  	{
              label: 'SimoTel OS',
              href: 'https://dl.mysup.ir/iso/debian-simotel-10.12.0.s11.ast18.iso',
            },
            {
              label: 'SimoTel PHP connect',
              href: 'https://github.com/simotel/simotel-php-connect',
            },
            {
              label: 'SimoTel laravel connect',
              href: 'https://github.com/simotel/simotel-laravel-connect',
            },
			//{to: '/file/Simotel_V3.edition_12.postman_collection.json',target: '_blank', label: 'Postman V3 e12'},
			{
              label: 'Postman V3 e13',
              href: 'https://dl.mysup.ir/postmansample/Simotel_V3.edition_13.postman_collection.json',
            },

          ],
        },
         {
          title: 'لینک‌های ضروری',
          items: [
	        {
              label: 'My Support',
              href: 'https://mysup.ir/',
            },
		  	{
              label: 'Forum',
              href: 'https://forum.mysup.ir/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/mysup_ir',
            },
          ],
        }, 
        {
          title: 'بیشتر',
          items: [
		  
            {
              label: 'Live Dashboard',
              href: 'https://simotel.mysup.ir/',
            },
            {
              label: 'Live DialPlan',
              href: 'https://dialplan.mysup.ir/',
            },
	        {
              label: 'Postman V2',
              href: 'https://mysup.ir/wp-content/uploads/Simotel.postman_collection.v2.edition.7.json',
            },
            {
              label: 'Old Doc',
              href: 'https://mysup.ir/wp-content/uploads/Simotel.5.1.28.edition.11.pdf',
            },
          ],
        },
      ],
      /* copyright: `تمامی حقوق برای شرکت دانش بنیان «نسیم ارتباط آینده» محفوظ است.`, */
    },
  },
  


presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
           id: 'default',
        path: 'docs',
		    routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        lastVersion:'current',
        // includeCurrentVersion: false,
        versions:{
            current:{
              label:"v6.4.0 مرکز‌تماس",
              // path:"6.2.0"
              
            },
          },
        },
        gtag: {
          trackingID: 'G-46R3LL0HG3',
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
        //trailingSlash: true,
      },
/*----------------------------------------SEO---------------------------------------------*/			
      },
     

    ],
     
],



/*----------------------------------------docs-multi-instance---------------------------------------------*/
/* plugins: [
    [
       '@docusaurus/plugin-content-docs',
      {
        id: 'autodialer',
        path: 'autodialer',
        routeBasePath: 'autodialer',
        sidebarPath: require.resolve('./sidebar-autodialer.js'),
		versions: {
		  current: {
			label: '4.2 🚧',
			},
			4.1: {
			label: '4.1',
			  },
			},  
    }, 
    ],
  ], */
/*----------------------------------------docs-multi-instance---------------------------------------------*/

/*----------------------------------------searchBox---------------------------------------------*/
/* plugins: [
[require.resolve('@cmfcmf/docusaurus-search-local'),{
indexDocs: true,
docsRouteBasePath: '/docs',
indexDocSidebarParentCategories: 2,
indexBlog: false,
blogRouteBasePath: '/blog',
indexPages: false,
language: ["en" , "ar"],
style: undefined,
 lunr: {
tokenizerSeparator: /[\s\-]+/
} 
}]
], */





/*----------------------------------------searchBox---------------------------------------------*/



/*----------------------------------------PWA---------------------------------------------*/
plugins: [

	  [
		  '@docusaurus/plugin-content-blog',
		  {
			/**
			 * Required for any multi-instance plugin
			 */
			id: 'softphone',
			/**
			 * URL route for the blog section of your site.
			 * *DO NOT* include a trailing slash.
			 */
			routeBasePath: 'intro-softphone',
			/**
			 * Path to data on filesystem relative to site dir.
			 */
			path: './intro-softphone',
		  },
	],
  
  
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
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en" , "ar"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
	/* 	translations:{
		  "search_placeholder": "جستجو",
		  "see_all_results": "دیدن تمامی نتایج",
		  "no_results": "موردی یافت نشد.",
		  "search_results_for": "جستجو برای \"{{ keyword }}\"",
		  "search_the_documentation": "جستوجو مستندات",
		  "count_documents_found": "{{ count }} صفحه پیدا شد",
		  "count_documents_found_plural": "{{ count }} صفحه پیدا شد",
		  "no_documents_were_found": "چیزی یافت نشد"
		} */
		
      },
    ],	
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id:'api',
    //     path:'docs/api',
    //     includeCurrentVersion:false,
    //     routeBasePath:'/api',
    //       versions:{
    //       '4.0.0':{
    //         'path':'api_versioned_docs/version-4.0.0',
    //         'label':'API v4'
    //       },
    //     },
    //     sidebarPath:require.resolve('./sidebars_api.js'),
    //   }
    // ],
  ],

/*----------------------------------------PWA---------------------------------------------*/

/* plugins:[
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en" , "ar"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ], */
  // scripts: [
  //   {
  //     src: 'img/custom.js',
  //     async: true,
  //   },
  // ],

};


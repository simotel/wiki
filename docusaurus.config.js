/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SimoTel Docs',
  tagline: 'به بخش مستندات مرکز تماس SimoTel خوش‌آمدید 👋️',
  url: 'https://docs-simotel.hsy.ir/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'warn',
  favicon: 'img/LogoSimotel.svg',
//  organizationName: 'NasimTelecom', // Usually your GitHub org/user name.   	used when you deploy your site with the deploy command.
///  projectName: 'Simotel', // Usually your repo name.							used when you deploy your site with the deploy command.




i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
     localeConfigs: {
      'ar': {
        direction: "rtl"
      } 
    }
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
  /*   gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-46R3LL0HG3',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    }, */
/* algolia: {
      apiKey: '1dfefe00cfc889d95c56779c783338ce',
      indexName: 'simotel',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'Z8VMULKPNW',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    }, */
  
	  
	// hideableSidebar: true,
    navbar: {
		hideOnScroll: true,
      title: 'Docs Center',
      logo: {
        alt: 'SimoTel',
        src: 'img/LogoSimotel.svg',
      },
      items: [
        // {
        //   type:'docsVersion',
          
        //   to:'docs',
        // },
        //-------------navbar item to doc simotel------------
        {
          type: 'doc',
          docId: 'simotel/introsimotel',
          position: 'left',
          label: 'مرکز‌تماس',
        },
        {
          to: 'docs/developers/api/introapi', // file path : /versioned_docs/version-6.2.0/api/1-introapi.md
          label: 'توسعه دهندگان'
        },
        {
          type: 'doc',
          docId: 'autodialer/introad',
          position: 'left',
          label: ' ماژول تماس‌انبوه',
        },
        
		/* {to: '/autodialer/introad', label: 'ماژول تماس‌انبوه', position: 'left'}, */
/*         {
          type: 'docsVersionDropdown',
          docsPluginId: 'autodialer',
        }, */
		{to: '/intro-softphone', label: 'سافت‌فون', position: 'left'},
        {to: '/blog', label: 'بلاگ', position: 'left'},
/*         {
          type: 'search',
          position: 'right',
        }, */
/*    		{
          type: 'docsVersionDropdown',
		  docsPluginId: 'default',
        }, */
 		{
          href: 'https://forum.mysup.ir',
          label: 'پایگاه دانش',
          position: 'right',
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
              href: 'http://dl.mysup.ir/debian-simotel-10.5.0.s8.iso',
            },
            {
              label: 'SimoTel PHP connect',
              href: 'https://github.com/nasimtelecom/simotel-php-connect',
            },
            {
              label: 'SimoTel laravel connect',
              href: 'https://github.com/nasimtelecom/simotel-laravel-connect',
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
		
/*----------------------------------------version---------------------------------------------*/	
/*  		docs: {
				//showLastUpdateTime: true,
			    //showLastUpdateAuthor: true,
				//includeCurrentVersion: true,
  		
				//admonitions: {},
			    //"lastVersion": "current",
				//"versions": {
				//"current": {
				//"label": "6.2",
				//"path": "6.2"
				//		   },							   
				//		} 
				
			    path: 'docs',
				sidebarPath: 'sidebars.js',
				versions: {
				  current: {
					label: '6.3 🚧',
				  },
				  6.2: {
						label: '6.2',
				  },
				}, 			   
		},	  */
/*----------------------------------------version---------------------------------------------*/


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
            href: '/img/LogoSimotel.svg',
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


};


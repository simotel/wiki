module.exports = {


	Autodialer: [
		{
			type: 'category',
			label: 'تماس انبوه',
			items: [
				'autodialer/introad',
				'autodialer/contacts',
				'autodialer/groups',
				'autodialer/announcements',
				'autodialer/trunk_manager',
				'autodialer/campaigns',
				'autodialer/reports',
				'autodialer/dialer.ini',
			],
		},
	],



	/////////////////////////////////// API SimoTel Sidebar//////////////////////////////////
	docs: [

		'developers/introapi',
		{
			type: 'category',
			label: 'SA',
			items: [
				'developers/SimotelAPI/v4/settings',
				'developers/SimotelAPI/v4/ping',
				'developers/SimotelAPI/v4/call-originate',
				{
					'کاربر': ['developers/SimotelAPI/v4/users/users_add',
					
						'developers/SimotelAPI/v4/users/users_search',
						'developers/SimotelAPI/v4/users/users_edit',
						'developers/SimotelAPI/v4/users/users_remove',
					],
					'ترانک': ['developers/SimotelAPI/v4/trunks/trunks_add',
						'developers/SimotelAPI/v4/trunks/trunks_search',
						'developers/SimotelAPI/v4/trunks/trunks_edit',
						'developers/SimotelAPI/v4/trunks/trunks_remove',
					],
					'صف': ['developers/SimotelAPI/v4/queues/queues_add',
						'developers/SimotelAPI/v4/queues/queues_search',
						'developers/SimotelAPI/v4/queues/queues_edit',
						'developers/SimotelAPI/v4/queues/queues_remove',
						'developers/SimotelAPI/v4/queues/queue_addagent',
						'developers/SimotelAPI/v4/queues/queue_pauseagent',
						'developers/SimotelAPI/v4/queues/queue_resumagent',
						'developers/SimotelAPI/v4/queues/queue_removeagent',
						'developers/SimotelAPI/v4/queues/queue_batchaddagent',
						'developers/SimotelAPI/v4/queues/queue_batchpauseagent',
						'developers/SimotelAPI/v4/queues/queue_batchresumagent',
						'developers/SimotelAPI/v4/queues/queue_batchremoveagent',
					],
					'موزیک انتظار': ['developers/SimotelAPI/v4/musiconhold/musiconhold_search'
					],
					'آوا': ['developers/SimotelAPI/v4/announcement/announcements_upload',
						'developers/SimotelAPI/v4/announcement/announcements_add',
						'developers/SimotelAPI/v4/announcement/announcements_search',
						'developers/SimotelAPI/v4/announcement/announcements_edit',
						'developers/SimotelAPI/v4/announcement/announcements_remove',
					],
					'صندوق‌صوتی': ['developers/SimotelAPI/v4/voicemail/voicemail_add',
						'developers/SimotelAPI/v4/voicemail/voicemail_search',
						'developers/SimotelAPI/v4/voicemail/voicemail_edit',
						'developers/SimotelAPI/v4/voicemail/voicemail_remove',
						'developers/SimotelAPI/v4/voicemail/inbox_search',
						'developers/SimotelAPI/v4/voicemail/inbox_download',
					],
					'لیست‌سیاه': ['developers/SimotelAPI/v4/blacklist/blacklist_add',
						'developers/SimotelAPI/v4/blacklist/blacklist_search',
						'developers/SimotelAPI/v4/blacklist/blacklist_edit',
						'developers/SimotelAPI/v4/blacklist/blacklist_remove',
					],
					'لیست‌سفید': ['developers/SimotelAPI/v4/whitelist/whitelist_add',
						'developers/SimotelAPI/v4/whitelist/whitelist_search',
						'developers/SimotelAPI/v4/whitelist/whitelist_edit',
						'developers/SimotelAPI/v4/whitelist/whitelist_remove',
					],
					'فکس': ['developers/SimotelAPI/v4/fax/fax_upload',
						'developers/SimotelAPI/v4/fax/fax_add',
						'developers/SimotelAPI/v4/fax/fax_search',
						'developers/SimotelAPI/v4/fax/fax_download',
					],
					'گزارشات': ['developers/SimotelAPI/v4/report/quick_search',
						'developers/SimotelAPI/v4/report/quick_info',
						'developers/SimotelAPI/v4/report/audio_download',
						'developers/SimotelAPI/v4/report/report_cdr_search',
						'developers/SimotelAPI/v4/report/report_cdr_ordered_id',
						'developers/SimotelAPI/v4/report/queue_search',
						'developers/SimotelAPI/v4/report/queue_search_ordered_id',
						'developers/SimotelAPI/v4/report/queue_details_search',
						'developers/SimotelAPI/v4/report/queue_details_ordered_id',
						'developers/SimotelAPI/v4/report/agent_search',
						'developers/SimotelAPI/v4/report/report_poll',
					],
				},
			]
		},
		{
			type: 'category',
			label: 'Simotel WebHooks',
			items: [
				'developers/SimotelWebhooks/whatis',
				{
					'SimotelWebhooks ': ['developers/SimotelWebhooks/Events/setting', 'developers/SimotelWebhooks/Events/transfer', 'developers/SimotelWebhooks/Events/incoming_call', 'developers/SimotelWebhooks/Events/outgoing_call', 'developers/SimotelWebhooks/Events/exten_added', 'developers/SimotelWebhooks/Events/exten_remove', 'developers/SimotelWebhooks/Events/incoming_fax', 'developers/SimotelWebhooks/Events/outgoing_fax', 'developers/SimotelWebhooks/Events/cdr_queue', 'developers/SimotelWebhooks/Events/voicemail', 'developers/SimotelWebhooks/Events/voicemail_email', 'developers/SimotelWebhooks/Events/survey', 'developers/SimotelWebhooks/Events/cdr', 'developers/SimotelWebhooks/Events/TrunkNewState', 'developers/SimotelWebhooks/Events/TrunkAdded', 'developers/SimotelWebhooks/Events/TrunkRemoved', 'developers/SimotelWebhooks/Events/AutoDialerReport', 'developers/SimotelWebhooks/Events/new_state',],
					'Component Api': ['developers/SimotelWebhooks/DialplanApiComponents/whatis', , 'developers/SimotelWebhooks/DialplanApiComponents/setting', 'developers/SimotelWebhooks/DialplanApiComponents/exten_api', 'developers/SimotelWebhooks/DialplanApiComponents/trunk_api', 'developers/SimotelWebhooks/DialplanApiComponents/ivr_api', 'developers/SimotelWebhooks/DialplanApiComponents/smart_api'],
				}
			],
		},
		//    {
		// 		type: 'category',
		// 		 label: 'کامپوننت‌های API',
		// 		 items: ['developers/APIComponents/setting','developers/APIComponents/exten_api','developers/APIComponents/trunk_api','developers/APIComponents/ivr_api','developers/APIComponents/smart_api',],
		//    },
		{
			type: 'category',
			label: 'مثال‌های کاربردی',
			items: ['developers/Scenarios/smart_api', 'developers/Scenarios/exten_api', 'developers/Scenarios/call_originate'],
		},





		/////////////////////////////////// API SimoTel Sidebar//////////////////////////////////


		{
			'ماژول تماس‌انبوه': [
				'developers/Autodialer_API/introautodialer',
				{
					'مخاطبین': ['developers/Autodialer_API/contact/contact_add', 'developers/Autodialer_API/contact/contact_search', 'developers/Autodialer_API/contact/contact_edit', 'developers/Autodialer_API/contact/contact_delete',],
					'گروه‌ها': ['developers/Autodialer_API/group/group_upload', 'developers/Autodialer_API/group/group_add', 'developers/Autodialer_API/group/group_search', 'developers/Autodialer_API/group/group_edit', 'developers/Autodialer_API/group/group_delete',],
					'کمپین': ['developers/Autodialer_API/campaign/campaign_add', 'developers/Autodialer_API/campaign/campaign_search', 'developers/Autodialer_API/campaign/campaign_edit', 'developers/Autodialer_API/campaign/campaign_delete',],
					'آواها': ['developers/Autodialer_API/announcement/announcement_upload', 'developers/Autodialer_API/announcement/announcement_add', 'developers/Autodialer_API/announcement/announcement_search', 'developers/Autodialer_API/announcement/announcement_edit', 'developers/Autodialer_API/announcement/announcement_delete',],
					'ترانک': ['developers/Autodialer_API/trunk_manager/trunk_manager_search', 'developers/Autodialer_API/trunk_manager/trunk_manager_edit',],
					'گزارشات': ['developers/Autodialer_API/report/report_search', 'developers/Autodialer_API/report/report_search_ordered', 'developers/Autodialer_API/report/report_info',],
				},
				'developers/Autodialer_API/example',
				'developers/Autodialer_API/call_originate',

			],
		},
		{
			type: 'category',
			label: 'احراز هویت دو مرحله ای',
			items: ['developers/two_verify/whatis', 'developers/two_verify/template_sms', 'developers/two_verify/service_activate'],
		},



		/////////////////////////////////// API AutoDialer Sidebar//////////////////////////////////

	],

	/////////////////////////////////// API  AutoDialer Sidebar//////////////////////////////////







	///////////////////////////////////Simotel Docs Sidebar//////////////////////////////////
	Docs: [
		'pbx/introsimotel',
		{
			type: 'category',
			label: 'pbx',
			collapsed: false,
			items: ['pbx/system-intro/pbxsettingintro', 'pbx/system-intro/dialplanintro'],
		},


		{
			'مستندات مرکز‌تماس': [
				{
					'داشبورد مدیریتی': ['pbx/pbx-menu/dashboard/intro', 'pbx/pbx-menu/dashboard/realtime_components', 'pbx/pbx-menu/dashboard/queue_components', 'pbx/pbx-menu/dashboard/general_components',],



					'مرکز مانیتورینگ': ['pbx/pbx-menu/monitor/operator', 'pbx/pbx-menu/monitor/exten'],



					'مرکزتماس': ['pbx/pbx-menu/pbx/users', 'pbx/pbx-menu/pbx/trunks', 'pbx/pbx-menu/pbx/queues', 'pbx/pbx-menu/pbx/groups', 'pbx/pbx-menu/pbx/music_on_hold', 'pbx/pbx-menu/pbx/announcements', 'pbx/pbx-menu/pbx/featur_codes', 'pbx/pbx-menu/pbx/speed_dial', 'pbx/pbx-menu/pbx/blacklist', 'pbx/pbx-menu/pbx/white_list', 'pbx/pbx-menu/pbx/faxes'],



					'صندوق‌صوتی': ['pbx/pbx-menu/voicemail/voice_mailboxes', 'pbx/pbx-menu/voicemail/inbox',],



					'تماس‌بهمنی': ['pbx/pbx-menu/spit-detection/intro', 'pbx/pbx-menu/spit-detection/spit_detect', 'pbx/pbx-menu/spit-detection/auto_spit_detect',],



					'ویرایشگر': ['pbx/pbx-menu/dialplan/intro',
						{ 'کامپوننت‌ها': ['pbx/pbx-menu/dialplan/components/outgoing_route', 'pbx/pbx-menu/dialplan/components/incoming_route', 'pbx/pbx-menu/dialplan/components/autodialer_route', 'pbx/pbx-menu/dialplan/components/ivr', 'pbx/pbx-menu/dialplan/components/ivr_api', 'pbx/pbx-menu/dialplan/components/extension', 'pbx/pbx-menu/dialplan/components/extension_api', 'pbx/pbx-menu/dialplan/components/queue', 'pbx/pbx-menu/dialplan/components/answer', 'pbx/pbx-menu/dialplan/components/agi', 'pbx/pbx-menu/dialplan/components/disa', 'pbx/pbx-menu/dialplan/components/trunk', 'pbx/pbx-menu/dialplan/components/trunk_api', 'pbx/pbx-menu/dialplan/components/announcements', 'pbx/pbx-menu/dialplan/components/callback', 'pbx/pbx-menu/dialplan/components/ring_group', 'pbx/pbx-menu/dialplan/components/followe_me', 'pbx/pbx-menu/dialplan/components/voicemail', 'pbx/pbx-menu/dialplan/components/conference', 'pbx/pbx-menu/dialplan/components/call_completion', 'pbx/pbx-menu/dialplan/components/pickup', 'pbx/pbx-menu/dialplan/components/poll', 'pbx/pbx-menu/dialplan/components/mix_monitor', 'pbx/pbx-menu/dialplan/components/authentication', 'pbx/pbx-menu/dialplan/components/time_condition', 'pbx/pbx-menu/dialplan/components/spit_detection', 'pbx/pbx-menu/dialplan/components/blacklist', 'pbx/pbx-menu/dialplan/components/whitelist', 'pbx/pbx-menu/dialplan/components/jump_in', 'pbx/pbx-menu/dialplan/components/jump_out', 'pbx/pbx-menu/dialplan/components/corrector', 'pbx/pbx-menu/dialplan/components/custom_plan', 'pbx/pbx-menu/dialplan/components/smart_api', 'pbx/pbx-menu/dialplan/components/chanspy', 'pbx/pbx-menu/dialplan/components/page',], },
						'pbx/pbx-menu/dialplan/variables',
					],



					'گزارشات': ['pbx/pbx-menu/reports/intro', 'pbx/pbx-menu/reports/filter', 'pbx/pbx-menu/reports/quick_report', 'pbx/pbx-menu/reports/advanced_report', 'pbx/pbx-menu/reports/custom_report',],



					'‌نگهداری': ['pbx/pbx-menu/maintenance/accounts', 'pbx/pbx-menu/maintenance/groups', 'pbx/pbx-menu/maintenance/account_type', 'pbx/pbx-menu/maintenance/activity_log', 'pbx/pbx-menu/maintenance/server_status',
						{
							'Settings': ['pbx/pbx-menu/maintenance/settings/general_settings', 'pbx/pbx-menu/maintenance/settings/api_settings', 'pbx/pbx-menu/maintenance/settings/update', 'pbx/pbx-menu/maintenance/settings/push_notification',
								'pbx/pbx-menu/maintenance/settings/backup_drive', 'pbx/pbx-menu/maintenance/settings/mail_server', 'pbx/pbx-menu/maintenance/settings/more_settings',],
						},
						'pbx/pbx-menu/maintenance/network', 'pbx/pbx-menu/maintenance/api_accounts', 'pbx/pbx-menu/maintenance/api_logs', 'pbx/pbx-menu/maintenance/system_logs',],




					'پنل‌مدیریتی': ['pbx/pbx-menu/control-panel/backup', 'pbx/pbx-menu/control-panel/ha', 'pbx/pbx-menu/control-panel/ha_logs', 'pbx/pbx-menu/control-panel/pbx_cli',],
				}
			]
		},

		{
			'مباحث پیشرفته': [

				{

					//'سرویس HA': ['pbx/advance-settings/ha-service/intro'],				
				},
				'pbx/advance-settings/simotelupdate', 'pbx/advance-settings/simotelhelper_tool', 'pbx/advance-settings/simotel.ini', 'pbx/advance-settings/create_ami_user', 'pbx/advance-settings/matchpattern', 'pbx/advance-settings/call_record_storage',
			]
		},
	],
	///////////////////////////////////Simotel Docs Sidebar//////////////////////////////////


};













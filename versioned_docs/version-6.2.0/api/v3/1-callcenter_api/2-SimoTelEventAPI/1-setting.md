---
sidebar_position: 1
---


# تنظیما‌ت‌ SEA

برای مشاهده تنظیمات مربوط به بخش SEA به `Maintenance > Settings > API Settings`  مراجعه فرمایید،در قسمت Simotel Event API بخش‌های متفاوتی وجود 
دارد که در پایین به تشریح هرکدام می‌پردازیم


## Simotel Event API		

### API Enabled
 مشخص می‌کند سرویس SEA فعال باشد یا خیر.
 
### API Version
سیموتل توانایی ارسال اطلاعات به سمت وب‌سرویس تحت فرمت‌های مختلف را دارد، بطور کلی دوقالب اصلی وجود دارد

- سرویس های G (General): در سرویس های G تمام رویداد ها منحصرا به آدرس وب‌سرویس ارسال می گردند و فراهم کننده، رویدادها را با استفاده از پارامتر event_name تفکیک می کند.

- سرویس های Rest: در سرویس های Rest، نام رویداد به انتهای آدرس اضافه شده و سپس اطلاعات به سمت وب‌سرویس ارسال می‌شوند.

نمونه‌ فراخوانی rest


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```shell
Call <WebService_address>/newstate
Call <WebService_address>/cdr

```

### API Method

- Get: سیموتل داده‌ها را در قالب پارامتر به سمت وب‌سرویس ارسال می‌کند.

- Post: از ورژن ۴ (Rest4، G4)، داده‌ها با فرمت json در بدنه درخواست قرار گرفته و به سمت WebService ارسال می گردد. در ورژن های ۲ و ۳ همانند GET به صورت پارامتر ارسال می‌گردد.


#### نمونه فراخوانی سرویسG4:

<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

    
	curl -u username:password --location --request GET \
	'http://192.168.51.193/call/?event_name=NewState&exten=991&state=Unavailable' --data-raw ''
    

</TabItem>
<TabItem value="Post">


	curl -u username:password --location --request POST 'http://192.168.51.193/call/' \
	--header 'Content-Type: application/json' \
	--data-raw '{
    "event_name": "NewState",
    "exten": "991",
    "state": "Unavailable"
	}'


</TabItem>
</Tabs>


#### نمونه فراخوانی سرویسRest4:

<Tabs
    defaultValue="Post"
    values={[
        {label: 'Get', value: 'Get'},
        {label: 'Post', value: 'Post'},
    ]}>
<TabItem value="Get">

    
	curl -u username:password --location -- \
	request GET 'http://192.168.51.193/call/NewState?event_name=NewState&exten=991&state=Unavailable'
    

</TabItem>
<TabItem value="Post">


	curl -u username:password --location --request POST 'http://192.168.51.193/call/NewState' \
	--header 'Content-Type: application/json' \
	--data-raw '{
    "event_name": "NewState",
    "exten": "991",
    "state": "Unavailable"
	}'


</TabItem>
</Tabs>


### API Events
در این قسمت اطلاعات و رویدادهای سیستم دسته‌بندی شده‌اند و بسته به نیاز، شما مشخص می‌کنید چه اطلاعاتی باید به سمت WebService ارسال شود، رویدادها و اطلاعت 
آنها بصورت دقیق‌تر در بخش‌های آینده بررسی می‌شوند.

### API Address
در اینجا نیز آدرس وب‌سرویس قرار می‌گیرد.

### API Username
در صورتی که احرازهویتی از سمت وب‌سرویس انجام می‌شود،نام کاربری اینجا وارد می‌شود.

### API Password
در صورتی که احرازهویتی از سمت وب‌سرویس انجام می‌شود،رمزعبور اینجا وارد می‌شود.

:::tip نکته 
در برخی از رویداد‌های  SEA پارامتری به نام `unique_id` وجود دارد. به ازای هر تماسی که در سیستم تولید می‌شود یک
شناسه یکتا تولید می‌شود، بنابراین شما با استفاده از unique_id تماس می‌توانید رویدادهای مختلف مربوط به یک تماس را شناسایی کنید.
:::
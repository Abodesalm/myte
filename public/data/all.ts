


const accounts = [
    {name:'WhatsApp',url:'https://wa.me/0966592437169',icon:'WA'},
    {name:'Telegram',url:'www.te.me',icon:'TE'},
    {name:'Discord',url:'https://discord.gg/s8rhJ8qgNF',icon:'DI'},
    {name:'Facebook',url:'https://www.facebook.com/profile.php?id=61555551359909&mibextid=ZbWKwL',icon:'FB'},
    {name:'Instagram',url:'https://www.instagram.com/myte.team?igsh=NHFvajRuajQ3ZnNq',icon:'IN'},
    {name:'TikTok',url:'https://vt.tiktok.com/ZSFNeJuVs/',icon:'TT'},
    {name:'myte.social@gmail.com',url:'mailto:myte.social@gmail.com',icon:'EM'}
]

const projects = [
    {title:'موقع لمطعم', url:'https://abodesalm.github.io/restaurant', disc:"موقع فرونت اند يعرض جميع مزايا مطعم 'Gericht'", type:'web'},
    {title:'', url:'', disc:'', type:''},
    {title:'', url:'', disc:'', type:''},
    {title:'', url:'', disc:'', type:''},
    {title:'', url:'', disc:'', type:''},
    {title:'موقع صحة نفسية', url:'https://safeelictron.netlify.app', disc:'موقع بسيط يختبر صحتك النفسية', type:'web'},
    
]

const why = [
    {title:'أسعار مناسبة جدا', icon:'price'},
    {title:'مدة قصيرة في تنفيذ الخدمات', icon:'lesstime'},
    {title:'جودة عالية جدا', icon:'high'},
    {title:'تقديم جميع الخدمات التي تحتاجها', icon:'all'},
    {title:'خدمة عملاء على مدار 24 ساعة', icon:'time'},
    {title:'تخفيضات تصل 60%', icon:'lessprice'},
    {title:'تواصل دائم مع العميل و عرض التقدم له', icon:'contact'},
]

const about = [
    'مؤسسة إلكترونية مركزها في المملكة العربية السعودية.',
    'رغم ذلك تستطيع طلب خدمتك من أي مكان في العالم !',
    'نقدم جميع الخدمات التي يمكن أن تتخيلها في المجال الإلكتروني.',
    'أهم شيء بالنسبة لنا هو رضى العميل التام.',
    '',
    '',
    'لدينا أعضاء في المؤسسة من مختلف دول العالم , لذا لن تحس بأنك غريب.',
    'إن كنت تريد الانضمام إلينا فلا تتردد بالتواصل معنا !',
]

const services = {
    'web':{name:'برمجة مواقع  الويب', features:[
        {title:'موقع شخصي'},
        {title:'موقع لشركة أو منتج'},
        {title:'متجر إلكتروني'},
    ]},
    'mob':{name:'برمجة تطبيقات الهاتف', features:[
        {title:'تطبيقات الهاتف للأندرويد أو الآيفون'},
        {title:'تطبيقات متاجر إلكترونية'},
        {title:'تطبيقات تواصل اجتماعي'},
    ]},
    'des':{name:'تصميم و مونتاج', features:[
        {title:'تصميم شعارات و بوسترات و صور حسب الطلب'},
        {title:'مونتاج الفيديوهات بجميع أنواعها'},
        {title:'تصميم مجسمات و منتجات ثلاثية الأبعاد'},
        {title:'تعليق صوتي'},
        {title:'إنتاج إعلانات و حملات دعائية'},
    ]},
    'vis':{name:'تصميم هوية بصرية', features:[
        {title:'تصميم لوغو و براند متكامل'},
        {title:'اختيار ألوان متناسقة تناسبك'},
        {title:'تصميم خطوط خاصة بك'},
        {title:'تصميم منتجات تجارية'},
    ]},
    'cyb':{name:'خدمات الأمن الإلكتروني', features:[
        {title:'خدمات اختبار الاختراق'},
        {title:'كشف الثغرات الأمنية في المواقع و التطبيقات'},
        {title:'تأمين الحماية الإلكترونية الكاملة'},
    ]},
    'ofc':{name:'خدمات جامعية و مكتبية', features:[
        {title:'خدمات في مختلف البرامج المكتبية'},
        {title:'شرح و تقديم أفكار عملية و إرشادية'},
        {title:'كتابة نصوص و سكربتات'},
    ]},
    'oth':{name:'خدمات أخرى', features:[
        {title:'خدمات في البرمجة بمختلف مجالاتها'},
        {title:'كتابة نصوص و سكربتات فيديوهات'},
        {title:'خدمات في مختلف برامج Adobe'},
        {title:'دعم حسابات التواصل الاجتماعي'},
    ]},
}

const policy = {
    'buy':[
        'جميع العقود الرسمية في المؤسسة يتم رفعها على موقع المؤسسة ، و أي عقد غير موجود على موقع المؤسسة فهو عقد غير رسمي.',
        'بشكل عام نحن نتبع سياسة الدفع العادل مما يضمن حق المؤسسة و حق العميل ، فيدفع العميل مبلغ مقدم ليتم البدء بالخدمة و يتم توضيح هذا المبلغ في فاتورة الخدمة ، و بعد الانتهاء من الخدمة و تأكد العميل منها يدفع بقية المبلغ و من ثم يستلم الخدمة بشكل تام.',
        'يجب على العملاء التواصل مع الحسابات الخاصة بالاستقبال ، لا يتم تقديم أي فاتورة في مكان غير حسابات المؤسسة الرسمية.',
        'لا يتم استرجاع أي مبلغ مدفوع إلا إن كان هناك خلل في الخدمة و الخلل صادر عن المؤسسة ، و لديك مهلة يوم واحد بعد الدفع لاسترجاع المبلغ في هذه الحالة.',
        'عند موافقتك على عقد الخدمة فأنت توافق على كل ما فيه من شروط ، و في حالة مخالفة أحدها سيتم إحالة الأمر إلى القانون.',
        'لا يتم قبول أي مطالبات تنشأ عن إهمال أو خطأ من المستخدم.',
    ],
    'sens':[
        'لن يتم حفظ أي بيانات حساسة لأي عميل لدينا.',
        'تم إنشاء هذا الموقع فقط لتصفح الخدمات و رؤية سياساتنا و الفواتير و ما إلى ذلك ، و ليست غايته أبدا الاحتفاظ ببيانات أي زائر له.',
    ]
}

/*
Websites :	- small : +200 R.S		- medium : +1,600 R.S
Mobile Apps :	- small : +400 R.s 		- medium : +1,800 R.S
Graphic Design :
  - Photo : +20 R.S.
  - Montage : 	50 R.S	For Minute.
  - Voice-Over :	20 R.S
	- Small Pack : 	2 Photos , 30s Video :	          	80 R.S.	( 100 R.S )
	- Medium Pack :	3 Photos , 1m Video : 	          	120 R.S	( 200 R.S )
	- Large Pack :	5 Photos , 2m Video , Voice-Over :	240 R.S	( 300 R.S )
Visual Idenity :
  - Logo :      +100 R.S.
  - colors :    10 R.S.
  - font :      +60 R.S.
	- Small Pack : 	Logo , Colors  :			                        100 R.S.  (200)
	- Medium Pack :	Logo , Colors , Font , Pattern  :	            230 R.S.  (500)
	- Large Pack :	Logo , Colors , Font , Pattern , MockUps  :   260 R.S.  (650)
Write / Script :	+20 R.S

*/


const prices = {
    web : {sm:200, lg:1600},
    apk : {sm:400, lg:1800},
    des : {ph:20, mo:50, vo:20, sm:80, md:120, lg:240},
    vis : {lo:100, co:10, fo:60, sm:100, md:230, lg:260},
    oth : {wr:20},
    pac : {
        des:[
            {ty:'sm',pr:80,pe:'20%',ti:'باقة صغيرة',fe:['صورتين','فيديو 30 ثانية']},
            {ty:'md',pr:120,pe:'40%',ti:'باقة ممتازة',fe:['3 صور','فيديو 60 ثانية']},
            {ty:'lg',pr:240,pe:'30%',ti:'باقة أسطورية',fe:['5 صور','فيديو 120 ثانية','تعليق صوتي']}
        ],
        vis:[
            {ty:'sm',pr:100,pe:'40%',ti:'باقة صغيرة',fe:['تصميم لوغو','تنسيق لوني']},
            {ty:'md',pr:230,pe:'55%',ti:'باقة ممتازة',fe:['تصميم لوغو','تنسيق لوني','تنسيق خط مناسب','تصميم pattern خاص بك']},
            {ty:'lg',pr:260,pe:'60%',ti:'هوية تجارية كاملة',fe:['تصميم لوغو','تنسيق لوني','تنسيق خط مناسب','تصميم pattern خاص بك','تصميم MockUps']}
        ]
    }
}


export {
    accounts,
    why,
    projects,
    services,
    about,
    policy,
    prices
}
export  default  function ArtistDetails()
{
    const features = [


        { name: 'سیستم صوتی', description: 'دارد' },
        { name: 'سایر تجهیزات و اکسسوری ها', description: 'ندارد' },
        { name: 'تعداد اعضای گروه', description: '15' },
        { name: 'مانیتور و سیستم پخش', description: 'دارد' },
        { name: 'استیج', description: 'دارد' },
        { name: 'اجرا در عروسی', description: 'بله' },
        { name: 'اجرا در جشن ها', description: 'بله' },
        { name: 'اجرا در کافه و رستوران', description: 'خیر' },
        { name: 'قابلیت ویژه', description: 'اجرای زنده تمام نوازندگان بدون استفاده از ریتم کیبرد ' },
    ]
    return(<>
        <div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </>)
}

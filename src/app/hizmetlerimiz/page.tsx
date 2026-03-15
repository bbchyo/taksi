import { Car, Plane, Building2, MapPin, CheckCircle2, Navigation, CreditCard } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Erzincan Şehir İçi Taksi",
      desc: "Erzincan merkez ve tüm mahalleler arasında hızlı ve ekonomik VİP ulaşım. Her mesafede hizmet veriyoruz.",
      features: [
        "Devlet hastanesi ve araştırma hastanesi transferleri",
        "Okul, hastane, alışveriş merkezi ulaşımı",
        "Gece geç saatlerde güvenli ulaşım",
        "Kredi kartı ile ödeme imkanı"
      ],
      icon: <Building2 className="w-10 h-10" />
    },
    {
      title: "Havalimanı & Otogar Transfer",
      desc: "Erzincan Havalimanı ve Şehirlerarası Otobüs Terminali transferlerinde güvenilir VİP hizmet.",
      features: [
        "Uçuş saatine göre planlı karşılama",
        "Karşılama ve bagaj desteği",
        "Hızlı erişim ve net bilgilendirme",
        "Konforlu ve temiz araçlar"
      ],
      icon: <Plane className="w-10 h-10" />
    },
    {
      title: "Şehirlerarası & Özel Transfer",
      desc: "Erzincan'dan çevre il ve ilçelere (Kemaliye, İliç, Refahiye, Tercan vb.) konforlu VİP taksi hizmeti.",
      features: [
        "Aile ve iş seyahatleri için özel araç",
        "Esnek mola ve güzergah seçenekleri",
        "Günübirlik tur planlaması",
        "Ergan Dağı ve çevre geziler"
      ],
      icon: <Navigation className="w-10 h-10" />
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <header className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/10 skew-y-3 translate-y-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-4 block">VİP Kalitede Hizmet</span>
          <h1 className="text-4xl lg:text-7xl font-black mb-6">Hizmetlerimiz</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Erzincan VİP Taksi ile her rota için hazırız. Şehir içi, havalimanı ve her türlü özel transfer için 7/24 hizmetinizdeyiz.
          </p>
        </div>
      </header>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <div key={i} className={`flex flex-col lg:items-center gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div className="lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-primary-500 rounded-[3rem] rotate-3 scale-[1.02] group-hover:rotate-6 transition-transform -z-10"></div>
                  <div className="relative bg-white p-10 rounded-[3rem] border border-neutral-100 shadow-2xl flex items-center justify-center min-h-[200px]">
                    <div className="text-primary-600 scale-[2] transform group-hover:scale-[1.8] transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-black text-neutral-900 leading-tight">{service.title}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed font-medium italic">{service.desc}</p>
                  </div>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 group hover:bg-primary-50 hover:border-primary-100 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-neutral-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-neutral-900 mb-8">VİP Taksi Çağırmaya Hazır Mısınız?</h2>
          <p className="text-lg text-neutral-600 font-medium mb-12 max-w-2xl mx-auto">
            Sadece bir telefon uzağınızdayız. Arayın veya WhatsApp&apos;tan konum gönderin, hemen gelelim.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:05518593581" className="w-full sm:w-auto px-10 py-5 bg-neutral-900 text-white rounded-2xl font-black text-xl hover:bg-neutral-800 transition-colors shadow-xl">Hemen Ara</a>
            <a href="https://wa.me/905518593581" target="_blank" className="w-full sm:w-auto px-10 py-5 bg-green-500 text-white rounded-2xl font-black text-xl hover:bg-green-600 transition-colors shadow-xl">WhatsApp&apos;tan Yaz</a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Wallet, Info, HelpCircle, Navigation, MapPin } from "lucide-react";
import FareCalculator from "@/components/FareCalculator";

export default function FaresPage() {
  const airportFares = [
    { loc: "Merkez-Dörtyol", price: "320 ₺" },
    { loc: "Otogar", price: "170 ₺" },
    { loc: "Tren Garı", price: "300 ₺" },
    { loc: "Hilton Otel", price: "240 ₺" },
    { loc: "Alemdar Otel", price: "280 ₺" },
    { loc: "Kent & Ariza Otel", price: "320 ₺" },
    { loc: "Simav & Meva Otel", price: "350 ₺" },
    { loc: "Paradise Otel", price: "340 ₺" },
    { loc: "Mazlum Konak Otel", price: "350 ₺" },
    { loc: "Öğretmen Evi", price: "280 ₺" },
    { loc: "Polis Evi", price: "370 ₺" },
    { loc: "Astsubay Ordu Evi", price: "300 ₺" },
    { loc: "Subay Ordu Evi", price: "400 ₺" },
    { loc: "Üniversite Yerleşkesi", price: "800 ₺" },
    { loc: "Polis Okulu", price: "800 ₺" },
    { loc: "Araştırma Hastanesi", price: "350 ₺" },
    { loc: "Çağlayan", price: "1250 ₺" },
    { loc: "Erğan Dağı", price: "700 ₺" },
    { loc: "59. Topçu Tuğayı", price: "450 ₺" },
    { loc: "Org. Sanayi", price: "700 ₺" },
    { loc: "Cezaevi", price: "700 ₺" },
    { loc: "KYK Erzincan Kız Yurdu", price: "320 ₺" },
    { loc: "KYK Salih Baba Kız Yrd.", price: "340 ₺" },
    { loc: "Mengücek Gazi Kız Yrd.", price: "800 ₺" },
    { loc: "KYK Piri Muh. Erk. Yrd.", price: "450 ₺" },
    { loc: "KYK Piri Sami Erk. Yrd.", price: "450 ₺" },
    { loc: "KYK Terzibaba Kız Yrd.", price: "450 ₺" }, // Added based on context
  ];

  const faqs = [
    { q: "Erzincan taksi ücretleri ne kadar?", a: "Erzincan'da taksi açılış ücreti yaklaşık 30 TL, km başı ücret ise yaklaşık 20 TL'dir. Gece tarifesinde (22:00-06:00) %25 ek ücret uygulanır." },
    { q: "Gece tarifesi ne zaman başlar?", a: "Gece tarifesi 22:00'de başlar ve sabah 06:00'da sona erer. Bu saatler arasında normal ürece %25 ek ücret eklenir." },
    { q: "Havalimanı taksi ücreti ne kadar?", a: "Erzincan merkez ile havalimanı arası taksi ücreti mesafeye göre değişir. Kesin fiyat için lütfen bizi arayın: 0501 641 07 24" },
    { q: "Bekleme ücreti var mı?", a: "Evet, taksi bekletildiğinde dakika başı yaklaşık 1.5 TL bekleme ücreti uygulanır. Bu ücret taksimetre tarafından otomatik olarak hesaplanır." },
  ];

  return (
    <div className="pt-32 pb-20">
      <header className="py-20 bg-neutral-50 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Şeffaf ve Net Fiyatlar</span>
          <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 mb-6">Ücret Tarifesi</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Erzincan Havalimanı Taksi ve Otogar resmi taksi durağı olarak, yolcularımıza şeffaf ve adil bir fiyat politikası sunmak önceliğimizdir.
          </p>
        </div>
      </header>

      {/* Calculator Component */}
      <section className="py-24 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 text-white space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black">Tahmini Ücret Hesaplama</h2>
                <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
            </div>
            <FareCalculator />
        </div>
      </section>

      {/* Detailed Prices */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <div className="bg-primary-500 p-2 rounded-xl">
              <MapPin className="w-6 h-6 text-neutral-900" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-neutral-900">Popüler Güzergah Ücretleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {airportFares.map((f, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary-200 transition-all hover:-translate-y-1">
                <span className="font-bold text-neutral-700">{f.loc}</span>
                <span className="font-black text-primary-600 text-lg py-1 px-4 bg-primary-50 rounded-full">{f.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-neutral-50 rounded-3xl border border-neutral-200 flex items-start gap-4 italic text-neutral-500 text-sm max-w-3xl mx-auto">
            <Info className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <p>* Yukarıdaki ücretler tahmini/ortalama değerlerdir. Güncel resmi tarife ve taksimetre açılışı hakkında en kesin bilgiyi araç içerisindeki taksimetreden veya iletişim numaralarımızdan öğrenebilirsiniz.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-neutral-900 flex items-center justify-center gap-4">
              <HelpCircle className="w-10 h-10 text-primary-600" />
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{faq.q}</h4>
                <p className="text-neutral-500 font-medium leading-relaxed italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

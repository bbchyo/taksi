import Image from "next/image";
import { ShieldCheck, Droplets, Wind, User } from "lucide-react";

export default function VehiclesPage() {
  const features = [
    { title: "Her Zaman Temiz", desc: "Araçlarımız her gün dezenfekte edilir ve iç-dış temizliği titizlikle yapılır.", icon: <Droplets className="w-6 h-6" /> },
    { title: "Geniş Bagaj Hacmi", desc: "Havalimanı ve otogar transferleriniz için valizlerinize uygun geniş bagaj alanı.", icon: <User className="w-6 h-6" /> },
    { title: "Konforlu İç Mekan", desc: "Yolculuğunuzun her anında konforun tadını çıkarmanız için bakımlı ve yeni araçlar.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Klima ve Hava Temizliği", desc: "Mevsim ne olursa olsun, yolculuğunuz ideal ısıda ve temiz bir havada geçer.", icon: <Wind className="w-6 h-6" /> },
  ];

  return (
    <div className="pt-32 pb-20">
      <header className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Filomuz</span>
          <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 mb-6">Araçlarımız</h1>
          <p className="text-xl text-neutral-600 max-w-2xl font-medium leading-relaxed italic">
            Konfor ve güvenlik ilk önceliğimizdir. Pırıl pırıl, bakımlı VİP araçlarımızla her an yanınızdayız.
          </p>
        </div>
      </header>

      {/* Real Taxi Photos Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black text-neutral-900">Taksilerimiz</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white hover:shadow-primary-500/20 transition-all hover:-translate-y-2">
              <Image 
                src="/taksi-on.jpg" 
                alt="Erzincan VİP Taksi - Önden Görünüm" 
                width={800}
                height={600}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-white font-black text-2xl">Renault Symbol</h3>
                <p className="text-neutral-300 font-medium">24 T 0144 · Erzincan VİP Taksi</p>
              </div>
            </div>

            <div className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white hover:shadow-primary-500/20 transition-all hover:-translate-y-2">
              <Image 
                src="/taksi-yan.jpg" 
                alt="Erzincan VİP Taksi - Yandan Görünüm" 
                width={800}
                height={600}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-white font-black text-2xl">Yandan Görünüm</h3>
                <p className="text-neutral-300 font-medium">Bakımlı ve temiz filo</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-100 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-neutral-900 transition-colors shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex flex-col items-center gap-6">
            <h2 className="text-3xl lg:text-5xl font-black italic">Araçlarımızla Tanışmaya Hazır Mısınız?</h2>
            <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
            <p className="text-neutral-400 font-medium max-w-2xl mx-auto text-lg mb-8">
              Pırıl pırıl bir VİP taksiye binmek için bizi aramayı unutmayın. Kredi kartı ile ödeme kabul ediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:05518593581" className="px-12 py-5 bg-primary-500 text-neutral-900 rounded-2xl font-black text-2xl shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform">HEMEN ÇAĞIR</a>
              <a href="https://wa.me/905518593581" target="_blank" className="px-12 py-5 bg-green-600 text-white rounded-2xl font-black text-2xl shadow-xl hover:scale-105 transition-transform">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

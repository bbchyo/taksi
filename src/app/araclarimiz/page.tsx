import Image from "next/image";
import { CheckCircle2, ShieldCheck, Droplets, Wind, User } from "lucide-react";

export default function VehiclesPage() {
  const features = [
    { title: "Her Zaman Temiz", desc: "Araçlarımız her gün dezenfekte edilir ve iç-dış temizliği titizlikle yapılır.", icon: <Droplets /> },
    { title: "Geniş Bagaj Hacmi", desc: "Havalimanı ve otogar transferleriniz için valizlerinize uygun geniş bagaj alanı.", icon: <User /> },
    { title: "Konforlu İç Mekan", desc: "Yolculuğunuzun her anında konforun tadını çıkarmanız için bakımlı ve yeni araçlar.", icon: <ShieldCheck /> },
    { title: "Klima ve Hava Temizliği", desc: "Mevsim ne olursa olsun, yolculuğunuz ideal ısıda ve temiz bir havada geçer.", icon: <Wind /> },
  ];

  return (
    <div className="pt-32 pb-20">
      <header className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Filomuz</span>
          <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 mb-6">Araçlarımız</h1>
          <p className="text-xl text-neutral-600 max-w-2xl font-medium leading-relaxed italic">
            Konfor ve güvenlik ilk önceliğimizdir. Profesyonel standartlardaki pırıl pırıl araçlarımızla her an yanınızdayız.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-primary-500 rounded-[4rem] group-hover:h-[60%] transition-all -z-10"></div>
              <Image 
                src="/hero-taxi.png" 
                alt="Erzincan Eşot Taksi Modern Araç" 
                width={800}
                height={500}
                className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-black text-neutral-900 leading-tight">Yolculuğunuzda <br /><span className="text-primary-600 italic">Saray Konforu</span></h2>
              <p className="text-lg text-neutral-500 font-medium leading-relaxed italic">
                Erzincan Eşot Taksi olarak sadece bir ulaşım hizmeti değil, huzur dolu bir yolculuk deneyimi vadediyoruz. Periyodik bakımları yapılmış, modern güvenlik sistemlerine sahip araçlarımızla yollar artık çok daha keyifli.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Sarı Taksi", "Geniş Bagaj", "Konforlu Koltuk", "7/24 Teknik Destek"].map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-primary-100 text-primary-800 rounded-full font-bold text-xs uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

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
              Erzincan genelinde uçağınızdan iner inmez veya otogardan çıktığınızda pırıl pırıl bir taksiye binmek için bizi aramayı unutmayın.
            </p>
            <a href="tel:05016410724" className="px-12 py-5 bg-primary-500 text-neutral-900 rounded-2xl font-black text-2xl shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform">HEMEN ÇAĞIR</a>
          </div>
        </div>
      </section>
    </div>
  );
}

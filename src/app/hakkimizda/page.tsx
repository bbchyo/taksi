import Image from "next/image";
import { CheckCircle2, ShieldCheck, UserCheck, Star, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <header className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/5 -skew-y-3 translate-y-20 -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Kurumsal Profil</span>
          <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 mb-6">Hakkımızda</h1>
          <p className="text-xl text-neutral-600 max-w-2xl font-medium leading-relaxed">
            Erzincan'da güven ve kalitenin tek adresi. Yılların tecrübesiyle havalimanı ve otogar transferlerinde lider taksi durağı.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full -z-10 animate-pulse"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-neutral-200 border-8 border-white">
                <Image 
                  src="/hero-taxi.png" 
                  alt="Erzincan Eşot Taksi Araç" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-neutral-100 z-20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-primary-600">20+</div>
                  <div className="text-xs font-black text-neutral-500 uppercase tracking-widest leading-tight">Yıllık<br />Sektör Tecrübesi</div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 leading-tight">Tecrübe, Güven ve Kaliteli Hizmet</h2>
                <p className="text-neutral-600 leading-relaxed text-lg italic">
                  Erzincan Eşot Taksi olarak, güvenilir bir Erzincan havalimanı taksi arayanlar için şehrimizin tek yetkili durağı olmanın gururunu yaşıyoruz. Yılların tecrübesi, profesyonel şoför kadromuz ve müşteri memnuniyeti odaklı anlayışımızla tüm ulaşım ihtiyaçlarınız için yanınızdayız.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Güvenilirlik ve Dakiklik", pct: "100%" },
                  { label: "Profesyonel Sürücüler", pct: "100%" },
                  { label: "7/24 Hizmet ve Esneklik", pct: "100%" },
                  { label: "Müşteri Memnuniyeti", pct: "99%" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <span className="font-bold text-neutral-800 text-sm">{stat.label}</span>
                    <span className="font-black text-primary-600 text-lg">{stat.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg shadow-primary-500/20">
                <Star className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-2xl font-bold">Misyonumuz</h3>
              <p className="text-neutral-400 leading-relaxed">
                Erzincan'da taksi ihtiyacı olan herkese hızlı ulaşım sağlamak ve güvenli sürüş standartlarını korumak. Her müşterimize ailemizden biri gibi davranmak ana ilkemizdir.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg shadow-primary-500/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold">Vizyonumuz</h3>
              <p className="text-neutral-400 leading-relaxed">
                Erzincan taksi durağı denildiğinde akla gelen ilk seçenek olmak ve 7/24 erişilebilir hizmet sunmak. Bölgenin dijital ve operasyonel anlamda en modern durağı olmak.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg shadow-primary-500/20">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold">Değerlerimiz</h3>
              <ul className="space-y-3 text-neutral-400 font-semibold uppercase tracking-wider text-xs">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Dakiklik</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Şeffaf İletişim</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Üst Düzey Güvenlik</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Koşulsuz Memnuniyet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

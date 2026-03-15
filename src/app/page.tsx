import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Clock, ShieldCheck, Star, MapPin, ChevronRight, Car, User, CheckCircle2 } from "lucide-react";
import FareCalculator from "@/components/FareCalculator";

export default function Home() {
  const phoneNumber = "05016410724";
  const whatsappNumber = "905016410724";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-50 flex flex-col justify-center min-h-[90vh]">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary-500/10 -skew-x-12 translate-x-32 -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-600 font-bold mb-8 text-sm border border-primary-200 shadow-sm uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                </span>
                7/24 Erzincan Havalimanı & Otogar
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                Resmi Taksi <br />
                <span className="text-primary-600 italic">Hizmetiniz</span> Hazır
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl mb-10 leading-relaxed font-medium">
                Havalimanı ve Otogar çıkışlarında 7/24 bekleyen, yetkili ve güvenilir ulaşım. Erzincan'da taksi arıyorsanız dakikalar içinde yanınızdayız.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  href={`tel:${phoneNumber}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-neutral-900/20 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 fill-current text-primary-500" />
                  Taksi Çağır
                </Link>
                <Link 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 text-neutral-900 border-2 border-primary-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-sm hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6 text-green-500 fill-current" />
                  WhatsApp'tan Yaz
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-neutral-900">20+</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-neutral-500">Yıllık Deneyim</span>
                </div>
                <div className="w-px h-10 bg-neutral-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-neutral-900">100%</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-neutral-500">Güvenilirlik</span>
                </div>
              </div>
            </div>

            <div className="relative group lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-colors animate-pulse"></div>
              <Image 
                src="/hero-taxi.png" 
                alt="Erzincan Havalimanı Taksi" 
                width={800}
                height={600}
                priority
                className="relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm">Neler Yapıyoruz?</span>
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-900">Hizmet Alanlarımız</h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { 
                title: "Havalimanı Transfer", 
                desc: " uçağınız indiği anda sizi bekliyoruz. Güvenli ve sabit fiyatlı transfer.",
                icon: <Car className="w-8 h-8" />,
                label: "Havalimanı"
              },
              { 
                title: "Otogar Ulaşımı", 
                desc: "Sizi otogardan alıp istediğiniz adrese konforla ulaştırıyoruz.",
                icon: <Clock className="w-8 h-8" />,
                label: "Otogar"
              },
              { 
                title: "Şehir İçi Ulaşım", 
                desc: "Erzincan'ın her noktasına, günün her saati hızlı ve güvenli ulaşım.",
                icon: <MapPin className="w-8 h-8" />,
                label: "Şehir İçi"
              }
            ].map((service, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-500 text-neutral-900 flex items-center justify-center mb-8 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed mb-6 italic">{service.desc}</p>
                <div className="flex items-center text-primary-600 font-bold text-sm tracking-wide gap-2 group-hover:translate-x-2 transition-transform">
                  DETAYLARI GÖR <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare Calculator Section */}
      <section className="py-32 bg-neutral-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 text-white">
              <span className="text-primary-500 font-bold uppercase tracking-widest text-sm block mb-4">Şeffaf Fiyatlandırma</span>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Yolculuk Masrafını Merak mı Ediyorsunuz?</h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                Erzincan genelinde geçerli olan güncel taksimetre tarifesi ile hemen hesaplayın. 
                Bekleme ücreti, gece tarifesi ve mesafe bazlı otomatik hesaplama aracımızla sürpriz maliyetlerden kurtulun.
              </p>
              <ul className="space-y-4">
                {[
                  "Gündüz Açılış: ~30 TL",
                  "Km Başı: ~20 TL",
                  "Gece Tarifesi: +%25 Ek ücret",
                  "7/24 Sabit Telefon Desteği"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-neutral-200">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <FareCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Müşteri Yorumları</span>
          <h2 className="text-4xl font-black text-neutral-900 mb-20">Neden Bizi Seçiyorlar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Ahmet Y.", 
                text: "Havalimanından şehir merkezine çok hızlı ve güvenli bir şekilde ulaştım. Şoför bey çok profesyoneldi. Kesinlikle tavsiye ederim.",
                rating: 5
              },
              { 
                name: "Elif K.", 
                text: "Gece geç saatte taksi bulma konusunda endişeliydim. Eşot Taksi durağını hemen otogar çıkışında gördüm. Şoför bey valizlerime yardım etti.",
                rating: 5
              },
              { 
                name: "Murat D.", 
                text: "Araç tam zamanında kapımdaydı ve içi pırıl pırıldı. Şoförün şehir trafiğine hakimiyeti sayesinde randevuma rahatça yetiştim.",
                rating: 5
              }
            ].map((test, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col items-center gap-6 relative group">
                <div className="bg-white p-3 rounded-full shadow-lg border border-neutral-100 -mt-16 group-hover:rotate-12 transition-transform">
                  <User className="w-10 h-10 text-primary-600" />
                </div>
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 italic leading-relaxed">"{test.text}"</p>
                <h4 className="font-bold text-neutral-900 text-lg">— {test.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-neutral-900 text-left">
              <h2 className="text-3xl lg:text-4xl font-black mb-2">Hemen Bir Araç Çağırın!</h2>
              <p className="font-bold opacity-80">Dakikalar içinde yanınızdayız.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link 
                href={`tel:${phoneNumber}`}
                className="bg-neutral-900 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              >
                <Phone className="w-7 h-7 fill-current" />
                0501 641 07 24
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

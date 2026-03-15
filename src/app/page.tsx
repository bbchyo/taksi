import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Car, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const phoneNumber = "+905555555555"; // Placeholder
  const whatsappUrl = `https://wa.me/905555555555`; // Placeholder

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary-500 p-2 rounded-xl">
              <Car className="w-6 h-6 text-neutral-900" />
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-900">
              Erzincan <span className="text-primary-600">Uçar Taksi</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href={`tel:${phoneNumber}`}
              className="hidden sm:flex items-center gap-2 font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Ara</span>
            </Link>
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-green-500/30 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh]">
        <Image 
          src="/hero-bg.png" 
          alt="Erzincan Taksi" 
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/70 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-medium mb-8 text-sm border border-white/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Erzincan Merkez, Otogar, Havalimanı & Üniversite 7/24 Hizmet
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-lg">
            Güvenli, Hızlı ve <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-300">
              Konforlu Ulaşım
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Erzincan Uçar Taksi ile günün her saati şehrin her noktasına güvenle seyahat edin. Otogar, Havalimanı, Mengücek Gazi Hastanesi ve EBYÜ Üniversite transferleriniz için hizmetinizdeyiz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-neutral-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary-500/20 hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" />
              Taksi Çağır
            </Link>
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              WhatsApp'tan Yaz
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">7/24 Kesintisiz Hizmet</h3>
              <p className="text-neutral-600 leading-relaxed">Günün her saati, gece gündüz demeden bir telefon uzağınızdayız. Erzincan nöbetçi taksi ihtiyaçlarınız için buradayız.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -z-10 opacity-50"></div>
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Güvenli Seyahat</h3>
              <p className="text-neutral-600 leading-relaxed">Deneyimli şoförlerimiz ve periyodik bakımları yapılmış araçlarımızla ailenizle birlikte güvenle seyahat edin.</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Car className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Tüm Noktalara Transfer</h3>
              <p className="text-neutral-600 leading-relaxed">Erzincan Havalimanı, Şehirlerarası Otobüs Terminali (Otogar), EBYÜ Kampüsü ve Ergan Dağı Kayak Merkezi'ne özel transfer işlemlerimizden yararlanın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Size Çok Yakınız</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">Erzincan merkezde bulunan durağımızla şehrin her yerine en hızlı şekilde ulaşıyoruz. Konumumuza haritadan bakabilir veya hemen taksi çağırabilirsiniz.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-neutral-100">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Adres</h4>
                    <p className="text-neutral-600 mt-1">Merkez Mah. [Sokak/Cadde] No:1, Erzincan Merkez</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-neutral-100">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Telefon / WhatsApp</h4>
                    <Link href={`tel:${phoneNumber}`} className="text-neutral-600 hover:text-primary-600 transition-colors mt-1 block">
                      {phoneNumber}
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800 transition-colors group"
              >
                Hemen Yol Tarifi Al
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-200 relative">
              {/* Fallback pattern while map loads, or placeholder for map iframe */}
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center z-[-1]">
                <MapPin className="w-12 h-12 text-neutral-300" />
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48474.91427218324!2d39.467812165034636!3d39.74230677553538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5cdcc368297f%3A0x6b82fe75d6bede44!2sErzincan%20Merkez%2FErzincan!5e0!3m2!1str!2str!4v1715000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 pt-16 pb-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-primary-500 p-2 rounded-xl">
                <Car className="w-6 h-6 text-neutral-900" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Erzincan <span className="text-primary-500">Uçar Taksi</span>
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href={`tel:${phoneNumber}`} className="text-neutral-400 hover:text-white transition-colors p-2 rounded-full hover:bg-neutral-800">
                <Phone className="w-6 h-6" />
                <span className="sr-only">Telefon</span>
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-500 transition-colors p-2 rounded-full hover:bg-neutral-800">
                <MessageCircle className="w-6 h-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Erzincan Uçar Taksi. Tüm hakları saklıdır.
            </p>
            <p className="text-neutral-600 text-sm">
              Erzincan Taksi, Ergan Dağı Taksi, Erzincan Nöbetçi Taksi
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

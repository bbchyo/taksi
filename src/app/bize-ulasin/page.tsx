import { Phone, MessageCircle, MapPin, Clock, Mail, Share2, Navigation, Send } from "lucide-react";

export default function ContactPage() {
  const phone1 = "+90 446 214 34 74";
  const phone2 = "+90 446 224 10 40";
  const cell = "+90 501 641 07 24";
  const owner = "Süleyman Kılıç (+90 539 322 33 17)";

  return (
    <div className="pt-32 pb-20">
      <header className="py-20 bg-neutral-50 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">7/24 İletişim</span>
          <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 mb-6">Bize Ulaşın</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Taksi çağırmak, rezervasyon yapmak veya bilgi almak için bize dilediğiniz an ulaşabilirsiniz. Erzincan'da ulaşım için tek numara yeterli.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-white border border-neutral-100 shadow-xl shadow-neutral-100/50 space-y-6">
                <h3 className="text-2xl font-black text-neutral-900 border-b-4 border-primary-500 pb-2 inline-block">İletişim Kanalları</h3>
                
                <div className="space-y-6 pt-4">
                  <a href={`tel:${cell.replace(/\s/g, "")}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-neutral-900 transition-colors flex-shrink-0">
                      <Phone className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">7/24 Taksi Çağır</h4>
                      <p className="text-lg font-black text-primary-600">{cell}</p>
                    </div>
                  </a>

                  <div className="pt-2 space-y-4">
                    <a href={`tel:${phone1.replace(/\s/g, "")}`} className="flex items-center gap-3 text-neutral-500 hover:text-neutral-900 font-bold transition-colors">
                      <Phone className="w-4 h-4 fill-current text-primary-500" /> {phone1}
                    </a>
                    <a href={`tel:${phone2.replace(/\s/g, "")}`} className="flex items-center gap-3 text-neutral-500 hover:text-neutral-900 font-bold transition-colors">
                      <Phone className="w-4 h-4 fill-current text-primary-500" /> {phone2}
                    </a>
                  </div>

                  <a href={`https://wa.me/905016410724`} target="_blank" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors flex-shrink-0">
                      <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">WhatsApp Hattı</h4>
                      <p className="text-neutral-500 font-medium italic">Konum gönderin, hemen gelelim.</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-neutral-900 text-white space-y-4 shadow-2xl">
                <h4 className="text-primary-500 font-black uppercase tracking-widest text-xs">Yönetim & Destek</h4>
                <p className="font-bold text-lg">{owner}</p>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <UserCheck className="w-4 h-4" /> Öneri ve Şikayet İçin
                </div>
              </div>
            </div>

            {/* Address and Map */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-10 rounded-[3rem] bg-neutral-50 border border-neutral-100 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-widest text-xs">
                      <MapPin className="w-4 h-4" /> Adresimiz
                    </div>
                    <h3 className="text-3xl font-black text-neutral-900">Erzincan Merkez <br />Taksi Durağı</h3>
                    <p className="text-neutral-500 font-medium leading-relaxed italic">
                      Erzincan Havalimanı / Otogar Eşot Taksi Durağı, 24000 Erzincan / Türkiye
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-widest text-xs">
                      <Clock className="w-4 h-4" /> Çalışma Saatleri
                    </div>
                    <p className="text-neutral-900 font-bold text-lg uppercase tracking-tight">Haftanın 7 Günü / 24 Saat Kesintisiz</p>
                  </div>
                </div>

                <div className="md:w-1/2 w-full h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group">
                  <div className="absolute inset-0 bg-neutral-200 animate-pulse -z-10 flex items-center justify-center">
                    <Navigation className="w-10 h-10 text-neutral-400" />
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48474.91427218324!2d39.467812165034636!3d39.74230677553538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5cdcc368297f%3A0x6b82fe75d6bede44!2sErzincan%20Merkez%2FErzincan!5e0!3m2!1str!2str!4v1715000000000!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>

              <div className="bg-primary-500 p-10 rounded-[3rem] text-neutral-900 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary-500/10">
                <div className="max-w-md">
                   <h4 className="text-2xl font-black mb-2 italic">Hemen Yol Tarifi Alın</h4>
                   <p className="font-bold opacity-80">Google Haritalar üzerinden tek tıkla en hızlı yolu bulun.</p>
                </div>
                <a 
                  href="https://goo.gl/maps/placeholder" 
                  target="_blank"
                  className="bg-neutral-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform shrink-0"
                >
                  <Navigation className="w-6 h-6 rotate-45" /> HARİTADA GÖR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function UserCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

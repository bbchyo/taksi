import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Car, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary-500 p-2 rounded-xl">
                <Car className="w-6 h-6 text-neutral-900" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Erzincan <span className="text-primary-500">VİP Taksi</span>
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Erzincan VİP Taksi olarak 7 gün 24 saat güvenilir, konforlu ve zamanında ulaşım hizmeti sunuyoruz. &quot;Sevgi Taşıyoruz&quot; sloganıyla her an yanınızdayız.
            </p>
            <div className="flex items-center gap-2 text-primary-500">
              <Clock className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">7/24 Kesintisiz</span>
            </div>
          </div>

          {/* Kurumsal Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Kurumsal</h4>
            <ul className="space-y-4">
              <li><Link href="/hakkimizda" className="text-neutral-400 hover:text-white transition-colors text-sm">Hakkımızda</Link></li>
              <li><Link href="/bize-ulasin" className="text-neutral-400 hover:text-white transition-colors text-sm">İletişim Bilgileri</Link></li>
              <li><Link href="/hizmetlerimiz" className="text-neutral-400 hover:text-white transition-colors text-sm">Hizmet Anlayışımız</Link></li>
              <li><Link href="/araclarimiz" className="text-neutral-400 hover:text-white transition-colors text-sm">Araçlarımız</Link></li>
            </ul>
          </div>

          {/* Hizmetler Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Hizmetlerimiz</h4>
            <ul className="space-y-4">
              <li><Link href="/hizmetlerimiz" className="text-neutral-400 hover:text-white transition-colors text-sm">Şehir İçi Ulaşım</Link></li>
              <li><Link href="/hizmetlerimiz" className="text-neutral-400 hover:text-white transition-colors text-sm">Havalimanı Transferleri</Link></li>
              <li><Link href="/hizmetlerimiz" className="text-neutral-400 hover:text-white transition-colors text-sm">Otogar Transferleri</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">Anlık Taksi Çağırma</Link></li>
            </ul>
          </div>

          {/* İletişim Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">İletişim</h4>
            <div className="space-y-4">
              <Link href="tel:05518593581" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-neutral-900 transition-colors">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-bold">0551 859 35 81</span>
              </Link>
              <Link href="https://wa.me/905518593581" target="_blank" className="flex items-center gap-3 text-neutral-400 hover:text-green-500 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm">WhatsApp'tan Yaz</span>
              </Link>
              <div className="flex items-start gap-3 text-neutral-400 pt-2">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">İnönü Mah. Merkez Postane Yanı, Valilik Karşısı, Erzincan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Card */}
        <div className="flex justify-center mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/10 border-4 border-neutral-800 max-w-lg w-full">
            <Image src="/kartvizit.jpg" alt="Erzincan VİP Taksi Kartvizit - Faruk Tutar" width={1024} height={512} className="w-full h-auto" />
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Erzincan VİP Taksi - Faruk Tutar. Tüm hakları saklıdır.
          </p>
          <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-600">
            &quot;Sevgi Taşıyoruz&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}

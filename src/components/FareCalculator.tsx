"use client";

import { useState } from "react";
import { Calculator, Clock, MapPin, Navigation, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function FareCalculator() {
  const [distance, setDistance] = useState<number | "">("");
  const [waitMinutes, setWaitMinutes] = useState<number | "">("");
  const [isNight, setIsNight] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  const calculateFare = () => {
    const opening = 30;
    const perKm = 20;
    const perMinWait = 1.5;
    
    let fare = opening;
    if (typeof distance === "number") fare += distance * perKm;
    if (typeof waitMinutes === "number") fare += waitMinutes * perMinWait;
    
    if (isNight) {
      fare *= 1.25;
    }
    
    setTotal(Math.round(fare));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-neutral-100 max-w-2xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 rounded-bl-full -z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary-500 p-3 rounded-2xl shadow-lg shadow-primary-500/20">
            <Calculator className="w-6 h-6 text-neutral-900" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neutral-900">Ücret Hesaplama</h3>
            <p className="text-sm text-neutral-500">Tahmini yolculuk tutarını öğrenin</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-primary-600" />
                Tahmini Mesafe (km)
              </label>
              <input
                type="number"
                placeholder="Örn: 8"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                value={distance}
                onChange={(e) => setDistance(e.target.value === "" ? "" : Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-600" />
                Bekleme (dk)
              </label>
              <input
                type="number"
                placeholder="Örn: 5"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                value={waitMinutes}
                onChange={(e) => setWaitMinutes(e.target.value === "" ? "" : Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
            <div className="flex items-center gap-3">
              <div className={isNight ? "text-primary-600" : "text-neutral-400"}>
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-neutral-800">Gece Tarifesi</span>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">22:00 - 06:00 (+%25)</p>
              </div>
            </div>
            <button
              onClick={() => setIsNight(!isNight)}
              className={`w-14 h-8 rounded-full transition-colors relative flex items-center px-1 ${
                isNight ? "bg-primary-500" : "bg-neutral-300"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
                  isNight ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <button
            onClick={calculateFare}
            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-neutral-900/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Tahmini Ücreti Hesapla
          </button>

          {total !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-primary-50 border border-primary-100 rounded-3xl text-center shadow-inner"
            >
              <span className="text-neutral-600 text-sm font-semibold block mb-1">Tahmini Tutar</span>
              <div className="text-4xl font-black text-neutral-900 flex items-center justify-center gap-1">
                {total} <span className="text-2xl text-primary-600">₺</span>
              </div>
              <div className="mt-4 flex items-start gap-2 text-[10px] text-neutral-500 text-left bg-white/50 p-3 rounded-xl">
                <Info className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <p>
                  * Bu hesaplama tahmini değerdir. Trafik durumu, yol güzergahı değişikliği ve tam bekleme süresi taksimetre tarafından belirlenir.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

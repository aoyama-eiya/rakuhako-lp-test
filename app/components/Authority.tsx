import React from 'react';

export default function Authority() {
    return (
        <section className="relative w-full bg-[#1e2939] text-white py-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-[1440px] mx-auto px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-6xl font-extrabold leading-[1.15] tracking-tight text-white mb-8">
                                創業70年の<br />信頼と技術
                            </h2>
                            <div className="w-32 h-2 bg-primary rounded-full mb-10"></div>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                山口物流は70年にわたり、精密機器から大型プラントまで、<br className="hidden xl:block" />複雑な物流を安全に取り扱ってきた実績があります。<br className="hidden xl:block" />現場で培われた確かな技術で、お客様の大切な貨物を守ります。
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-xl bg-primary/40 flex items-center justify-center shrink-0 border border-white/10">
                                    <span className="material-symbols-outlined text-[#5ebcdb] text-3xl">verified</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">ISPM-15 国際基準準拠</h3>
                                    <p className="text-gray-400 text-lg">輸出用木材梱包の国際基準をクリア。世界中どこへでも安心して発送いただけます。</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-xl bg-primary/40 flex items-center justify-center shrink-0 border border-white/10">
                                    <span className="material-symbols-outlined text-[#5ebcdb] text-3xl">precision_manufacturing</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">プロ仕様の堅牢設計</h3>
                                    <p className="text-gray-400 text-lg">物流のプロが設計した「ラクハコキット」は、誰でも簡単に組み立てられ、かつ最高の強度を実現しています。</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 pt-8">
                            <div className="flex -space-x-4">
                                <div className="w-16 h-16 rounded-full bg-primary border-4 border-[#1e2939] flex items-center justify-center text-lg font-bold shadow-xl">70+</div>
                                <div className="w-16 h-16 rounded-full bg-[#374151] border-4 border-[#1e2939] flex items-center justify-center text-[12px] font-bold shadow-xl uppercase tracking-tighter">Years</div>
                            </div>
                            <div className="h-12 w-px bg-white/20"></div>
                            <p className="text-base font-medium text-gray-400 italic">Trusted by thousands of businesses across Japan.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.6)] border border-white/10 aspect-[4/3] group">
                            <img alt="Large Industrial Warehouse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/img/soukonogazou.jpg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                            </div>
                            <div>
                                <p className="text-[#1e2939] text-sm font-bold uppercase tracking-widest mb-1">Quality Assurance</p>
                                <p className="text-[#1e2939] text-2xl font-extrabold">国内自社工場生産</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

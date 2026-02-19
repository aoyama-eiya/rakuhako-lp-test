import React from 'react';

export default function Crisis() {
    return (
        <section className="relative w-full py-32 px-12 bg-slate-900 text-white rounded-t-[6rem] -mt-12 shadow-[0_-30px_80px_rgba(0,0,0,0.4)] z-10">
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <div className="absolute -top-24 -left-24 w-[500px] h-[500px] border-[80px] border-white rounded-full"></div>
                <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] border-[120px] border-primary rounded-full"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 h-[600px] group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/rakuhako-lp-test/img/shokuninngasigotowositeiruyousu.jpg')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                            {/* Image Text */}
                            <div className="absolute bottom-12 left-10 right-10">
                                <h3 className="text-3xl lg:text-4xl font-black leading-tight text-white mb-2">
                                    技術革新から取り残された<br />
                                    物流業界の「構造的課題」
                                </h3>
                                <div className="h-1 w-20 bg-primary mt-6"></div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-5xl font-black leading-tight text-white">
                                なぜこんなことが<br />
                                起きているのか？
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed font-medium">
                                物流業界は未だに、熟練者の経験と勘に頼った「属人的な業務」がスタンダードです。デジタル化の波から孤立し、負の連鎖が続いています。
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Item 1 */}
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <div className="flex items-start gap-5">
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3">ベテランの「勘」への依存</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            明確な計算基準がなく、担当者の経験則で見積もりが算出されます。そのため、回答に時間がかかり、精度もその時々でばらつきます。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <div className="flex items-start gap-5">
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3">FAX・電話中心の文化</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            IT化が著しく遅れており、記録が残らない電話や、即時性のないFAXでのやり取りが必須となっています。これが情報のブラックボックス化を生んでいます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a href="#solution" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl group">
                                ラクハコキットで構造を劇的に変える
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

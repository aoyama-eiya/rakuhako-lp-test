import React from 'react';

export default function Reason() {
    return (
        <section className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">
                    なぜ、こんなことが起きているのか？
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 画像側 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                            <img
                                alt="熟練の職人が梱包作業をしている様子"
                                className="w-full h-full object-cover"
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/shokuninngasigotowositeiruyousu.jpg`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
                                    熟練の技術に頼る<br />現場の実態
                                </h3>
                                <div className="h-1 w-16 bg-primary mt-4"></div>
                            </div>
                        </div>
                    </div>

                    {/* テキスト側 */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-white/5 rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-white/10">
                            <div className="space-y-8">
                                <div style={{ containerType: 'inline-size' }}>
                                    <h3 className="font-black text-white leading-tight whitespace-nowrap" style={{ fontSize: 'min(7cqw, 2.25rem)' }}>
                                        最大の原因は、<br />
                                        <span className="text-red-400">「ベテラン職人への依存」</span>です。
                                    </h3>
                                </div>

                                <div className="h-px w-full bg-white/20"></div>

                                <p className="text-lg md:text-xl text-slate-300 font-medium leading-loose text-left">
                                    多くの物流現場では、梱包の仕様や価格決定が
                                    特定のベテラン社員の知識と経験に依存してしまっています。<br /><br />
                                    その結果、担当者が不在だと業務が止まり、
                                    誰でもできるはずの業務が、特定の人にしかできない「属人化」した業務になってしまっているのです。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

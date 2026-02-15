import React from 'react';

export default function Hero() {
    return (
        <>
            <nav className="absolute top-0 z-50 w-full border-b border-slate-100 glass-nav">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between px-12 h-20">
                    <div className="flex items-center gap-3">
                        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/header-logo.png`} alt="ラクハコキット" className="h-10 w-auto object-contain" />
                    </div>
                    <div className="hidden md:flex items-center gap-10">
                        <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#service">サービス紹介</a>
                        <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#flow">利用の流れ</a>
                        <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#faq">よくある質問</a>
                        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
                            無料で試してみる
                        </button>
                    </div>
                </div>
            </nav>
            <main className="relative min-h-[900px] lg:h-screen flex flex-col overflow-hidden bg-slate-50">
                {/* Background Image Container - Right Side */}
                <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full z-0">
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/fa-sutobyu-detukatte.jpg`}
                        alt="Background"
                        className="w-full h-full object-cover object-center lg:object-left blur-sm"
                    />
                    {/* Gradient Overlay for Fade Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/20 to-transparent lg:via-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent lg:hidden"></div>
                </div>

                {/* <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div> Removed grid pattern as we have bg image now */}
                <div className="relative z-10 flex-grow flex items-center">
                    <div className="max-w-[1440px] mx-auto px-12 w-full pt-32 pb-12">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="flex flex-col">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15">
                                        <span className="material-symbols-outlined text-primary text-[18px] fill-1">verified</span>
                                        <span className="text-primary text-sm font-bold tracking-wider">富山の物流プロ「山口物流」が開発</span>
                                    </div>
                                </div>
                                <h1 className="text-[52px] font-black leading-[1.3] text-slate-900 tracking-tight mb-8 text-nowrap-custom drop-shadow-sm lg:drop-shadow-none">
                                    梱包の見積もり待ち、<br />
                                    <span className="text-primary relative inline-block">
                                        今日で終わりに
                                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/15" preserveAspectRatio="none" viewBox="0 0 100 10">
                                            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                                        </svg>
                                    </span><br />
                                    しませんか？
                                </h1>
                                <p className="text-slate-600 text-xl font-medium leading-relaxed mb-12 max-w-lg drop-shadow-sm lg:drop-shadow-none">
                                    電話・FAX不要。たった3つの質問に答えるだけで、最適な資材と価格を即座に提案します。
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-8">
                                    <button className="group w-full sm:w-[340px] bg-primary hover:bg-primary-dark text-white rounded-2xl py-5 px-8 shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-between">
                                        <div className="flex flex-col items-start text-left">
                                            <span className="text-xl font-black leading-none mb-1">価格を見てみる</span>
                                            <span className="text-sm font-medium opacity-80">（無料・最短1分で完了）</span>
                                        </div>
                                        <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
                                            <span className="material-symbols-outlined text-white text-[28px]">arrow_forward</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="relative lg:h-[580px] flex items-center justify-center">
                                {/* Removed the person image container as it is now background */}
                                <div className="absolute -bottom-12 -left-12 w-[850px] h-auto z-30 hidden lg:block filter drop-shadow-2xl">
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/rakuhako-img.png`} alt="Rakuhako Dashboard" className="w-full h-full object-contain" />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-white p-7 rounded-[2rem] shadow-float border border-slate-100 w-[280px] z-40">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Immediate Quote</span>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-4xl font-black text-slate-900">¥45,000</span>
                                        <span className="text-sm font-bold text-slate-400">/ set</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-3/4 rounded-full"></div>
                                        </div>
                                        <p className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                                            見積もり完了まで 45秒
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto px-12 pb-16 w-full mt-auto">
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="flex items-center gap-6 px-10 py-2">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[32px]">schedule</span>
                            </div>
                            <div>
                                <p className="text-lg font-black text-slate-900 whitespace-nowrap">最短1分で完了</p>
                                <p className="text-sm text-slate-500 font-medium">面倒な入力は一切不要</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 px-12 py-2 border-y md:border-y-0 md:border-x border-slate-100">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[32px]">smartphone</span>
                            </div>
                            <div>
                                <p className="text-lg font-black text-slate-900 whitespace-nowrap">スマホで完結</p>
                                <p className="text-sm text-slate-500 font-medium">現場から即座に見積もり</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 px-10 py-2">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[32px]">currency_yen</span>
                            </div>
                            <div>
                                <p className="text-lg font-black text-slate-900 whitespace-nowrap">コスト削減を実現</p>
                                <p className="text-sm text-slate-500 font-medium">中間マージンをカット</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

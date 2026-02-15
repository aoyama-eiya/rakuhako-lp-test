import React from 'react';

export default function Cta() {
    return (
        <section className="relative bg-primary py-24 overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
                <div className="bg-white/10 p-12 lg:p-24 rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-white/20 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                まずは登録なしで、<br />
                                <span className="text-white/80">
                                    無料で使ってみる
                                </span>
                            </h2>
                            <p className="text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                現場の課題解決は、この一歩から始まります。30秒で終わる見積もりシミュレーションを今すぐ体験してください。
                            </p>
                        </div>
                        <div className="w-full lg:w-auto min-w-[380px] flex flex-col items-center gap-8">
                            <button className="group relative w-full px-12 py-8 bg-white hover:bg-gray-50 text-primary rounded-2xl font-black text-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4">
                                <span>今すぐ見積もりを試す</span>
                                <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                            </button>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-white/70 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-cyan-400 text-lg">check_circle</span>
                                    <span>導入前のご相談も無料で承ります</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-cyan-400 text-lg">check_circle</span>
                                    <span>しつこい営業電話は一切ありません</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

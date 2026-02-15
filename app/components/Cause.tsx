import React from 'react';

export default function Cause() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-slate-900 text-white z-10 font-[sans-serif]">
            {/* Blackboard Texture/Style Hints */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                        発注先が見つからないのはなぜ？
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-bold">
                        〜梱包業界が抱える「9割問題」とは〜
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: The 90% Problem (Pie Chart) */}
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                        <h4 className="flex items-center gap-3 text-2xl font-black text-white mb-8 relative z-10">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-900 text-lg font-bold">1</span>
                            業界の構造的な「9割」の実態
                        </h4>

                        <div className="flex flex-col items-center justify-center py-6 relative z-10">
                            {/* Pie Chart Representation */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                {/* Slice for 10% */}
                                <div className="absolute inset-0 rounded-full" style={{
                                    background: 'conic-gradient(var(--tw-gradient-stops))',
                                    '--tw-gradient-from': '#ef4444',
                                    '--tw-gradient-to': '#ef4444',
                                    '--tw-gradient-stops': 'var(--tw-gradient-from) 0deg 36deg, transparent 36deg 360deg'
                                } as React.CSSProperties}></div>

                                {/* Inner Circle for Donut effect (optional, or kept filled) - Let's keep it filled for Pie */}

                                {/* Text Labels in Chart */}
                                <div className="absolute top-[35%] left-[35%] text-slate-900 text-center">
                                    <span className="block text-5xl md:text-6xl font-black tracking-tighter">90%</span>
                                    <span className="block text-sm md:text-base font-bold text-slate-500">大口顧客（数社）</span>
                                </div>

                                <div className="absolute top-[10%] right-[25%] translate-x-1/2 -translate-y-1/2 text-red-500 text-center transform scale-100 md:scale-110">
                                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg border border-red-100 shadow-xl mb-1">
                                        <span className="block text-2xl md:text-3xl font-black">10%</span>
                                    </div>
                                    <span className="text-xs md:text-sm font-bold bg-white/90 px-1 rounded block">小口</span>
                                </div>
                            </div>

                            <p className="mt-8 text-slate-300 text-sm md:text-base leading-relaxed text-center max-w-sm">
                                既存業者は、全体の9割を占める大口顧客への対応に特化。<br />
                                効率の悪い「小口案件」に対応する余裕がありません。
                            </p>
                        </div>
                    </div>

                    {/* Right: Side Effects (Columns) */}
                    <div className="space-y-8">
                        <h4 className="flex items-center gap-3 text-2xl font-black text-white mb-2">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-900 text-lg font-bold">2</span>
                            この構造が引き起こす弊害
                        </h4>

                        <div className="grid grid-cols-1 gap-6">
                            {/* Card A */}
                            <div className="bg-white/5 rounded-2xl p-6 transition-colors hover:bg-white/10">
                                <h5 className="text-lg font-bold text-white mb-2">A. 顧客側の問題（小口難民）</h5>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    「頼める先がない」。既存業者にとって小口案件は儲からないため、見積もりを後回しにされたり、高額な料金を提示されたりして、事実上「放置」されています。
                                </p>
                            </div>

                            {/* Card B */}
                            <div className="bg-white/5 rounded-2xl p-6 transition-colors hover:bg-white/10">
                                <h5 className="text-lg font-bold text-white mb-2">B. 業者側の問題（経営リスク）</h5>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    大口顧客を1社失うだけで経営危機に。また、システム投資の余力がなく、変化できない「イノベーターのジレンマ」に陥っています。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

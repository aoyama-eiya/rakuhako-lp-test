"use client";

import React from 'react';

export default function Cause() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-white z-10 font-[sans-serif]">
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
                        発注先が見つからないのはなぜ？
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 font-bold">
                        〜梱包業界が抱える「9割問題」とは〜
                    </p>
                </div>

                {/* ホワイトボード本体 */}
                <div className="relative rounded-lg" style={{
                    background: 'linear-gradient(145deg, #c0c0c0, #a8a8a8)',
                    padding: '12px',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.1)'
                }}>
                    {/* ボード面 */}
                    <div className="relative rounded-sm p-8 md:p-12 lg:p-16 min-h-[600px]" style={{
                        background: 'linear-gradient(180deg, #f7f8f9 0%, #ffffff 20%, #fefefe 80%, #f5f5f5 100%)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.04)'
                    }}>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start h-full">
                            {/* ① メインコンテンツ：9割問題の円グラフ (Left Column - Larger) */}
                            <div className="lg:col-span-3 pt-4 flex flex-col justify-center h-full">
                                <h4 className="flex items-center gap-4 text-2xl md:text-3xl font-black text-slate-800 mb-10" style={{ color: '#2c3e50' }}>
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white text-xl font-bold">1</span>
                                    業界の構造的な「9割」の実態
                                </h4>

                                <div className="flex flex-col items-center justify-center py-6">
                                    {/* Pie Chart - Enlarged */}
                                    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-white flex items-center justify-center shadow-xl border border-slate-200 mb-10 transform scale-110">
                                        <div className="absolute inset-0 rounded-full" style={{
                                            background: 'conic-gradient(var(--tw-gradient-stops))',
                                            '--tw-gradient-from': '#ef4444',
                                            '--tw-gradient-to': '#ef4444',
                                            '--tw-gradient-stops': 'var(--tw-gradient-from) 0deg 36deg, transparent 36deg 360deg'
                                        } as React.CSSProperties}></div>

                                        <div className="absolute top-[35%] left-[35%] text-slate-900 text-center">
                                            <span className="block text-5xl md:text-6xl font-black tracking-tighter">90%</span>
                                            <span className="block text-sm md:text-base font-bold text-slate-500">大口顧客（数社）</span>
                                        </div>

                                        <div className="absolute top-[10%] right-[25%] translate-x-1/2 -translate-y-1/2 text-red-500 text-center transform scale-100 md:scale-110">
                                            <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg border border-red-100 shadow-xl mb-1">
                                                <span className="block text-2xl md:text-3xl font-black">10%</span>
                                            </div>
                                            <span className="text-xs font-bold bg-white/90 px-1 rounded block">小口</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-700 text-base md:text-lg font-bold leading-relaxed text-left max-w-lg">
                                        既存業者は、全体の9割を占める大口顧客への対応に特化。<br />
                                        効率の悪い「小口案件」に対応する余裕がありません。
                                    </p>
                                </div>
                            </div>

                            {/* ② コラム (Right Column - Smaller) */}
                            <div className="lg:col-span-2 relative h-full flex flex-col justify-center">
                                {/* 分割線 (縦線) - PCのみ */}
                                <div className="hidden lg:block absolute -left-8 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-300"></div>
                                {/* 分割線 (横線) - Mobileのみ */}
                                <div className="block lg:hidden w-full border-t-2 border-dashed border-slate-300 mb-10"></div>

                                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100/80">
                                    <h4 className="text-base md:text-lg font-black mb-6 pb-2 text-slate-500 border-b border-slate-200" style={{ color: '#555' }}>
                                        コラム：この構造が引き起こす弊害
                                    </h4>

                                    <div className="space-y-6">
                                        {/* Card A */}
                                        <div className="bg-white/80 rounded-xl p-4 border border-slate-200 shadow-sm">
                                            <h5 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: '#c0392b' }}>
                                                <span className="w-1.5 h-3.5 bg-[#c0392b] rounded-full inline-block"></span>
                                                A. 顧客側の問題（小口難民）
                                            </h5>
                                            <p className="text-slate-600 text-xs leading-relaxed pl-3.5">
                                                「頼める先がない」。既存業者にとって小口案件は儲からないため、見積もりを後回しにされたり、高額な料金を提示されたりして、事実上「放置」されています。
                                            </p>
                                        </div>

                                        {/* Card B */}
                                        <div className="bg-white/80 rounded-xl p-4 border border-slate-200 shadow-sm">
                                            <h5 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: '#2471a3' }}>
                                                <span className="w-1.5 h-3.5 bg-[#2471a3] rounded-full inline-block"></span>
                                                B. 業者側の問題（経営リスク）
                                            </h5>
                                            <p className="text-slate-600 text-xs leading-relaxed pl-3.5">
                                                大口顧客を1社失うだけで経営危機に。また、システム投資の余力がなく、変化できない「イノベーターのジレンマ」に陥っています。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* マーカー受けトレイ */}
                <div className="relative mx-8 h-8 rounded-b-lg" style={{
                    background: 'linear-gradient(180deg, #b0b0b0, #808080)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                }}>
                    <div className="absolute top-0 left-0 right-0 h-2" style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.35), transparent)'
                    }}></div>
                    {/* マーカーペン */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-4">
                        <div className="w-24 h-4 rounded-full bg-red-500 shadow-sm"></div>
                        <div className="w-24 h-4 rounded-full bg-blue-500 shadow-sm"></div>
                        <div className="w-24 h-4 rounded-full bg-green-500 shadow-sm"></div>
                        <div className="w-16 h-4 rounded-full bg-slate-800 shadow-sm"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

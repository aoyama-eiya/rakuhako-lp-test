import React from 'react';

export default function Demo() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
            <header className="text-center mb-24 max-w-4xl mx-auto">
                <h2 className="text-5xl lg:text-7xl font-[900] leading-tight tracking-tighter mb-10 text-slate-900 dark:text-white">
                    3ステップ、わずか<span className="text-primary whitespace-nowrap">30秒で完了</span>
                </h2>
                <p className="text-xl lg:text-2xl text-slate-500 dark:text-gray-400 font-medium leading-relaxed">
                    面倒な見積もり作業はもう不要。直感的なインターフェースで、<br className="hidden md:block" />
                    誰でも迷わず、その場で料金を確認できるラクハコキット。
                </p>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                <div className="group bg-slate-900 p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-slate-700 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-6">
                        <span className="font-black text-6xl text-white/20 group-hover:text-white/40 transition-colors">01</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-white">サイズ入力</h3>
                    <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 mb-6 flex items-center justify-center p-6">
                        {/* iOS Style Input Field Mockup */}
                        <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-4 space-y-3">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="text-sm font-medium text-slate-500">幅 (Width)</span>
                                <span className="text-lg font-bold text-slate-900">120 <span className="text-xs text-slate-400">cm</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="text-sm font-medium text-slate-500">高さ (Height)</span>
                                <span className="text-lg font-bold text-slate-900">80 <span className="text-xs text-slate-400">cm</span></span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-slate-500">奥行 (Depth)</span>
                                <span className="text-lg font-bold text-slate-900">60 <span className="text-xs text-slate-400">cm</span></span>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">
                        お手元の箱の「縦・横・高さ」の3辺を入力。定型サイズからの選択も可能です。
                    </p>
                </div>
                <div className="group bg-slate-900 p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-slate-700 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-6">
                        <span className="font-black text-6xl text-white/20 group-hover:text-white/40 transition-colors">02</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-white">重さ入力</h3>
                    <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 mb-6 flex items-center justify-center p-6">
                        {/* iOS Style Weight Picker Mockup */}
                        <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex items-center justify-between">
                            <div className="bg-slate-100 rounded-full w-10 h-10 flex items-center justify-center text-slate-400">
                                <span className="material-symbols-outlined">remove</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-black text-slate-900 tracking-tight">15.5</span>
                                <span className="text-xs font-bold text-slate-400 uppercase">kilograms</span>
                            </div>
                            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined">add</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">
                        数値を入力するだけで重量を指定。入力の手間を最小限に抑えています。
                    </p>
                </div>
                <div className="group bg-slate-900 p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-slate-700 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-6">
                        <span className="font-black text-6xl text-white/20 group-hover:text-white/40 transition-colors">03</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-white">輸送方法</h3>
                    <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 mb-6 flex items-center justify-center shadow-inner">
                        <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="8" className="stroke-slate-200" opacity="0.8" />
                                    <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="white" strokeWidth="4" className="stroke-slate-200" opacity="0.5" />
                                </pattern>
                            </defs>

                            {/* Map Background (Roads) */}
                            <rect width="100%" height="100%" fill="#f8fafc" />
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />

                            {/* Irregular Roads / Highways */}
                            <path d="M-20,220 C100,200 150,280 250,250 S350,150 420,180" fill="none" stroke="white" strokeWidth="12" className="stroke-slate-300" />
                            <path d="M150,320 L180,-20" fill="none" stroke="white" strokeWidth="10" className="stroke-slate-300" />

                            {/* Navigation Route */}
                            <path
                                d="M80,80 L80,180 L200,180 L200,120 L320,120"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="drop-shadow-md"
                            />
                            {/* Animated Path Overlay */}
                            <path
                                d="M80,80 L80,180 L200,180 L200,120 L320,120"
                                fill="none"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="20 300"
                                strokeDashoffset="0"
                                className="opacity-50 animate-[dash_3s_linear_infinite]"
                            />

                            {/* Start Point (Current Location) */}
                            <circle cx="80" cy="80" r="12" fill="white" className="shadow-lg" />
                            <circle cx="80" cy="80" r="6" fill="#3b82f6" />

                            {/* End Point (Destination Pin) */}
                            <g transform="translate(320, 120)">
                                <path transform="translate(-16, -32)" d="M16,0 C24.8,0 32,7.2 32,16 C32,24.8 16,40 16,40 C16,40 0,24.8 0,16 C0,7.2 7.2,0 16,0 Z" fill="#ef4444" className="drop-shadow-lg" />
                                <circle cx="0" cy="-16" r="6" fill="white" />
                            </g>
                        </svg>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">
                        サイズや重量に合わせて、最適な輸送手段を自動選定。迷うことなく手配できます。
                    </p>
                </div>
            </section>
            <section className="relative overflow-hidden rounded-[3rem] bg-[#111617] dark:bg-black text-white p-16 lg:p-24 shadow-2xl">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[140px] -mr-80 -mt-80"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -ml-80 -mb-80"></div>
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-6 space-y-10">
                        <h3 className="text-5xl lg:text-6xl font-extrabold leading-[1.15]">
                            <span className="block whitespace-nowrap">ボタンを押した瞬間、</span>
                            <span className="block whitespace-nowrap">見積もりは完了です。</span>
                        </h3>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                            Web上で完結。面倒な電話やメールのやり取りを待つ必要はありません。
                            直感的な操作で、あなたのビジネスを加速させます。
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-green-500 text-3xl">verified_user</span>
                            <span className="text-base font-medium text-gray-400">SSL暗号化通信でセキュアに見積もり可能です</span>
                        </div>
                    </div>
                    <div className="lg:col-span-6 flex flex-col items-center lg:items-end gap-12">
                        <div className="relative group w-full max-w-md">
                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-12 lg:p-16 rounded-[3rem] flex items-center justify-between shadow-2xl overflow-hidden">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">見積もり結果</p>
                                    <p className="text-2xl font-bold text-white">確定料金表示</p>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">0</span>
                                    <span className="text-4xl font-black text-primary ml-3 italic w-full">秒</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-md">
                            <button className="w-full group/btn bg-primary hover:bg-primary/90 text-white p-8 rounded-2xl flex items-center justify-between transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(34,58,112,0.5)] hover:-translate-y-2">
                                <span className="text-2xl font-bold">今すぐ試してみる</span>
                                <span className="material-symbols-outlined group-hover/btn:translate-x-3 transition-transform text-3xl">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

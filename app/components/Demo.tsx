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
                <div className="group bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-slate-100 dark:border-gray-700 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-6">
                        <span className="font-black text-6xl text-slate-200 dark:text-white">01</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">サイズ入力</h3>
                    <div className="relative w-full aspect-[4/3] bg-slate-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-gray-700 mb-6">
                        <div className="absolute inset-0 p-8 flex flex-col justify-center items-center z-10">
                            <div className="w-full flex justify-between gap-3 mb-4">
                                <div className="flex-1 h-14 border-2 border-primary rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-sm font-bold text-primary">W</div>
                                <div className="flex-1 h-14 border border-slate-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-sm text-slate-400">H</div>
                                <div className="flex-1 h-14 border border-slate-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-sm text-slate-400">D</div>
                            </div>
                            <div className="w-2/3 h-2 bg-slate-200 dark:bg-gray-700 rounded-full"></div>
                        </div>
                        <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHo4TC9HDV4TQk4lnJByhtzU3yzajIjs-_y-AaVfE36z4g7vPN2cbLKTuzV7zdH5sau-lQm4fpHGLMy_PF2UnCrVYM2TR2hnlIMf7jOyVkB9HGhc5XycqrkiiDW7QcUUS2Bpjet3MF00DLPqo50jIriWdSXOl8iiuWxa7ClO5nXcCVqDEb-xauVcdjN8XLywzqdNsqZlqqJWHJ9bIkrtQUSAU7fZo2vitj3CaemSRNyRVFUViylhru02VWimfX2bqC3orLmxaIu00" />
                    </div>
                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed">
                        お手元の箱の「縦・横・高さ」の3辺を入力。定型サイズからの選択も可能です。
                    </p>
                </div>
                <div className="group bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-slate-100 dark:border-gray-700 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-6">
                        <span className="font-black text-6xl text-slate-200 dark:text-white">02</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">重さ入力</h3>
                    <div className="relative w-full aspect-[4/3] bg-slate-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-gray-700 mb-6">
                        <div className="absolute inset-0 p-8 flex flex-col justify-center items-center z-10">
                            <div className="w-full h-2.5 bg-slate-200 dark:bg-gray-700 rounded-full mb-6 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-primary rounded-full"></div>
                                <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-2 border-primary rounded-full shadow-lg"></div>
                            </div>
                            <div className="text-4xl font-black text-primary tracking-tight">15.5 <span className="text-lg font-medium text-slate-400">kg</span></div>
                        </div>
                        <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFxKxvpysewgu6NGsXkACI7N4Gf9BEqS-JTkgoRuD6jsRxw4dlBXssYlTSrqD3HH7HpKfQldrs4HlSKEWV9vUJEtRs_qXKVe5TIZzaFu1M8FP8vykET516PYDVwdLW_q43NUj0BEi_gt-z8H4z8f-G0DZCtw-cj5jGo7lQa7tTIm2AL_9QRLhnpVHdrm8jFeVatzZIqNCpbkMkssxa0IZmXsyyZBz_m1RdvRNBiqM6-kqte96pZRaoEP8AWfO-1VTMpTwoecyc6MY" />
                    </div>
                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed">
                        直感的なスライダー操作で重量を指定。入力の手間を最小限に抑えています。
                    </p>
                </div>
                <div className="group bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-slate-100 dark:border-gray-700 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-6">
                        <span className="font-black text-6xl text-slate-200 dark:text-white">03</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">場所選択</h3>
                    <div className="relative w-full aspect-[4/3] bg-slate-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-gray-700 mb-6">
                        <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQBjLR8NW4tJ5vDM0q15FuOvY8D4OeC73_zrk13BkGPfBtneHegLKRI93eiKGObSk8Q2aQ1HBIzaOLe5gziYzfPN-WqQw1OJthIQEqb5ufkjIh-BtCNVmRkX47UcPuYRik0UTtLzammTRaFFlKb2sJKDPovJfYi6vkvNtASMg-7hD8WCL3Lvy47MSmMnM8uG0Wh0rE7AWMwJiTf0H2FDGnHCuDG_a_VqVQNblN6BVQXWEUUs6Y8hCeQbu1rBVnTlQX76jvH5n2rwQ" />
                        <div className="absolute inset-0 bg-primary/5"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-gray-700">
                                <span className="material-symbols-outlined text-primary text-2xl">near_me</span>
                                <span className="text-base font-bold text-slate-900 dark:text-white">Tokyo, Shinjuku</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed">
                        配送エリアを選択するだけで完了。複雑な住所入力は必要ありません。
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
            <div className="mt-24 text-center">
                <div className="inline-block bg-slate-50 dark:bg-slate-800 py-3 px-8 rounded-full border border-slate-100 dark:border-slate-700">
                    <p className="text-gray-500 dark:text-gray-400 text-base font-bold tracking-wide">導入企業数 1,200社突破 | 物流業界のスタンダードへ</p>
                </div>
            </div>
        </main>
    );
}

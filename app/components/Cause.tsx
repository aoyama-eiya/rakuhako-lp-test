import React from 'react';

export default function Cause() {
    return (
        <section className="relative w-full py-32 px-12 bg-slate-900 text-white rounded-t-[6rem] -mt-12 shadow-[0_-30px_80px_rgba(0,0,0,0.4)] z-10">
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <div className="absolute -top-24 -left-24 w-[500px] h-[500px] border-[80px] border-white rounded-full"></div>
                <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] border-[120px] border-primary rounded-full"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-6 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 h-[600px]">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/DSC07353.jpg')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-12 left-12 right-12">
                                <h3 className="text-4xl font-black leading-tight text-wrap-balance">
                                    技術革新から取り残された<br />物流業界の「構造的課題」
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="font-black leading-tight text-wrap-balance mb-6">
                                <span className="block text-4xl lg:text-6xl mb-4">発注先が見つからないのはなぜ？</span>
                                <span className="block text-2xl lg:text-3xl text-slate-300">〜梱包業界が抱える「9割問題」とは〜</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed text-wrap-balance">
                                梱包業界の売上の約9割を数社の大口顧客が占め、残り1割の小口顧客が切り捨てられている――。<br />
                                私たちはこの歪な収益構造と市場の不均衡を<strong>「9割問題」</strong>と呼んでいます。
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* 1. Industry Structure */}
                            <div>
                                <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">1</span>
                                    業界の構造的な「9割」の実態
                                </h4>
                                <div className="pl-11 border-l-2 border-white/10 ml-4 pb-2">
                                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                                        既存業者は、効率の悪い「小口案件」に対応する余裕がなく、全体の9割を占める大口顧客への対応に特化した体制（＝大口への依存）を作り上げています。
                                    </p>
                                    <ul className="grid grid-cols-10 gap-1">
                                        <li className="col-span-9 bg-white/5 rounded-lg p-3 text-center flex items-center justify-center">
                                            <div>
                                                <span className="block text-xl font-black text-white">90%</span>
                                                <span className="text-xs text-slate-500">大口顧客（数社）</span>
                                            </div>
                                        </li>
                                        <li className="col-span-1 bg-white/5 rounded-lg p-1 text-center border border-primary/30 relative overflow-hidden flex items-center justify-center">
                                            <div className="absolute inset-0 bg-primary/10"></div>
                                            <div className="relative">
                                                <span className="block text-xs font-black text-primary">10%</span>
                                                <span className="block text-[8px] text-primary/80 font-bold leading-tight transform scale-90 whitespace-nowrap">小口</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* 2. Two Evils */}
                            <div>
                                <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">2</span>
                                    この構造が引き起こす弊害
                                </h4>
                                <div className="pl-11 border-l-2 border-white/10 ml-4 space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <span className="block text-xs font-bold text-red-400 mb-1">A. 顧客側の問題（小口難民）</span>
                                        <p className="text-slate-400 text-sm">
                                            「頼める先がない」。既存業者にとって小口案件は儲からないため、見積もりを後回しにされたり、高額な料金を提示されたりして、事実上「放置」されています。
                                        </p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <span className="block text-xs font-bold text-red-400 mb-1">B. 業者側の問題（経営リスク）</span>
                                        <p className="text-slate-400 text-sm">
                                            大口顧客を1社失うだけで経営危機に。また、システム投資の余力がなく、変化できない「イノベーターのジレンマ」に陥っています。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Solution */}
                            <div>
                                <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">3</span>
                                    解決策（逆転の発想）
                                </h4>
                                <div className="pl-11 ml-4 pt-2">
                                    <p className="text-slate-300 font-bold leading-relaxed mb-4">
                                        Web完結のデジタル自動化でコストを極限まで下げ、<br />
                                        <span className="text-primary underline decoration-primary/30 decoration-2 underline-offset-4">切り捨てられていた「残り1割」を救う。</span>
                                    </p>
                                    <a className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-primary hover:text-primary transition-colors pb-0.5" href="#service">
                                        その仕組みを見る <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

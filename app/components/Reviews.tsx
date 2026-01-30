import React from 'react';

export default function Reviews() {
    return (
        <section className="relative w-full py-24 px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-grid-pattern"></div>
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-4 text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary dark:text-sky-300 text-sm font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        Customer Success
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        導入企業様の声
                    </h2>
                    <div className="w-24 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-3xl text-lg leading-relaxed">
                        多くの物流・製造現場で「ラクハコキット」が選ばれ、<br className="hidden md:block" />業務効率の劇的な向上を実現しています。
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Review 1 */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col h-full relative overflow-hidden group">


                        {/* Header */}
                        <div className="flex items-center gap-5 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
                            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                                <span className="material-symbols-outlined text-3xl">face_3</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">産業機械メーカー</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">営業事務（30代女性）</p>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="space-y-8 flex-grow">
                            {/* Before */}
                            <div className="relative">
                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                                <div className="pl-6">
                                    <h4 className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <span className="material-symbols-outlined text-lg">sentiment_stressed</span> 利用前の悩み
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                                        「以前は、営業担当から急に『この部品、明日発送したいから手配よろしく！』と頼まれるのが恐怖でした。既存の業者さんに電話しても担当者が不在だったり、FAXで見積もり依頼をしても返事が来るのは早くて翌日…。お客様をお待たせしているプレッシャーで、本来の事務作業も手につきませんでした。」
                                    </p>
                                </div>
                            </div>

                            {/* Reason */}
                            <div className="relative">
                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                                <div className="pl-6">
                                    <h4 className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <span className="material-symbols-outlined text-lg">check_circle</span> 選んだ理由
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                                        「『電話もFAXも不要、3つの質問だけでその場で価格が出る』という点に惹かれました。上司に稟議を通す時も、『これなら見積もり待ちのタイムロスがなくなります』と画面を見せて即決してもらえました。」
                                    </p>
                                </div>
                            </div>

                            {/* After */}
                            <div className="bg-primary/5 dark:bg-primary/10 -mx-4 -mb-4 p-8 rounded-2xl md:-mx-6 md:-mb-6">
                                <h4 className="flex items-center gap-2 text-primary font-bold text-lg mb-4">
                                    <span className="material-symbols-outlined">auto_awesome</span> 利用後の変化
                                </h4>
                                <p className="text-slate-900 dark:text-white font-bold leading-relaxed text-lg">
                                    「劇的に楽になりました！サイズと重さを入力してエンターキーを押すだけなので、見積もり時間は『2日』から『10秒』に短縮。急な出荷依頼が来てもと余裕で答えられるようになり、定時で帰れる日が増えました。」
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col h-full relative overflow-hidden group">


                        {/* Header */}
                        <div className="flex items-center gap-5 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <span className="material-symbols-outlined text-3xl">face_6</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">機械部品商社</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">物流マネージャー（40代男性）</p>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="space-y-8 flex-grow">
                            {/* Before */}
                            <div className="relative">
                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                                <div className="pl-6">
                                    <h4 className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <span className="material-symbols-outlined text-lg">sentiment_stressed</span> 利用前の悩み
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                                        「以前は、輸出案件のたびに『調整業務』に忙殺されていました。梱包業者にサイズを確定してもらい、その数値をフォワーダーに伝えてLCLの運賃を確認し、さらに通関業者にも書類を送る…。この『業者間の伝言ゲーム』のせいで、ブッキング完了までに数日のロスが発生し、急ぎの案件では冷や汗をかくこともありました。」
                                    </p>
                                </div>
                            </div>

                            {/* Reason */}
                            <div className="relative">
                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                                <div className="pl-6">
                                    <h4 className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <span className="material-symbols-outlined text-lg">check_circle</span> 選んだ理由
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                                        「山口物流さんが『梱包』だけでなく、『LCL手配（船積み）』から『通関』まで全てお任せできることが最大の決め手です。梱包仕様がラクハコキットで決まったら、そのままワンクリック感覚で船の予約と通関手配まで依頼できます。『梱包屋さんと乙仲（フォワーダー）が一緒になった』ような便利さは、他にはありませんでした。」
                                    </p>
                                </div>
                            </div>

                            {/* After */}
                            <div className="bg-primary/5 dark:bg-primary/10 -mx-4 -mb-4 p-8 rounded-2xl md:-mx-6 md:-mb-6">
                                <h4 className="flex items-center gap-2 text-primary font-bold text-lg mb-4">
                                    <span className="material-symbols-outlined">auto_awesome</span> 利用後の変化
                                </h4>
                                <p className="text-slate-900 dark:text-white font-bold leading-relaxed text-lg">
                                    「梱包完了と同時に船積み手配が終わっているため、リードタイムが劇的に短縮されました。 面倒なLCLの料金確認や通関書類のやり取りも一箇所で完結するので、私の業務量は半分以下に。規格外の貨物でも、梱包から輸送まで一貫して相談できるので、今では『自社の海外物流部』として完全に頼り切っています。」
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col h-full relative overflow-hidden group">

                        {/* Header */}
                        <div className="flex items-center gap-5 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                <span className="material-symbols-outlined text-3xl">face_4</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">電子部品メーカー</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">購買担当（50代男性）</p>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="space-y-8 flex-grow">
                            {/* Before */}
                            <div className="relative">
                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                                <div className="pl-6">
                                    <h4 className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <span className="material-symbols-outlined text-lg">sentiment_stressed</span> 利用前の悩み
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                                        「購買の立場として一番困っていたのは、コストと納期の見通しが立たないことでした。特に特注梱包や変則サイズの案件では、梱包業者・フォワーダーそれぞれから見積もりを取り寄せ、条件をすり合わせるのに何日もかかる。営業部からは『いつ決まる？』と急かされ、社内調整と外部調整の板挟みで、正直かなり消耗していました。」
                                    </p>
                                </div>
                            </div>

                            {/* Reason */}
                            <div className="relative">
                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                                <div className="pl-6">
                                    <h4 className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        <span className="material-symbols-outlined text-lg">check_circle</span> 選んだ理由
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                                        「山口物流さんは、最初に必要な条件を入力するだけで梱包から輸送まで含めた全体像が見える点が決め手でした。個別に業者を当たらなくても、『ここまで含めた金額とリードタイム』が一括で把握できるので、社内説明が非常に楽でした。購買としては“比較できる状態”をすぐ作れるのがありがたかったですね。」
                                    </p>
                                </div>
                            </div>

                            {/* After */}
                            <div className="bg-primary/5 dark:bg-primary/10 -mx-4 -mb-4 p-8 rounded-2xl md:-mx-6 md:-mb-6">
                                <h4 className="flex items-center gap-2 text-primary font-bold text-lg mb-4">
                                    <span className="material-symbols-outlined">auto_awesome</span> 利用後の変化
                                </h4>
                                <p className="text-slate-900 dark:text-white font-bold leading-relaxed text-lg">
                                    「見積もりと手配のスピードが上がったことで、購買判断そのものに集中できるようになりました。これまでは調整業務に時間を取られていましたが、今では半日かかっていた作業が数十分で完了します。営業・物流・購買の会話もスムーズになり、社内全体の動きが確実に良くなったと感じています。」
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

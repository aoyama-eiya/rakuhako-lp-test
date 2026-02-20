import React from 'react';

const reviews = [
    {
        id: 1,
        company: "産業機械メーカー",
        role: "営業事務（30代女性）",
        bgPos: "10% 15%",
        paragraphs: [
            "以前は急な出荷依頼が入るたびに梱包業者に電話をかけまくり、FAXで図面を送って見積もり待ち…という繰り返しでした。返事が来るまで2〜3日かかることもザラで、その間ずっとソワソワしながら本来の営業事務の仕事が手につかない日々。",
            "ラクハコキット導入後は、サイズと重さを入力するだけで即座に概算価格が表示されるので、見積もり待ちの時間が「2日」から「10秒」に激減しました。",
            "上司への報告もスムーズになり、『もう昔には戻れない』というのが正直な感想です。定時で帰れる日が明らかに増えて、精神的にも本当に楽になりました。"
        ]
    },
    {
        id: 2,
        company: "機械部品商社",
        role: "物流マネージャー（40代男性）",
        bgPos: "50% 15%",
        paragraphs: [
            "弊社は海外への出荷が多く、梱包だけでなくLCL（船積み）の手配や通関書類の準備まで、複数の業者に個別に連絡を取る必要がありました。業者間で情報がうまく共有されず、いわゆる『伝言ゲーム』状態。納期遅れやミスが頻発していました。",
            "ラクハコキットを導入してからは、梱包から輸送手配まで一括で相談・依頼できるようになり、リードタイムが従来の約半分に短縮。",
            "私自身の調整業務も大幅に減り、今では戦略的な物流改善に時間を使えるようになりました。もはや『自社の海外物流部門』として完全に頼り切っています。"
        ]
    },
    {
        id: 3,
        company: "電子部品メーカー",
        role: "購買担当（50代男性）",
        bgPos: "90% 15%",
        paragraphs: [
            "長年この業界にいますが、梱包のコストと納期の見通しが立たないことが最大のストレスでした。上長から『いくらかかる？いつ届く？』と聞かれても、業者の返答待ちで即答できず、社内調整に半日以上費やすことも珍しくありませんでした。",
            "導入後は必要な条件を入力するだけで全体像が一目で把握できるため、会議中にその場で概算を提示できるようになりました。調整業務にかかっていた半日の作業が数十分で完了し、購買判断そのものに集中できる環境が整いました。",
            "若い部下にも使わせていますが、操作が簡単で教育コストもほとんどかかりません。"
        ]
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        導入企業様の声
                    </h2>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 -mx-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 scrollbar-hide">
                    {reviews.map((review) => (
                        <div key={review.id} className="snap-center shrink-0 w-[85vw] md:w-auto flex flex-col bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-700 h-full">
                            {/* Google Review Style Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 shrink-0 overflow-hidden"
                                    style={{
                                        backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/avatars-group.png')`,
                                        backgroundPosition: review.bgPos,
                                        backgroundSize: "300% auto",
                                        backgroundRepeat: "no-repeat"
                                    }}
                                ></div>
                                <div>
                                    <h3 className="font-bold text-white text-base">{review.company}</h3>
                                    <p className="text-xs text-slate-400">{review.role}</p>
                                </div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                            </div>

                            {/* Text with paragraphs */}
                            <div className="text-slate-300 text-sm leading-relaxed font-medium space-y-3">
                                {review.paragraphs.map((p, idx) => (
                                    <p key={idx}>{idx === 0 ? `"${p}` : idx === review.paragraphs.length - 1 ? `${p}"` : p}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile scroll hint */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                </div>
            </div>
        </section>
    );
}

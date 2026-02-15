import React from 'react';

const reviews = [
    {
        id: 1,
        company: "産業機械メーカー",
        role: "営業事務（30代女性）",
        bgPos: "10% 20%",
        text: "以前は急な出荷依頼やFAXでの見積もり待ちに追われ、本来の業務が手につきませんでした。ラクハコキット導入後は、サイズと重さを入力するだけで即座に価格が分かり、見積もり時間が「2日」から「10秒」に短縮。定時で帰れる日が増え、精神的にも劇的に楽になりました。"
    },
    {
        id: 2,
        company: "機械部品商社",
        role: "物流マネージャー（40代男性）",
        bgPos: "50% 12%",
        text: "梱包だけでなく、LCL（船積み）から通関まで一括で任せられるのが最大の決め手でした。業者間の「伝言ゲーム」がなくなり、リードタイムが大幅に短縮。私の業務量も半分以下になり、今では「自社の海外物流部」として完全に頼り切っています。"
    },
    {
        id: 3,
        company: "電子部品メーカー",
        role: "購買担当（50代男性）",
        bgPos: "90% 15%",
        text: "コストと納期の見通しが立たず、社内調整に消耗していましたが、導入後は必要な条件を入力するだけで全体像が一目で分かるようになりました。調整業務にかかっていた半日の作業が数十分で完了し、購買判断そのものに集中できるようになりました。"
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        導入企業様の声
                    </h2>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 -mx-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 scrollbar-hide">
                    {reviews.map((review) => (
                        <div key={review.id} className="snap-center shrink-0 w-[85vw] md:w-auto flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 h-full">
                            {/* Google Review Style Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 shrink-0"
                                    style={{
                                        backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/avatars-group.png')`,
                                        backgroundPosition: review.bgPos,
                                        backgroundSize: "300% auto",
                                        backgroundRepeat: "no-repeat"
                                    }}
                                ></div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{review.company}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{review.role}</p>
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

                            {/* Text */}
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                                "{review.text}"
                            </p>
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
